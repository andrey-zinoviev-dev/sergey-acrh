export type GalleryImage = {
    src: string;
    alt: string;
};

export interface ProjectProps {
    href: string;
    category: string;
    /** Направление для фильтра на странице «Проекты» */
    filterCategory: string;
    title: string;
    year: string;
    locationValue: string;
    imageSrc: string;
    imageAlt: string;
    /** Статус объекта для страницы проекта */
    status?: string;
    /** Полный текст описания; если нет — подставляется из шаблона */
    description?: string;
    /** Технические параметры / объём работ */
    technicalParameters?: string;
    /** Подпись слева под обложкой */
    coverCaptionLeft?: string;
    /** Галерея на странице проекта; если нет — подставляется обложка и stock-изображения */
    galleryImages?: GalleryImage[];
}

/** Полные данные для страницы `/projects/[slug]` после нормализации полей */
export type ProjectPagePayload = Omit<
    ProjectProps,
    'status' | 'description' | 'technicalParameters' | 'coverCaptionLeft' | 'galleryImages'
> & {
    slug: string;
    index: number;
    total: number;
    status: string;
    description: string;
    technicalParameters: string;
    coverCaptionLeft: string;
    galleryImages: GalleryImage[];
};