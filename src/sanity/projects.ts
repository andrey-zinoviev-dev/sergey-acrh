import type { GalleryImage } from '@/types/gallery';

import { sanityClient } from './client';
import { urlFor } from './image';
import {
  PROJECT_BY_SLUG_QUERY,
  PROJECTS_HOME_QUERY,
  PROJECTS_LIST_QUERY,
  PROJECT_SLUGS_QUERY,
} from './queries';

type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
  };
};

type SanityProjectDetail = {
  slug?: string;
  title: string;
  category: string;
  year: string;
  locationValue: string;
  status?: string;
  description?: string;
  technicalParameters?: string;
  coverCaptionLeft?: string;
  coverImage?: SanityImage;
  gallery?: SanityImage[] | null;
};

type SanityProjectHome = {
  slug?: string;
  title: string;
  category: string;
  year: string;
  technicalParameters?: string;
  coverImage?: SanityImage;
};

const STOCK_GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=900&fit=crop',
    alt: 'Современное здание с панорамным остеклением',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671b04002?h=900&w=1600&fit=crop',
    alt: 'Архитектурный фасад и конструктивные элементы',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop',
    alt: 'Интерьер с вертикальными панелями',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
    alt: 'Офисное пространство и инженерные системы',
  },
  {
    src: 'https://images.unsplash.com/photo-1479834346498-167754f3cc2e?w=1600&h=900&fit=crop',
    alt: 'Градостроительный контекст и застройка',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop',
    alt: 'Частный дом и ландшафт',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop',
    alt: 'Интерьер с деревянными акцентами',
  },
];

const DEFAULT_GALLERY_SIZE = 6;

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

function buildDefaultGalleryImages(cover: GalleryImage): GalleryImage[] {
  const extras = STOCK_GALLERY_IMAGES.filter((image) => image.src !== cover.src).slice(
    0,
    DEFAULT_GALLERY_SIZE - 1,
  );
  return [cover, ...extras];
}

function defaultDescription(doc: SanityProjectDetail): string {
  return `Проект «${doc.title}» (${doc.year}, ${doc.locationValue}) в направлении «${doc.category}». В работе — архитектурная концепция, развитие объёма и материальности, согласование ключевых решений с заказчиком и смежными специалистами.`;
}

function defaultTechnicalParameters(doc: SanityProjectDetail): string {
  return `Объём сопоставим с полным циклом проектирования для объекта данного класса: от аналитики площадки до рабочей документации по архитектуре. Нормативная база — действующие стандарты и требования площадки в ${doc.locationValue}; при необходимости — BIM-сопровождение и спецификации узлов.`;
}

export async function getProjects() {
  const docs = await sanityClient.fetch<
    Array<{
      title: string;
      slug?: string;
      locationValue: string;
      filterCategory: string;
    }>
  >(PROJECTS_LIST_QUERY);

  return docs
    .filter((doc) => doc.slug)
    .map((doc) => {
      const slug = normalizeSlug(doc.slug!);
      return {
        slug,
        title: doc.title,
        locationValue: doc.locationValue,
        filterCategory: doc.filterCategory,
        href: `/projects/${slug}`,
      };
    });
}

export async function getHomeProjects() {
  const docs = await sanityClient.fetch<SanityProjectHome[]>(PROJECTS_HOME_QUERY);

  return docs.flatMap((doc) => {
    if (!doc.slug) return [];

    const coverImage = mapGalleryImage(doc.coverImage ?? {}, doc.title);
    if (!coverImage) return [];

    const slug = normalizeSlug(doc.slug);
    return [
      {
        href: `/projects/${slug}`,
        title: doc.title,
        category: doc.category,
        year: doc.year,
        imageSrc: coverImage.src,
        imageAlt: coverImage.alt,
        technicalParameters: doc.technicalParameters,
      },
    ];
  });
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const docs = await sanityClient.fetch<Array<{ slug?: string }>>(PROJECT_SLUGS_QUERY);
  return docs
    .map((doc) => (doc.slug ? normalizeSlug(doc.slug) : null))
    .filter((slug): slug is string => Boolean(slug));
}

export async function getProjectDetail(slug: string) {
  const doc = await sanityClient.fetch<SanityProjectDetail | null>(PROJECT_BY_SLUG_QUERY, {
    slugCandidates: slugCandidates(slug),
  });

  if (!doc?.slug) return null;

  const coverImage = mapGalleryImage(doc.coverImage ?? {}, doc.title);
  if (!coverImage) return null;

  const gallery =
    doc.gallery
      ?.map((image) => mapGalleryImage(image, doc.title))
      .filter((image): image is GalleryImage => image !== null) ?? [];

  return {
    title: doc.title,
    category: doc.category,
    locationValue: doc.locationValue,
    status: doc.status ?? 'В портфолио',
    description: doc.description ?? defaultDescription(doc),
    technicalParameters: doc.technicalParameters ?? defaultTechnicalParameters(doc),
    coverCaptionLeft: doc.coverCaptionLeft ?? `${doc.category} · ${doc.year}`,
    galleryImages: gallery.length > 0 ? gallery : buildDefaultGalleryImages(coverImage),
  };
}

export type ProjectListRow = Awaited<ReturnType<typeof getProjects>>[number];
export type ProjectHomeCard = Awaited<ReturnType<typeof getHomeProjects>>[number];
export type ProjectPage = NonNullable<Awaited<ReturnType<typeof getProjectDetail>>>;
