import { groq } from 'next-sanity'

// Get all blog posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  },
  featured,
  readTime
}`

// Get a single blog post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  publishedAt,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    _id,
    title
  },
  featured,
  readTime,
  seo
}`

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  },
  featured,
  readTime
}`

// Get featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  },
  featured,
  readTime
}`

// Get popular posts (this is a placeholder - you can implement view tracking)
export const popularPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...5] {
  _id,
  title,
  slug,
  publishedAt
}`

