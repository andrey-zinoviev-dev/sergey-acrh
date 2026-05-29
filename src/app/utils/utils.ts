import { GalleryImage, ProjectPagePayload, ProjectProps } from '@/app/interfaces/interfaces';

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

function buildDefaultGalleryImages(project: ProjectProps): GalleryImage[] {
    const cover: GalleryImage = { src: project.imageSrc, alt: project.imageAlt };
    const extras = STOCK_GALLERY_IMAGES.filter((image) => image.src !== project.imageSrc).slice(
        0,
        DEFAULT_GALLERY_SIZE - 1,
    );
    return [cover, ...extras];
}

export const projects: ProjectProps[] = [
  {
    href: "/projects/nagatinsky-zaton",
    category: "САКРАЛЬНОЕ И ОБЩЕСТВЕННОЕ",
    filterCategory: "Социальные объекты",
    title: "Станция метро «Нагатинский затон»",
    year: "2020",
    locationValue: "РФ, Москва",
    imageSrc: "/Zaton.png",
    imageAlt:
      "Интерьер и конструктивные решения станции метро Нагатинский затон",
    status: "Проект",
    description:
      "Интеграция транспортной инфраструктуры в городскую среду через синтез ажурных металлических конструкций и панорамного остекления.",
    technicalParameters:
      "Проектирование архитектурного облика двухплатформенной станции мелкого заложения и наземного вестибюля.",
  },
  {
    href: "/projects/louis-ii-stadium",
    category: "РЕКОНСТРУКЦИЯ И РЕСТАВРАЦИЯ",
    filterCategory: "Реставрация и реконструкция",
    title: "Стадион Луи II",
    year: "2020",
    locationValue: "Княжество Монако",
    imageSrc: "/Lui.png",
    imageAlt: "Архитектурная концепция модернизации стадиона Луи II",
    status: "Концепт",
    description:
      "Масштабная реконцепция спортивного сооружения в мультимодальный хаб с сохранением исторического наследия и внедрением энергоэффективных технологий.",
    technicalParameters:
      "Модернизация объекта, трехуровневое зонирование фасадов, проектирование транспортного узла, реставрация исторических арок.",
  },
  {
    href: "/projects/svetlograd",
    category: "ТЕРРИТОРИИ",
    filterCategory: "Градостроительство и территории",
    title: "«Светлоград»",
    year: "2020",
    locationValue: "РФ, Калининградская область",
    imageSrc: "/project-1.png",
    imageAlt: "Генеральный план и зонирование города Светлоград",
    status: "Мастер-план",
    description:
      "Проектирование автономной городской экосистемы на принципах нового урбанизма, сбалансированного масштаба и бережной интеграции в природный ландшафт.",
    technicalParameters:
      "Разработка генерального плана и функционального зонирования территории площадью более 70 га.",
  },
  {
    href: "/projects/skyborn-gardens",
    category: "САКРАЛЬНОЕ И ОБЩЕСТВЕННОЕ",
    filterCategory: "Многоэтажные дома",
    title: "Skyborn Gardens",
    year: "2020",
    locationValue: "ОАЭ, Абу-Даби",
    imageSrc: "/project-1.png",
    imageAlt: "Высотный комплекс Skyborn Gardens в Абу-Даби",
    status: "Концепт",
    description:
      "Вертикальный урбанизм нового поколения: синергия параметрической высотной архитектуры, биоклиматических систем и многоуровневых связей.",
    technicalParameters:
      "Разработка архитектурного решения и генплана комплекса из пяти башен, соединенных мостовыми переходами.",
  },
  {
    href: "/projects/family-doctor",
    category: "САКРАЛЬНОЕ И ОБЩЕСТВЕННОЕ",
    filterCategory: "Общественные интерьеры",
    title: "«Семейный доктор»",
    year: "2020",
    locationValue: "Не указана",
    imageSrc: "/project-1.png",
    imageAlt: "Дизайн-интерьер и планировка клиники Семейный доктор",
    status: "Проект",
    description:
      "Создание эргономичного медицинского пространства, подчиненного строгой технологической логике, международным стандартам и психологическому комфорту.",
    technicalParameters:
      "Комплексная дизайн-концепция: планировочные решения, схемы инженерных сетей, расстановка оборудования и 3D-визуализация.",
  },
  {
    href: "/projects/tannhauser-opera",
    category: "ДИЗАЙН И АРТ-ОБЪЕКТЫ",
    filterCategory: "Арт-объекты и искусство",
    title: "«Тангейзер»",
    year: "2020",
    locationValue: "РФ, Москва, парк «Зарядье»",
    imageSrc: "/project-1.png",
    imageAlt: "Пространственная арт-инсталляция в парке Зарядье",
    status: "Реализован",
    description:
      "Проектирование средового арт-объекта на стыке театральной сценографии, монументальной архитектуры и точного инженерного расчета нагрузок.",
    technicalParameters:
      "Архитектурно-конструктивное проектирование инсталляции, расчет несущих нагрузок, подбор материалов и разработка монтажных схем.",
  },
];
// [
//     {
//         href: projectHref('Нагатинский Затон метро'),
//         category: 'Территории',
//         title: 'Нагатинский Затон метро',
//         year: '2017',
//         locationValue: 'Москва',
//         imageSrc: '/Zaton.png',
//         imageAlt: 'Метро Нагатинский Затон',
//         status: 'Реализовано',
//         coverCaptionLeft: 'Территории · станция метро · 2017',
//         description:
//             'Участие в благоустройстве набережной и прилегающей территории у станции «Нагатинский Затон» Московского метрополитена. Задача — связать транспортный узел с рекреационным контекстом набережной, выдержать масштаб инженерных объектов и плотность городской среды.',
//         technicalParameters:
//             'Градостроительный и ландшафтный контекст; координация с инженерией метрополитена и благоустройством. Рабочие пакеты: генеральный план участка, принципиальные разрезы набережной, ведомости покрытий и озеленения, ключевые узлы малых форм.',
//     },
//     {
//         href: projectHref('Стадион Луи II в Монако'),
//         category: 'Реконструкция',
//         title: 'Стадион Луи II в Монако',
//         year: '2025',
//         locationValue: 'Монако',
//         imageSrc: '/Lui.png',
//         imageAlt: 'Стадион Луи II',
//         status: 'Проект',
//         coverCaptionLeft: 'Реконструкция · спортивный объект · 2025',
//         description:
//             'Работы по обновлению архитектурного облика и функциональной среды легендарного стадиона в плотной застройке Монако. Акцент на читаемости силуэта, логистике зрителей и соответствии требованиям международных спортивных федераций при ограниченной площадке.',
//         technicalParameters:
//             'Реконструкция действующего объекта; нормы UEFA/FIFA и локальные регламенты Княжества. Этапы: обследование, варианты фасадов и кровли, схемы инженерных коробов, спецификации материалов с повышенной устойчивостью к морскому климату.',
//     },
//     {
//         href: projectHref('Новый город: Город Света'),
//         category: 'Территории',
//         title: 'Новый город: Город Света',
//         year: '2025',
//         locationValue: 'Калининградская область',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Светлоград',
//     },
//     {
//         href: projectHref('Skyborn gardens в Абу-Даби'),
//         category: 'Сакральное и общественное',
//         title: 'Skyborn gardens в Абу-Даби',
//         year: '2023',
//         locationValue: 'Абу-Даби',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Skyborn gardens, Reem Island',
//     },
//     {
//         href: projectHref('Ферсман Тауэр'),
//         category: 'Частная архитектура',
//         title: 'Ферсман Тауэр',
//         year: '2021',
//         locationValue: 'Москва',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Ферсман Тауэр',
//     },
//     {
//         href: projectHref('Центр культуры РФ в Сингапуре'),
//         category: 'Сакральное и общественное',
//         title: 'Центр культуры РФ в Сингапуре',
//         year: '2020',
//         locationValue: 'Сингапур',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Центр культуры РФ при Храме Успения Божьей Матери',
//     },
//     {
//         href: projectHref('Храм в честь пророка Илии'),
//         category: 'Сакральное и общественное',
//         title: 'Храм в честь пророка Илии',
//         year: '2023',
//         locationValue: 'Москва',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Храм святого пропрока Божьего Илии',
//     },
//     {
//         href: projectHref('Респис для детей "Ковчег"'),
//         category: 'Сакральное и общественное',
//         title: 'Респис для детей "Ковчег"',
//         year: '2018',
//         locationValue: 'Москва',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Храм впропрока Божьего Илии',
//     },
//     {
//         href: projectHref('Клиника "Семейный Доктор"'),
//         category: 'Сакральное и общественное, дизайн',
//         title: 'Клиника "Семейный Доктор"',
//         year: '2023',
//         locationValue: 'Москва',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Офис Семейный Доктор',
//     },
//     {
//         href: projectHref('Декорация к опере Тангейзер в Зарядье'),
//         category: 'Дизнайн и арт-объекты',
//         title: 'Декорация к опере Тангейзер в Зарядье',
//         year: '2025',
//         locationValue: 'Москва',
//         imageSrc: '/project-1.png',
//         imageAlt: 'Тангейзер в Зарядье',
//     },
// ];

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
        galleryImages: STOCK_GALLERY_IMAGES,
    };
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => slugifyProjectTitle(p.title));
}