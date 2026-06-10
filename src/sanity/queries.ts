export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
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
  showOnHome,
  coverImage,
  gallery
}`;

export const PROJECT_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)]{
  "slug": slug.current
}`;

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
  showOnHome,
  coverImage,
  gallery
}`;
