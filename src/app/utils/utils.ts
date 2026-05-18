import { ProjectPagePayload, ProjectProps } from '@/app/interfaces/interfaces';

export const projects: ProjectProps[] = [
    {
        href: '/projects/1',
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
        href: '/projects/2',
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
        href: '/projects/3',
        category: 'Территории',
        title: 'Новый город: Город Света',
        year: '2025',
        locationValue: 'Калининградская область',
        imageSrc: '/project-1.png',
        imageAlt: 'Светлоград',
    },
    {
        href: '/projects/4',
        category: 'Сакральное и общественное',
        title: 'Skyborn gardens в Абу-Даби',
        year: '2023',
        locationValue: 'Абу-Даби',
        imageSrc: '/project-1.png',
        imageAlt: 'Skyborn gardens, Reem Island',
    },
    {
        href: '/projects/5',
        category: 'Частная архитектура',
        title: 'Ферсман Тауэр',
        year: '2021',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Ферсман Тауэр',
    },
    {
        href: '/projects/6',
        category: 'Сакральное и общественное',
        title: 'Центр культуры РФ в Сингапуре',
        year: '2020',
        locationValue: 'Сингапур',
        imageSrc: '/project-1.png',
        imageAlt: 'Центр культуры РФ при Храме Успения Божьей Матери',
    },
    {
        href: '/projects/7',
        category: 'Сакральное и общественное',
        title: 'Храм в честь пророка Илии',
        year: '2023',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Храм святого пропрока Божьего Илии',
    },
    {
        href: '/projects/8',
        category: 'Сакральное и общественное',
        title: 'Респис для детей "Ковчег"',
        year: '2018',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Храм впропрока Божьего Илии',
    },
    {
        href: '/projects/9',
        category: 'Сакральное и общественное, дизайн',
        title: 'Клиника "Семейный Доктор"',
        year: '2023',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Офис Семейный Доктор',
    },
    {
        href: '/projects/10',
        category: 'Дизнайн и арт-объекты',
        title: 'Декорация к опере Тангейзер в Зарядье',
        year: '2025',
        locationValue: 'Москва',
        imageSrc: '/project-1.png',
        imageAlt: 'Тангейзер в Зарядье',
    },
];

function defaultDescription(project: ProjectProps): string {
    return `Проект «${project.title}» (${project.year}, ${project.locationValue}) в направлении «${project.category}». В работе — архитектурная концепция, развитие объёма и материальности, согласование ключевых решений с заказчиком и смежными специалистами.`;
}

function defaultTechnicalParameters(project: ProjectProps): string {
    return `Объём сопоставим с полным циклом проектирования для объекта данного класса: от аналитики площадки до рабочей документации по архитектуре. Нормативная база — действующие стандарты и требования площадки в ${project.locationValue}; при необходимости — BIM-сопровождение и спецификации узлов.`;
}

export function getProjectPagePayload(slug: string): ProjectPagePayload | null {
    const index = projects.findIndex((p) => p.href === `/projects/${slug}`);
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
    return projects.map((p) => p.href.replace('/projects/', ''));
}