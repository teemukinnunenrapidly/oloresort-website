import { Calendar, ArrowRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { postsQuery, categoriesQuery, featuredPostsQuery, popularPostsQuery } from '@/sanity/lib/queries';
import BlogClient from './BlogClient';

// Types
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Author {
  name: string;
  image?: SanityImage;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: SanityImage;
  publishedAt: string;
  author?: Author;
  categories?: Category[];
  featured?: boolean;
  readTime?: number;
}

async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    return await client.fetch(categoriesQuery);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

async function getFeaturedPosts(): Promise<Post[]> {
  try {
    return await client.fetch(featuredPostsQuery);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

async function getPopularPosts(): Promise<Post[]> {
  try {
    return await client.fetch(popularPostsQuery);
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default async function BlogPage() {
  const [posts, categories, featuredPosts, popularPosts] = await Promise.all([
    getPosts(),
    getCategories(),
    getFeaturedPosts(),
    getPopularPosts(),
  ]);

  const featuredPost = featuredPosts[0] || posts[0];
  const regularPosts = posts.filter(post => post._id !== featuredPost?._id);

  return (
    <div className="min-h-screen" style={{ background: 'var(--ref-color-neutral-1000)' }}>
      
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '60vh',
          background: `linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.7),
            rgba(189, 152, 75, 0.7)
          ),
          radial-gradient(circle at 20% 50%, rgba(189, 152, 75, 0.3), transparent),
          radial-gradient(circle at 80% 50%, rgba(30, 58, 138, 0.3), transparent)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Star pattern overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.5,
            animation: 'twinkle 10s infinite',
          }}
        />
        
        <div 
          className="relative z-10 text-center fade-in-up"
          style={{
            maxWidth: '900px',
            padding: '4rem 2rem',
          }}
        >
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.2,
            }}
          >
            OloResort Blog
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-12)',
              fontWeight: 'var(--ref-font-weight-light)',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
              lineHeight: 1.5,
            }}
          >
            Inspiring stories and practical tips for Lapland adventures
          </p>
          
          <BlogClient />
        </div>
      </section>

      {/* Categories Section */}
      <section 
        style={{
          padding: '4rem 2rem',
          backgroundColor: 'var(--sem-color-background-content)',
          borderBottom: '1px solid rgba(189, 152, 75, 0.2)',
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--ref-spacing-4)',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="category-tag"
              style={{
                background: 'var(--sem-color-primary-base)',
                border: '1px solid rgba(189, 152, 75, 0.3)',
                color: 'var(--ref-color-neutral-0)',
                padding: '0.5rem 1.5rem',
                borderRadius: 'var(--ref-radius-full)',
                fontSize: 'var(--ref-font-size-base)',
                fontWeight: 'var(--ref-font-weight-medium)',
                transition: 'all var(--ref-duration-base)',
                cursor: 'pointer',
                fontFamily: 'var(--ref-font-family-display)',
              }}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                className="category-tag"
                style={{
                  background: 'rgba(189, 152, 75, 0.1)',
                  border: '1px solid rgba(189, 152, 75, 0.3)',
                  color: 'var(--sem-color-primary-base)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: 'var(--ref-radius-full)',
                  fontSize: 'var(--ref-font-size-base)',
                  fontWeight: 'var(--ref-font-weight-medium)',
                  transition: 'all var(--ref-duration-base)',
                  cursor: 'pointer',
                  fontFamily: 'var(--ref-font-family-display)',
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section 
          style={{
            padding: '5rem 2rem',
            background: 'linear-gradient(to bottom, var(--sem-color-background-content), var(--ref-color-neutral-1000))',
          }}
        >
          <div className="container max-w-7xl mx-auto">
            <div 
              className="featured-article"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
                gap: 'var(--ref-spacing-12)',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 'var(--ref-radius-3xl)',
                overflow: 'hidden',
                border: '1px solid rgba(189, 152, 75, 0.2)',
                transition: 'all var(--ref-duration-slow)',
              }}
            >
              <div 
                style={{
                  height: '400px',
                  background: featuredPost.mainImage 
                    ? `url(${urlFor(featuredPost.mainImage)?.width(800).height(400).url()})` 
                    : 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--ref-color-brand-gold-500))',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'var(--sem-color-primary-base)',
                    color: 'var(--ref-color-neutral-0)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--ref-radius-full)',
                    fontSize: 'var(--ref-font-size-sm)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  FEATURED ARTICLE
                </div>
              </div>
              
              <div style={{ padding: '3rem' }}>
                <div 
                  style={{
                    display: 'flex',
                    gap: 'var(--ref-spacing-4)',
                    marginBottom: 'var(--ref-spacing-4)',
                    fontSize: 'var(--ref-font-size-sm)',
                    color: 'var(--ref-color-neutral-400)',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} />
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                  {featuredPost.categories && featuredPost.categories.length > 0 && (
                    <span 
                      style={{
                        color: 'var(--sem-color-primary-base)',
                        fontWeight: 'var(--ref-font-weight-semibold)',
                      }}
                    >
                      {featuredPost.categories[0].title}
                    </span>
                  )}
                  {featuredPost.readTime && (
                    <span>{featuredPost.readTime} min read</span>
                  )}
                </div>
                
                <h2 
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    color: 'var(--sem-color-primary-base)',
                    marginBottom: 'var(--ref-spacing-6)',
                    fontWeight: 'var(--ref-font-weight-bold)',
                    lineHeight: 1.3,
                  }}
                >
                  {featuredPost.title}
                </h2>
                
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-lg)',
                    lineHeight: 1.8,
                    marginBottom: 'var(--ref-spacing-8)',
                    opacity: 0.9,
                    color: 'var(--sem-color-text-body-light)',
                  }}
                >
                  {featuredPost.excerpt}
                </p>
                
                <a 
                  href={`/blog/${featuredPost.slug.current}`}
                  className="read-more"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--sem-color-primary-base)',
                    textDecoration: 'none',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    transition: 'all var(--ref-duration-base)',
                    fontSize: 'var(--ref-font-size-lg)',
                  }}
                >
                  Read full article
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid with Sidebar */}
      <section 
        style={{
          padding: '5rem 2rem',
          background: 'var(--ref-color-neutral-1000)',
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Latest Articles
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
              }}
            >
              Explore Lapland wonders and get tips for your journey
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'var(--ref-spacing-12)',
            }}
          >
            {/* Main Content */}
            <div style={{ gridColumn: 'span 2' }}>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
                  gap: 'var(--ref-spacing-10)',
                }}
              >
                {regularPosts.map((post) => (
                  <article 
                    key={post._id}
                    className="blog-card"
                    style={{
                      background: 'var(--sem-color-background-content)',
                      borderRadius: 'var(--ref-radius-2xl)',
                      overflow: 'hidden',
                      transition: 'all var(--ref-duration-slow)',
                      border: '1px solid rgba(189, 152, 75, 0.1)',
                      position: 'relative',
                    }}
                  >
                    <div 
                      style={{
                        height: '250px',
                        background: post.mainImage 
                          ? `url(${urlFor(post.mainImage)?.width(600).height(400).url()})` 
                          : 'linear-gradient(135deg, var(--ref-color-brand-gold-500), var(--ref-color-brand-blue-500))',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    />
                    
                    <div style={{ padding: '2rem' }}>
                      <div 
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--ref-spacing-4)',
                          fontSize: 'var(--ref-font-size-sm)',
                          flexWrap: 'wrap',
                          gap: 'var(--ref-spacing-2)',
                        }}
                      >
                        <span style={{ color: 'var(--ref-color-neutral-500)' }}>
                          {formatDate(post.publishedAt)}
                        </span>
                        {post.categories && post.categories.length > 0 && (
                          <span 
                            style={{
                              color: 'var(--sem-color-primary-base)',
                              fontWeight: 'var(--ref-font-weight-semibold)',
                            }}
                          >
                            {post.categories[0].title}
                          </span>
                        )}
                      </div>
                      
                      <h3 
                        style={{
                          fontSize: 'var(--ref-font-size-2xl)',
                          color: 'var(--sem-color-primary-base)',
                          marginBottom: 'var(--ref-spacing-4)',
                          fontWeight: 'var(--ref-font-weight-semibold)',
                          lineHeight: 1.3,
                          transition: 'color var(--ref-duration-base)',
                        }}
                      >
                        {post.title}
                      </h3>
                      
                      <p 
                        style={{
                          lineHeight: 1.6,
                          marginBottom: 'var(--ref-spacing-6)',
                          opacity: 0.9,
                          color: 'var(--sem-color-text-body-light)',
                        }}
                      >
                        {post.excerpt}
                      </p>
                      
                      <a 
                        href={`/blog/${post.slug.current}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--sem-color-primary-base)',
                          textDecoration: 'none',
                          fontWeight: 'var(--ref-font-weight-semibold)',
                          transition: 'all var(--ref-duration-base)',
                        }}
                      >
                        Read more
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside 
              style={{
                position: 'sticky',
                top: '100px',
                height: 'fit-content',
              }}
            >
              {/* Popular Articles */}
              {popularPosts.length > 0 && (
                <div 
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(189, 152, 75, 0.2)',
                    borderRadius: 'var(--ref-radius-2xl)',
                    padding: '2rem',
                    marginBottom: 'var(--ref-spacing-8)',
                  }}
                >
                  <h3 
                    style={{
                      fontSize: 'var(--ref-font-size-2xl)',
                      color: 'var(--sem-color-primary-base)',
                      marginBottom: 'var(--ref-spacing-6)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                    }}
                  >
                    Popular Articles
                  </h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {popularPosts.map((article, index) => (
                      <li 
                        key={article._id}
                        style={{
                          padding: 'var(--ref-spacing-4) 0',
                          borderBottom: index < popularPosts.length - 1 ? '1px solid rgba(189, 152, 75, 0.1)' : 'none',
                          transition: 'all var(--ref-duration-base)',
                        }}
                      >
                        <a 
                          href={`/blog/${article.slug.current}`}
                          style={{
                            textDecoration: 'none',
                            color: 'var(--sem-color-text-body-light)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--ref-spacing-4)',
                          }}
                        >
                          <span 
                            style={{
                              display: 'inline-flex',
                              width: '30px',
                              height: '30px',
                              background: 'var(--sem-color-primary-base)',
                              color: 'var(--ref-color-neutral-0)',
                              textAlign: 'center',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50%',
                              fontWeight: 'var(--ref-font-weight-semibold)',
                              fontSize: 'var(--ref-font-size-sm)',
                              flexShrink: 0,
                            }}
                          >
                            {index + 1}
                          </span>
                          <span 
                            style={{
                              fontWeight: 'var(--ref-font-weight-medium)',
                              transition: 'color var(--ref-duration-base)',
                              lineHeight: 1.5,
                            }}
                          >
                            {article.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags/Categories */}
              {categories.length > 0 && (
                <div 
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(189, 152, 75, 0.2)',
                    borderRadius: 'var(--ref-radius-2xl)',
                    padding: '2rem',
                  }}
                >
                  <h3 
                    style={{
                      fontSize: 'var(--ref-font-size-2xl)',
                      color: 'var(--sem-color-primary-base)',
                      marginBottom: 'var(--ref-spacing-6)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                    }}
                  >
                    Categories
                  </h3>
                  
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--ref-spacing-3)',
                    }}
                  >
                    {categories.slice(0, 6).map((category) => (
                      <a 
                        key={category._id}
                        href={`/blog/category/${category.slug.current}`}
                        style={{
                          background: 'rgba(189, 152, 75, 0.1)',
                          border: '1px solid rgba(189, 152, 75, 0.3)',
                          color: 'var(--sem-color-primary-base)',
                          padding: '0.4rem 1rem',
                          borderRadius: 'var(--ref-radius-full)',
                          textDecoration: 'none',
                          fontSize: 'var(--ref-font-size-sm)',
                          fontWeight: 'var(--ref-font-weight-medium)',
                          transition: 'all var(--ref-duration-base)',
                        }}
                      >
                        {category.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        className="cta-pattern relative overflow-hidden"
        style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500) 0%, var(--ref-color-brand-gold-500) 100%)',
          position: 'relative',
        }}
      >
        <div 
          className="newsletter-container relative z-10"
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-4)',
              fontWeight: 'var(--ref-font-weight-bold)',
            }}
          >
            Subscribe to Our Newsletter
          </h2>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-12)',
              opacity: 0.95,
            }}
          >
            Get inspiration and exclusive offers directly to your inbox
          </p>
          
          <form 
            style={{
              display: 'flex',
              gap: 'var(--ref-spacing-4)',
              maxWidth: '500px',
              margin: '0 auto',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <input 
              type="email"
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '1rem 1.5rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 'var(--ref-radius-full)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'var(--ref-color-neutral-0)',
                fontSize: 'var(--ref-font-size-base)',
                fontFamily: 'var(--ref-font-family-display)',
                transition: 'all var(--ref-duration-base)',
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              style={{
                background: 'var(--ref-color-neutral-0)',
                color: 'var(--sem-color-primary-base)',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: 'var(--ref-radius-full)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                fontSize: 'var(--ref-font-size-base)',
                fontFamily: 'var(--ref-font-family-display)',
                cursor: 'pointer',
                transition: 'all var(--ref-duration-base)',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
