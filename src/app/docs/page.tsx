import { MainLayout } from '@/components/layout/MainLayout'
import { BookOpen, FileText, Code, Users, Shield, Zap } from 'lucide-react'

const documentationSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of DocuFlow and create your first document.',
    icon: BookOpen,
    articles: [
      { title: 'Quick Start Guide', href: '/docs/quick-start', time: '5 min read' },
      { title: 'Creating Your First Template', href: '/docs/first-template', time: '8 min read' },
      { title: 'Understanding Placeholders', href: '/docs/placeholders', time: '6 min read' },
    ],
  },
  {
    title: 'Template Creation',
    description: 'Master the art of creating professional Word templates.',
    icon: FileText,
    articles: [
      { title: 'Template Best Practices', href: '/docs/template-best-practices', time: '10 min read' },
      { title: 'Advanced Placeholder Techniques', href: '/docs/advanced-placeholders', time: '12 min read' },
      { title: 'Formatting Guidelines', href: '/docs/formatting', time: '7 min read' },
    ],
  },
  {
    title: 'API Integration',
    description: 'Integrate DocuFlow into your applications and workflows.',
    icon: Code,
    articles: [
      { title: 'API Authentication', href: '/docs/api-auth', time: '6 min read' },
      { title: 'Upload Templates via API', href: '/docs/api-upload', time: '8 min read' },
      { title: 'Generate Documents Programmatically', href: '/docs/api-generate', time: '10 min read' },
    ],
  },
  {
    title: 'Team Collaboration',
    description: 'Work together with your team on document generation.',
    icon: Users,
    articles: [
      { title: 'Sharing Templates', href: '/docs/sharing-templates', time: '5 min read' },
      { title: 'Team Permissions', href: '/docs/permissions', time: '7 min read' },
      { title: 'Collaborative Workflows', href: '/docs/collaboration', time: '9 min read' },
    ],
  },
  {
    title: 'Security & Privacy',
    description: 'Understand how we protect your documents and data.',
    icon: Shield,
    articles: [
      { title: 'Data Security Overview', href: '/docs/security', time: '6 min read' },
      { title: 'Privacy Policy Details', href: '/docs/privacy', time: '8 min read' },
      { title: 'Compliance Standards', href: '/docs/compliance', time: '10 min read' },
    ],
  },
  {
    title: 'Performance & Optimization',
    description: 'Optimize your document generation for speed and efficiency.',
    icon: Zap,
    articles: [
      { title: 'Performance Best Practices', href: '/docs/performance', time: '7 min read' },
      { title: 'Batch Processing', href: '/docs/batch-processing', time: '9 min read' },
      { title: 'Caching Strategies', href: '/docs/caching', time: '8 min read' },
    ],
  },
]

export default function DocumentationPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              DocuFlow Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to know about using DocuFlow for document generation. From getting started to advanced features.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {documentationSections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="mb-6">
                    <div className="rounded-full bg-[#FF6B4A]/10 p-3 w-fit">
                      <section.icon className="h-6 w-6 text-[#FF6B4A]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.articles.map((article) => (
                      <li key={article.href}>
                        <a
                          href={article.href}
                          className="flex items-center justify-between text-sm text-[#FF6B4A] hover:text-[#FF6B4A]/80 transition-colors"
                        >
                          <span>{article.title}</span>
                          <span className="text-gray-500">{article.time}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help with any questions or custom requirements.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Contact Support
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Search Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 