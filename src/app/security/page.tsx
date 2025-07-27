import { MainLayout } from '@/components/layout/MainLayout'
import { Shield, Lock, Eye, Users, Server, Key } from 'lucide-react'

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
    icon: Lock,
    details: [
      'SSL/TLS encryption for all communications',
      'AES-256 encryption for stored data',
      'Secure key management practices',
      'Regular encryption audits',
    ],
  },
  {
    title: 'No Permanent Storage',
    description: 'Your documents are processed in memory and never stored permanently on our servers.',
    icon: Eye,
    details: [
      'Documents processed in secure memory',
      'Automatic cleanup after processing',
      'No document retention policies',
      'Immediate deletion after generation',
    ],
  },
  {
    title: 'Secure API Access',
    description: 'API communications are secured with authentication and rate limiting.',
    icon: Key,
    details: [
      'OAuth 2.0 authentication',
      'API key management',
      'Rate limiting protection',
      'Request validation and sanitization',
    ],
  },
  {
    title: 'Infrastructure Security',
    description: 'Our infrastructure is built with security best practices and regular audits.',
    icon: Server,
    details: [
      'Cloud security compliance',
      'Regular security assessments',
      'Vulnerability scanning',
      'Incident response procedures',
    ],
  },
]

const complianceStandards = [
  {
    name: 'GDPR Compliance',
    description: 'Full compliance with European data protection regulations.',
    status: 'Compliant',
  },
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 certification for security controls.',
    status: 'Certified',
  },
  {
    name: 'ISO 27001',
    description: 'International standard for information security management.',
    status: 'In Progress',
  },
  {
    name: 'HIPAA Ready',
    description: 'Healthcare data protection standards compliance.',
    status: 'Available',
  },
]

export default function SecurityPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data Security & Privacy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your documents and data security are our top priorities. Learn about the measures we take to protect your information.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="mb-6">
                    <div className="rounded-full bg-[#FF6B4A]/10 p-3 w-fit">
                      <feature.icon className="h-6 w-6 text-[#FF6B4A]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
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
                Our Security Commitment
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Zero-Knowledge Architecture</h3>
                  <p className="text-gray-600">
                    We designed DocuFlow with a zero-knowledge approach. Our systems cannot access the content of your documents, 
                    ensuring maximum privacy and security for your sensitive information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Regular Security Audits</h3>
                  <p className="text-gray-600">
                    We conduct regular security assessments, penetration testing, and vulnerability scans to identify and 
                    address potential security issues before they can be exploited.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Incident Response</h3>
                  <p className="text-gray-600">
                    Our security team is available 24/7 to respond to any security incidents. We have established procedures 
                    for rapid detection, containment, and resolution of security issues.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Employee Security</h3>
                  <p className="text-gray-600">
                    All employees undergo background checks and security training. Access to customer data is strictly 
                    limited and monitored through comprehensive logging and audit trails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Compliance & Certifications
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We maintain compliance with industry standards and regulations.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid gap-6 sm:grid-cols-2">
                {complianceStandards.map((standard) => (
                  <div key={standard.name} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">{standard.name}</h3>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                        standard.status === 'Compliant' || standard.status === 'Certified' ? 'bg-green-100 text-green-800' :
                        standard.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Security Best Practices for Users
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Account Security</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use strong, unique passwords for your account</li>
                  <li>• Enable two-factor authentication when available</li>
                  <li>• Regularly review your account activity</li>
                  <li>• Keep your contact information up to date</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Template Security</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Only upload templates you own or have rights to use</li>
                  <li>• Avoid including sensitive information in placeholder names</li>
                  <li>• Review generated documents before sharing</li>
                  <li>• Use secure channels to share sensitive documents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Security Contact
            </h2>
            <p className="text-gray-600 mb-6">
              If you discover a security vulnerability or have security-related questions, please contact our security team:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Security Email:</strong> security@docuflow.com</p>
              <p><strong>PGP Key:</strong> Available upon request</p>
              <p><strong>Bug Bounty:</strong> We offer rewards for responsible disclosure</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Trust DocuFlow with Your Documents
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our security-first approach ensures your documents and data are protected at every step.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Try Demo
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 