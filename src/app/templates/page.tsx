import { MainLayout } from '@/components/layout/MainLayout'
import { FileText, Download, Eye } from 'lucide-react'

const templates = [
  {
    name: 'Employment Contract',
    description: 'Professional employment contract template with all standard clauses and legal protections.',
    category: 'Business',
    downloads: 1247,
    preview: 'https://picsum.photos/400/200?random=1',
  },
  {
    name: 'Business Proposal',
    description: 'Comprehensive business proposal template with executive summary and financial projections.',
    category: 'Business',
    downloads: 892,
    preview: 'https://picsum.photos/400/200?random=2',
  },
  {
    name: 'Invoice Template',
    description: 'Professional invoice template with tax calculations and payment terms.',
    category: 'Business',
    downloads: 2156,
    preview: 'https://picsum.photos/400/200?random=3',
  },
  {
    name: 'Certificate of Achievement',
    description: 'Elegant certificate template for awards, achievements, and recognition.',
    category: 'Personal',
    downloads: 567,
    preview: 'https://picsum.photos/400/200?random=4',
  },
  {
    name: 'Letter of Recommendation',
    description: 'Professional recommendation letter template with customizable sections.',
    category: 'Personal',
    downloads: 743,
    preview: 'https://picsum.photos/400/200?random=5',
  },
  {
    name: 'Meeting Minutes',
    description: 'Structured meeting minutes template with action items and follow-ups.',
    category: 'Business',
    downloads: 432,
    preview: 'https://picsum.photos/400/200?random=6',
  },
]

export default function TemplatesPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Document Templates
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready-to-use templates for all your document generation needs. Download, customize, and start creating professional documents instantly.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <div key={template.name} className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 overflow-hidden">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-x-2 text-sm mb-2">
                      <span className="inline-flex items-center rounded-full bg-[#FF6B4A]/10 px-2 py-1 text-xs font-medium text-[#FF6B4A]">
                        {template.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {template.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2 text-sm text-gray-500">
                        <Download className="h-4 w-4" />
                        {template.downloads} downloads
                      </div>
                      <div className="flex gap-2">
                        <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-3 py-2 text-sm font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                          <Eye className="h-4 w-4" />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Need a Custom Template?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? We can create custom templates tailored to your specific needs.
            </p>
            <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
              <FileText className="h-5 w-5" />
              Request Custom Template
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 