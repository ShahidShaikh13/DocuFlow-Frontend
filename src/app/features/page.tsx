import { MainLayout } from '@/components/layout/MainLayout'
import { FileText, Zap, Shield, Users2, Settings, Download } from 'lucide-react'

const features = [
  {
    name: 'Template Upload & Management',
    description: 'Upload Word (.docx) templates with placeholders and manage them in your personal library. Support for multiple template formats and easy organization.',
    icon: FileText,
  },
  {
    name: 'Dynamic Placeholder System',
    description: 'Create custom placeholders like {{name}}, {{date}}, {{company}} and more. Add or remove fields dynamically as your needs change.',
    icon: Settings,
  },
  {
    name: 'Instant Document Generation',
    description: 'Generate professional documents in seconds with our optimized processing engine. No waiting, no delays - just instant results.',
    icon: Zap,
  },
  {
    name: 'Secure Document Processing',
    description: 'Your documents are processed securely and never stored on our servers. Complete privacy and data protection guaranteed.',
    icon: Shield,
  },
  {
    name: 'Team Collaboration',
    description: 'Share templates with your team, collaborate on document generation, and maintain consistent branding across all documents.',
    icon: Users2,
  },
  {
    name: 'One-Click Download',
    description: 'Download generated documents instantly in their original format. Perfect for contracts, reports, certificates, and more.',
    icon: Download,
  },
]

export default function FeaturesPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful Features for Document Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to create professional documents from templates with speed, security, and ease.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-[#3B82F6]"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Use Cases Section */}
          <div className="mt-24 sm:mt-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Perfect for Every Use Case
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                From business contracts to personal certificates, DocumentFlow handles it all.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Documents</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Employment contracts and agreements</li>
                    <li>• Business proposals and quotes</li>
                    <li>• Invoices and receipts</li>
                    <li>• Company policies and procedures</li>
                    <li>• Meeting minutes and reports</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Documents</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certificates and awards</li>
                    <li>• Letters of recommendation</li>
                    <li>• Personal contracts</li>
                    <li>• Event invitations</li>
                    <li>• Thank you letters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 