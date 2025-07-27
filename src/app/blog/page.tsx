import { MainLayout } from '@/components/layout/MainLayout'
import { BlogLayout } from '@/components/layout/BlogLayout'
import Image from 'next/image'

const featuredPost = {
  title: 'Introducing DocumentFlow: The Future of Document Automation',
  excerpt:
    'Discover how DocumentFlow is revolutionizing the way businesses and individuals create professional documents from templates with unprecedented speed and security.',
  author: {
    name: 'Alex Chen',
    role: 'Product Manager',
    avatar: 'https://picsum.photos/32/32?random=1',
  },
  date: 'Mar 16, 2024',
  readTime: '5 min read',
  image: 'https://picsum.photos/800/400?random=1',
}

const posts = [
  {
    title: 'How to Create Effective Word Templates for DocumentFlow',
    excerpt:
      'Learn the best practices for creating Word templates that work seamlessly with DocumentFlow\'s placeholder system.',
    category: 'Tutorials',
    date: 'Mar 15, 2024',
    readTime: '4 min read',
    image: 'https://picsum.photos/400/200?random=2',
  },
  {
    title: 'The Rise of Automated Document Generation',
    excerpt:
      'Explore how automated document generation is transforming business workflows and saving hours of manual work.',
    category: 'Industry Insights',
    date: 'Mar 14, 2024',
    readTime: '6 min read',
    image: 'https://picsum.photos/400/200?random=3',
  },
  {
    title: 'Customer Success Story: LegalCorp',
    excerpt:
      'See how LegalCorp reduced document generation time by 80% using DocumentFlow for their contract templates.',
    category: 'Case Studies',
    date: 'Mar 13, 2024',
    readTime: '3 min read',
    image: 'https://picsum.photos/400/200?random=4',
  },
  {
    title: 'Top 10 Document Templates Every Business Needs',
    excerpt:
      'Discover the essential document templates that can streamline your business operations and improve efficiency.',
    category: 'Templates',
    date: 'Mar 12, 2024',
    readTime: '7 min read',
    image: 'https://picsum.photos/400/200?random=5',
  },
  {
    title: 'Security Best Practices for Document Processing',
    excerpt:
      'Learn about the security measures DocumentFlow implements to protect your sensitive documents and data.',
    category: 'Security',
    date: 'Mar 11, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/400/200?random=6',
  },
  {
    title: 'Integrating DocumentFlow with Your Existing Workflow',
    excerpt:
      'A comprehensive guide to seamlessly integrating DocumentFlow into your current document management processes.',
    category: 'Integration',
    date: 'Mar 10, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/400/200?random=7',
  },
]

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogLayout>
        {/* Featured post */}
        <article className="relative isolate mb-16">
          <div className="aspect-[2/1] overflow-hidden rounded-2xl">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={800}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-x-4 text-sm">
              <time dateTime="2024-03-16" className="text-gray-500">
                {featuredPost.date}
              </time>
              <span className="text-gray-500">{featuredPost.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              {featuredPost.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{featuredPost.excerpt}</p>
            <div className="mt-8 flex items-center gap-x-4">
              <Image
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <div className="font-semibold">{featuredPost.author.name}</div>
                <div className="text-sm text-gray-600">{featuredPost.author.role}</div>
              </div>
            </div>
          </div>
        </article>

        {/* Post grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col">
              <div className="aspect-[2/1] overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 pt-6">
                <div className="flex items-center gap-x-4 text-sm">
                  <span className="text-[#3B82F6]">{post.category}</span>
                  <time dateTime="2024-03-15" className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </BlogLayout>
    </MainLayout>
  )
} 