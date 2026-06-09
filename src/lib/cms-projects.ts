import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';

import { toHomeCard, toProjectDetail } from '@/lib/utils';
import type { Project, ProjectDetail, ProjectHomeCard } from '@/types/interfaces';

type CmsProjectDoc = {
    slug: string;
    title: string;
    category: string;
    filterCategory: string;
    year: string;
    locationValue: string;
    coverImage: {
        src: string;
        alt: string;
    };
    status?: string | null;
    description?: string | null;
    technicalParameters?: string | null;
    coverCaptionLeft?: string | null;
    gallery?: { src: string; alt: string; id?: string | null }[] | null;
    showOnHome?: boolean | null;
};

const getPayloadClient = cache(async () => getPayload({ config }));

function mapCmsProject(doc: CmsProjectDoc): Project {
    return {
        slug: doc.slug,
        title: doc.title,
        category: doc.category,
        filterCategory: doc.filterCategory,
        year: doc.year,
        locationValue: doc.locationValue,
        coverImage: doc.coverImage,
        status: doc.status ?? undefined,
        description: doc.description ?? undefined,
        technicalParameters: doc.technicalParameters ?? undefined,
        coverCaptionLeft: doc.coverCaptionLeft ?? undefined,
        gallery: doc.gallery?.map(({ src, alt }) => ({ src, alt })),
        showOnHome: doc.showOnHome ?? undefined,
    };
}

export const getAllProjectsFromCMS = cache(async (): Promise<Project[]> => {
    const payload = await getPayloadClient();

    const { docs } = (await payload.find({
        collection: 'projects' as never,
        limit: 1000,
        sort: 'createdAt',
    })) as { docs: CmsProjectDoc[] };

    return docs.map(mapCmsProject);
});

export const getProjectDetailFromCMS = cache(
    async (slug: string): Promise<ProjectDetail | null> => {
        const allProjects = await getAllProjectsFromCMS();
        const index = allProjects.findIndex((project) => project.slug === slug);
        if (index === -1) return null;
        return toProjectDetail(allProjects[index], index + 1, allProjects.length);
    },
);

export const getAllProjectSlugsFromCMS = cache(async (): Promise<string[]> => {
    const allProjects = await getAllProjectsFromCMS();
    return allProjects.map((project) => project.slug);
});

export const getHomeProjectsFromCMS = cache(async (): Promise<ProjectHomeCard[]> => {
    const payload = await getPayloadClient();

    // payload-types.ts is stale; `projects` exists in config and DB.
    const { docs } = (await payload.find({
        collection: 'projects' as never,
        where: {
            showOnHome: {
                equals: true,
            },
        },
        limit: 100,
        sort: '-createdAt',
    })) as { docs: CmsProjectDoc[] };

    return docs.map((doc) => toHomeCard(mapCmsProject(doc)));
});
