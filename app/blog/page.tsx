import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Magic of Northern Lights in Levi',
      excerpt: 'Discover the best times and places to witness the aurora borealis in Lapland',
      author: 'OloResort Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Northern Lights',
      image: 'northern-lights',
      featured: true
    },
    {
      title: 'Winter Activities Guide for Lapland Visitors',
      excerpt: 'Everything you need to know about snowmobiling, dog sledding, and more',
      author: 'OloResort Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Activities',
      image: 'winter-activities',
      featured: false
    },
    {
      title: 'Ruska Season: Autumn Colors in Lapland',
      excerpt: 'Experience the stunning golden and red colors of Lapland autumn',
      author: 'OloResort Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Seasons',
      image: 'autumn-colors',
      featured: false
    },
    {
      title: 'Traditional Lappish Cuisine You Must Try',
      excerpt: 'Explore the authentic flavors and dishes of Lapland',
      author: 'OloResort Team',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Food & Culture',
      image: 'lappish-cuisine',
      featured: false
    },
    {
      title: 'Photography Tips for Lapland Landscapes',
      excerpt: 'Capture the beauty of Lapland with these professional photography tips',
      author: 'OloResort Team',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Photography',
      image: 'photography-tips',
      featured: false
    },
    {
      title: 'Best Time to Visit Lapland: A Seasonal Guide',
      excerpt: 'Plan your perfect Lapland vacation with our comprehensive seasonal guide',
      author: 'OloResort Team',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Travel Tips',
      image: 'seasonal-guide',
      featured: false
    }
  ];

  const categories = ['All', 'Northern Lights', 'Activities', 'Seasons', 'Food & Culture', 'Photography', 'Travel Tips'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              OloResort Blog
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Discover Lapland through our stories, tips, and insider knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Northern Lights
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Northern Lights</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Magic of Northern Lights in Levi
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Discover the best times and places to witness the aurora borealis in Lapland. 
                  Learn about the science behind this natural phenomenon and get tips for the best viewing experience.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>OloResort Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Jan 15, 2024</span>
                    </div>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-lg font-semibold">
                    {post.image.replace('-', ' ').toUpperCase()}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 px-2 py-1 rounded text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      Read More
                      <ArrowRight className="ml-1" size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


