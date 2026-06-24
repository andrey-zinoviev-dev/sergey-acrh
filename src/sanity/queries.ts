/** Карточки на `/projects` — сетка с обложками */
export const PROJECTS_GRID_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  category,
  filterCategory,
  year,
  locationValue,
  coverImage
}`;

/** Список на главной (таблица) — с фильтром showOnHome */
export const PROJECTS_HOME_LIST_QUERY = `*[_type == "project" && coalesce(showOnHome, true) == true] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  locationValue,
  filterCategory
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
