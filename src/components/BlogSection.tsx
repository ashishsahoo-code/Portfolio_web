
import { Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Learn how to structure React applications for scalability using modern patterns like compound components, custom hooks, and proper state management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['React', 'Architecture', 'JavaScript'],
      readTime: '8 min read',
      date: 'Dec 15, 2023',
      link: '#'
    },
    {
      id: 2,
      title: 'The Future of Web Development: AI Integration and Beyond',
      excerpt: 'Exploring how artificial intelligence is revolutionizing web development, from code generation to intelligent user interfaces.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      tags: ['AI', 'Web Development', 'Future Tech'],
      readTime: '12 min read',
      date: 'Dec 8, 2023',
      link: '#'
    },
    {
      id: 3,
      title: 'Mastering CSS Grid and Flexbox for Modern Layouts',
      excerpt: 'A comprehensive guide to creating responsive, flexible layouts using CSS Grid and Flexbox with real-world examples.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['CSS', 'Layout', 'Responsive Design'],
      readTime: '6 min read',
      date: 'Nov 28, 2023',
      link: '#'
    },
    {
      id: 4,
      title: 'Node.js Performance Optimization: Best Practices',
      excerpt: 'Discover advanced techniques for optimizing Node.js applications, from memory management to database query optimization.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Performance', 'Backend'],
      readTime: '10 min read',
      date: 'Nov 20, 2023',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Latest Articles</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card overflow-hidden group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 to-transparent" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyber-dark/80 backdrop-blur-sm rounded-full text-xs font-medium border border-cyber-glass-border">
                    {post.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Clock size={16} />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-neon-blue transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyber-glass border border-cyber-glass-border rounded text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <a
                    href={post.link}
                    className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-teal transition-colors font-medium group/link"
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="btn-cyber inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              View All Articles
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
