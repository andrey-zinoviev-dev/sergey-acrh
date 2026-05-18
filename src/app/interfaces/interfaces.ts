export interface ProjectProps {
    href: string;
    category: string;
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
}

/** Полные данные для страницы `/projects/[slug]` после нормализации полей */
export type ProjectPagePayload = Omit<
    ProjectProps,
    'status' | 'description' | 'technicalParameters' | 'coverCaptionLeft'
> & {
    slug: string;
    index: number;
    total: number;
    status: string;
    description: string;
    technicalParameters: string;
    coverCaptionLeft: string;
};