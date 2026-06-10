import type {
    GalleryImage,
    Project,
    ProjectDetail,
    ProjectHomeCard,
    ProjectListItem,
} from '../types/interfaces.ts';

const CYRILLIC_TO_LATIN: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
    з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
    п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu',
    я: 'ya',
};

/** URL slug from project title (Cyrillic → Latin, readable segments). */
export function slugifyProjectTitle(title: string): string {
    let result = '';
    for (const char of title.toLowerCase()) {
        if (CYRILLIC_TO_LATIN[char] !== undefined) {
            result += CYRILLIC_TO_LATIN[char];
        } else if (/[a-z0-9]/.test(char)) {
            result += char;
        } else {
            result += '-';
        }
    }
    return result.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function projectHref(slug: string): string {
    return `/projects/${slug}`;
}

export function toListItem(project: Project): ProjectListItem {
    return {
        slug: project.slug,
        title: project.title,
        locationValue: project.locationValue,
        filterCategory: project.filterCategory,
        href: projectHref(project.slug),
    };
}

export function toHomeCard(project: Project): ProjectHomeCard {
    return {
        href: projectHref(project.slug),
        title: project.title,
        category: project.category,
        year: project.year,
        imageSrc: project.coverImage.src,
        imageAlt: project.coverImage.alt,
        technicalParameters: project.technicalParameters,
    };
}

export const PROJECT_FILTER_CATEGORIES = [
    'Все',
    'Концептуальные проекты',
    'Градостроительство и территории',
    'Многоэтажные дома',
    'Отели, SPA и офисы',
    'Частные дома и виллы',
    'Реставрация и реконструкция',
    'Архитектура храмов',
    'Социальные объекты',
    'Общественные интерьеры',
    'Частные интерьеры',
    'Конструкции',
    'Арт-объекты и искусство',
] as const;

export type ProjectFilterCategory = (typeof PROJECT_FILTER_CATEGORIES)[number];

/** Stock gallery images (Unsplash) — placeholder until project-specific photos are added. */
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

function buildDefaultGalleryImages(project: Project): GalleryImage[] {
    const cover = project.coverImage;
    const extras = STOCK_GALLERY_IMAGES.filter((image) => image.src !== cover.src).slice(
        0,
        DEFAULT_GALLERY_SIZE - 1,
    );
    return [cover, ...extras];
}

function defaultDescription(project: Project): string {
    return `Проект «${project.title}» (${project.year}, ${project.locationValue}) в направлении «${project.category}». В работе — архитектурная концепция, развитие объёма и материальности, согласование ключевых решений с заказчиком и смежными специалистами.`;
}

function defaultTechnicalParameters(project: Project): string {
    return `Объём сопоставим с полным циклом проектирования для объекта данного класса: от аналитики площадки до рабочей документации по архитектуре. Нормативная база — действующие стандарты и требования площадки в ${project.locationValue}; при необходимости — BIM-сопровождение и спецификации узлов.`;
}

export function toProjectDetail(
    project: Project,
    index: number,
    total: number,
): ProjectDetail {
    return {
        slug: project.slug,
        title: project.title,
        category: project.category,
        locationValue: project.locationValue,
        index,
        total,
        status: project.status ?? 'В портфолио',
        description: project.description ?? defaultDescription(project),
        technicalParameters: project.technicalParameters ?? defaultTechnicalParameters(project),
        coverCaptionLeft:
            project.coverCaptionLeft ?? `${project.category} · ${project.year}`,
        galleryImages:
            project.gallery && project.gallery.length > 0
                ? project.gallery
                : buildDefaultGalleryImages(project),
    };
}
