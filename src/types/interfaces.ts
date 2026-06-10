export type GalleryImage = {
    src: string;
    alt: string;
};

/** Главный тип проекта в портфолио */
export type Project = {
    slug: string;
    title: string;
    category: string;
    filterCategory: string;
    year: string;
    locationValue: string;
    coverImage: GalleryImage;
    status?: string;
    description?: string;
    technicalParameters?: string;
    coverCaptionLeft?: string;
    gallery?: GalleryImage[];
    showOnHome?: boolean;
};

/** Строка таблицы на странице `/projects` (ProjectsFilters) */
export type ProjectListItem = Pick<
    Project,
    'slug' | 'title' | 'locationValue' | 'filterCategory'
> & {
    href: string;
};

/** Данные для страницы `/projects/[slug]` после нормализации полей */
export type ProjectDetail = Pick<
    Project,
    'slug' | 'title' | 'category' | 'locationValue'
> & {
    status: string;
    description: string;
    technicalParameters: string;
    coverCaptionLeft: string;
    galleryImages: GalleryImage[];
    index: number;
    total: number;
};

/** Карточка проекта на главной странице */
export type ProjectHomeCard = Pick<
    Project,
    'title' | 'category' | 'year' | 'technicalParameters'
> & {
    href: string;
    imageSrc: string;
    imageAlt: string;
};
