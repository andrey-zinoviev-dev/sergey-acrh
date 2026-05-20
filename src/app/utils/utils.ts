import { ProjectPagePayload, ProjectProps } from '@/app/interfaces/interfaces';

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

function projectHref(title: string): string {
    return `/projects/${slugifyProjectTitle(title)}`;
}

export const projects: ProjectProps[] = [
    {
        href: projectHref('Нагатинский Затон метро'),
        category: 'Территории',
        title: 'Нагатинский Затон метро',
        year: '2017',
        locationValue: 'Москва',
        imageSrc: '/Zaton.png',
        imageAlt: 'Метро Нагатинский Затон',
        status: 'Реализовано',
        coverCaptionLeft: 'Территории · станция метро · 2017',
        description:
            'Участие в благоустройстве набережной и прилегающей территории у станции «Нагатинский Затон» Московского метрополитена. Задача — связать транспортный узел с рекреационным контекстом набережной, выдержать масштаб инженерных объектов и плотность городской среды.',
        technicalParameters:
            'Градостроительный и ландшафтный контекст; координация с инженерией метрополитена и благоустройством. Рабочие пакеты: генеральный план участка, принципиальные разрезы набережной, ведомости покрытий и озеленения, ключевые узлы малых форм.',
    },
    {
        href: projectHref('Стадион Луи II в Монако'),
        category: 'Реконструкция',
        title: 'Стадион Луи II в Монако',
        year: '2025',
        locationValue: 'Монако',
        imageSrc: '/Lui.png',
        imageAlt: 'Стадион Луи II',
        status: 'Проект',
        coverCaptionLeft: 'Реконструкция · спортивный объект · 2025',
        description:
            'Работы по обновлению архитектурного облика и функциональной среды легендарного стадиона в плотной застройке Монако. Акцент на читаемости силуэта, логистике зрителей и соответствии требованиям международных спортивных федераций при ограниченной площадке.',
        technicalParameters:
            'Реконструкция действующего объекта; нормы UEFA/FIFA и локальные регламенты Княжества. Этапы: обследование, варианты фасадов и кровли, схемы инженерных коробов, спецификации материалов с повышенной устойчивостью к морскому климату.',
    },
    {
        href: projectHref('Новый город: Город Света'),
        category: 'Территории',
        title: 'Новый город: Город Света',
        year: '2025',
        locationValue: 'Калининградская область',
        imageSrc: '/project-1.png',
        imageAlt: 'Светлоград',
    },
    {
        href: projectHref('Skyborn gardens в Абу-Даби'),
        category: 'Сакральное и общественное',
        title: 'Skyborn gardens в Абу-Даби',
        year: '2023',
        locationValue: 'Абу-Даби',
        imageSrc: '/project-1.png',
        imageAlt: 'Skyborn gardens, Reem Island',
    },
    {
        href: projectHref('Ферсман Тауэр'),
        category: 'Частная архитектура',
        title: 'Ферсман Тауэр',
        year: '2021',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Ферсман Тауэр',
    },
    {
        href: projectHref('Центр культуры РФ в Сингапуре'),
        category: 'Сакральное и общественное',
        title: 'Центр культуры РФ в Сингапуре',
        year: '2020',
        locationValue: 'Сингапур',
        imageSrc: '/project-1.png',
        imageAlt: 'Центр культуры РФ при Храме Успения Божьей Матери',
    },
    {
        href: projectHref('Храм в честь пророка Илии'),
        category: 'Сакральное и общественное',
        title: 'Храм в честь пророка Илии',
        year: '2023',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Храм святого пропрока Божьего Илии',
    },
    {
        href: projectHref('Респис для детей "Ковчег"'),
        category: 'Сакральное и общественное',
        title: 'Респис для детей "Ковчег"',
        year: '2018',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Храм впропрока Божьего Илии',
    },
    {
        href: projectHref('Клиника "Семейный Доктор"'),
        category: 'Сакральное и общественное, дизайн',
        title: 'Клиника "Семейный Доктор"',
        year: '2023',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Офис Семейный Доктор',
    },
    {
        href: projectHref('Декорация к опере Тангейзер в Зарядье'),
        category: 'Дизнайн и арт-объекты',
        title: 'Декорация к опере Тангейзер в Зарядье',
        year: '2025',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Тангейзер в Зарядье',
    },
];

/** Home page “Мои проекты” — curated subset; full portfolio on `/projects`. */
const HOME_PAGE_EXCLUDED_TITLES = new Set([
    'Храм в честь пророка Илии',
    'Респис для детей "Ковчег"',
    'Центр культуры РФ в Сингапуре',
    'Ферсман Тауэр',
]);

export const homeProjects: ProjectProps[] = projects.filter(
    (p) => !HOME_PAGE_EXCLUDED_TITLES.has(p.title),
);

function defaultDescription(project: ProjectProps): string {
    return `Проект «${project.title}» (${project.year}, ${project.locationValue}) в направлении «${project.category}». В работе — архитектурная концепция, развитие объёма и материальности, согласование ключевых решений с заказчиком и смежными специалистами.`;
}

function defaultTechnicalParameters(project: ProjectProps): string {
    return `Объём сопоставим с полным циклом проектирования для объекта данного класса: от аналитики площадки до рабочей документации по архитектуре. Нормативная база — действующие стандарты и требования площадки в ${project.locationValue}; при необходимости — BIM-сопровождение и спецификации узлов.`;
}

export function getProjectPagePayload(slug: string): ProjectPagePayload | null {
    const index = projects.findIndex((p) => slugifyProjectTitle(p.title) === slug);
    if (index === -1) return null;
    const project = projects[index];
    return {
        ...project,
        slug,
        index: index + 1,
        total: projects.length,
        status: project.status ?? 'В портфолио',
        description: project.description ?? defaultDescription(project),
        technicalParameters: project.technicalParameters ?? defaultTechnicalParameters(project),
        coverCaptionLeft:
            project.coverCaptionLeft ?? `${project.category} · ${project.year}`,
    };
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => slugifyProjectTitle(p.title));
}