/** Список на `/projects` — поля для таблицы и фильтров */
export const PROJECTS_LIST_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  locationValue,
  filterCategory
}`;

/** Карточки на главной — только проекты с showOnHome (по умолчанию true) */
export const PROJECTS_HOME_QUERY = `*[_type == "project" && coalesce(showOnHome, true) == true] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  category,
  year,
  technicalParameters,
  coverImage
}`;

/** Полные данные одного проекта для `/projects/[slug]` */
export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current in $slugCandidates][0] {
  title,
  "slug": slug.current,
  category,
  filterCategory,
  year,
  locationValue,
  status,
  description,
  technicalParameters,
  coverCaptionLeft,
  coverImage,
  gallery
}`;

/** Только slug — static params и счётчик на детальной странице */
export const PROJECT_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
  "slug": slug.current
}`;
