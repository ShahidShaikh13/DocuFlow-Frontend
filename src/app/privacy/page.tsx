import { MainLayout } from '@/components/layout/MainLayout'
import { Shield, Eye, Lock, Users } from 'lucide-react'

const privacySections = [
  {
    title: 'Information We Collect',
    description: 'We collect only the information necessary to provide our document generation service.',
    icon: Eye,
    details: [
      'Account information (name, email, company)',
      'Document templates you upload',
      'Placeholder data you provide',
      'Usage analytics to improve our service',
    ],
  },
  {
    title: 'How We Use Your Data',
    description: 'Your data is used exclusively to provide and improve our document generation service.',
    icon: Users,
    details: [
      'Generate documents from your templates',
      'Provide customer support',
      'Improve our platform functionality',
      'Send important service updates',
    ],
  },
  {
    title: 'Data Security',
    description: 'We implement enterprise-grade security measures to protect your information.',
    icon: Lock,
    details: [
      'End-to-end encryption for all data',
      'Documents are never stored permanently',
      'Secure API communications',
      'Regular security audits and updates',
    ],
  },
  {
    title: 'Your Rights',
    description: 'You have full control over your data and privacy settings.',
    icon: Shield,
    details: [
      'Access and download your data',
      'Request data deletion',
      'Opt-out of marketing communications',
      'Export your templates and settings',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At DocuFlow, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: March 16, 2024
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2">
              {privacySections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="mb-6">
                    <div className="rounded-full bg-[#FF6B4A]/10 p-3 w-fit">
                      <section.icon className="h-6 w-6 text-[#FF6B4A]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#FF6B4A] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Key Privacy Commitments
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Permanent Storage</h3>
                  <p className="text-gray-600">
                    Your uploaded templates and generated documents are processed in memory and never stored permanently on our servers. 
                    This ensures maximum privacy and security for your sensitive documents.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Minimization</h3>
                  <p className="text-gray-600">
                    We collect only the minimum information necessary to provide our service. We don't track your browsing history 
                    or collect unnecessary personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We're transparent about how we handle your data. You can always see what information we have about you 
                    and request changes or deletion at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Third-Party Services</h3>
                  <p className="text-gray-600">
                    We use only essential third-party services for hosting and analytics. We carefully vet all partners 
                    to ensure they meet our privacy standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@docuflow.com</p>
              <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Trust DocuFlow with Your Documents
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your privacy and data security are our top priorities. Start using DocuFlow with confidence.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Try Demo
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 