import { toHomeCard, toListItem, toProjectDetail } from '@/lib/utils';
import type {
  GalleryImage,
  Project,
  ProjectDetail,
  ProjectHomeCard,
  ProjectListItem,
} from '@/types/interfaces';

import { sanityClient } from './client';
import { urlFor } from './image';
import {
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
  PROJECTS_QUERY,
} from './queries';

type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
  };
};

type SanityProject = {
  slug?: string;
  title: string;
  category: string;
  filterCategory: string;
  year: string;
  locationValue: string;
  status?: string;
  description?: string;
  technicalParameters?: string;
  coverCaptionLeft?: string;
  showOnHome?: boolean | null;
  coverImage?: SanityImage;
  gallery?: SanityImage[] | null;
};

function normalizeSlug(rawSlug: string): string {
  return rawSlug.replace(/^\/projects\/?/, '').replace(/^\/+|\/+$/g, '');
}

function slugCandidates(rawSlug: string): string[] {
  const normalized = normalizeSlug(rawSlug);
  return Array.from(
    new Set([rawSlug, normalized, `/projects/${normalized}`, `projects/${normalized}`]),
  );
}

function mapGalleryImage(image: SanityImage, fallbackAlt: string): GalleryImage | null {
  if (!image?.asset?._ref) return null;

  return {
    src: urlFor(image).width(1600).height(900).fit('crop').url(),
    alt: image.alt ?? fallbackAlt,
  };
}

function mapSanityProject(doc: SanityProject): Project | null {
  if (!doc.slug) return null;

  const slug = normalizeSlug(doc.slug);
  const coverImage = mapGalleryImage(doc.coverImage ?? {}, doc.title);

  if (!coverImage) return null;

  const gallery =
    doc.gallery
      ?.map((image) => mapGalleryImage(image, doc.title))
      .filter((image): image is GalleryImage => image !== null) ?? undefined;

  return {
    slug,
    title: doc.title,
    category: doc.category,
    filterCategory: doc.filterCategory,
    year: doc.year,
    locationValue: doc.locationValue,
    coverImage,
    status: doc.status,
    description: doc.description,
    technicalParameters: doc.technicalParameters,
    coverCaptionLeft: doc.coverCaptionLeft,
    gallery,
    showOnHome: doc.showOnHome ?? true,
  };
}

export async function getProjects(): Promise<Project[]> {
  const docs = await sanityClient.fetch<SanityProject[]>(PROJECTS_QUERY);
  return docs
    .map(mapSanityProject)
    .filter((project): project is Project => project !== null);
}

export async function getProjectListItems(): Promise<ProjectListItem[]> {
  const projects = await getProjects();
  return projects.map(toListItem);
}

export async function getHomeProjects(): Promise<ProjectHomeCard[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.showOnHome).map(toHomeCard);
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const docs = await sanityClient.fetch<Array<{ slug?: string }>>(PROJECT_SLUGS_QUERY);
  return docs
    .map((doc) => (doc.slug ? normalizeSlug(doc.slug) : null))
    .filter((slug): slug is string => Boolean(slug));
}

export async function getProjectDetail(slug: string): Promise<ProjectDetail | null> {
  const doc = await sanityClient.fetch<SanityProject | null>(PROJECT_BY_SLUG_QUERY, {
    slugCandidates: slugCandidates(slug),
  });

  const project = doc ? mapSanityProject(doc) : null;
  if (!project) return null;

  const allProjects = await getProjects();
  const index = allProjects.findIndex((item) => item.slug === project.slug);
  if (index === -1) return toProjectDetail(project, 1, 1);

  return toProjectDetail(project, index + 1, allProjects.length);
}
