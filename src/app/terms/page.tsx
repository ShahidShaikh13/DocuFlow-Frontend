import { MainLayout } from '@/components/layout/MainLayout'
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    description: 'By accessing and using DocuFlow, you accept and agree to be bound by these terms.',
    icon: FileText,
    details: [
      'You must be 18 years or older to use our service',
      'You agree to provide accurate and complete information',
      'You are responsible for maintaining account security',
      'You agree to use the service for lawful purposes only',
    ],
  },
  {
    title: 'Service Description',
    description: 'DocuFlow provides document generation services using Word templates and placeholders.',
    icon: Users,
    details: [
      'Upload Word (.docx) templates with placeholders',
      'Generate documents by filling in placeholder values',
      'Download generated documents in .docx format',
      'Access to our API for programmatic integration',
    ],
  },
  {
    title: 'User Responsibilities',
    description: 'Users are responsible for their content and compliance with applicable laws.',
    icon: AlertTriangle,
    details: [
      'Ensure you have rights to upload templates',
      'Comply with all applicable laws and regulations',
      'Maintain the security of your account',
      'Report any security vulnerabilities to us',
    ],
  },
  {
    title: 'Data and Privacy',
    description: 'We handle your data according to our Privacy Policy and security standards.',
    icon: Shield,
    details: [
      'Documents are processed securely and not stored permanently',
      'We use encryption for all data transmission',
      'You retain ownership of your templates and content',
      'We do not share your data with third parties',
    ],
  },
]

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These terms govern your use of DocuFlow's document generation services. Please read them carefully.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: March 16, 2024
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2">
              {termsSections.map((section) => (
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
                Important Terms
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Availability</h3>
                  <p className="text-gray-600">
                    We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We may perform maintenance 
                    with reasonable notice to users.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                  <p className="text-gray-600">
                    DocuFlow is provided "as is" without warranties. We are not liable for any damages arising from 
                    the use of our service, including data loss or business interruption.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Intellectual Property</h3>
                  <p className="text-gray-600">
                    You retain ownership of your templates and content. DocuFlow retains rights to our platform, 
                    technology, and service improvements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Termination</h3>
                  <p className="text-gray-600">
                    We may terminate or suspend access to our service for violations of these terms. 
                    You may cancel your account at any time through your account settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Prohibited Uses
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>You agree not to use DocuFlow to:</p>
              <ul className="space-y-2 ml-6">
                <li>• Generate documents containing illegal, harmful, or offensive content</li>
                <li>• Violate intellectual property rights of others</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Use the service for spam or mass unsolicited communications</li>
                <li>• Reverse engineer or attempt to extract our source code</li>
                <li>• Use the service to compete with DocuFlow</li>
              </ul>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Changes to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We may update these terms from time to time. We will notify users of significant changes via email 
              or through our platform. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@docuflow.com</p>
              <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              By using DocuFlow, you agree to these terms. Start creating professional documents today.
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