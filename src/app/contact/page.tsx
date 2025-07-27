import { MainLayout } from '@/components/layout/MainLayout'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const contactMethods = [
  {
    name: 'Email Support',
    description: 'Get help with your DocuFlow account or technical questions.',
    value: 'support@docuflow.com',
    icon: Mail,
  },
  {
    name: 'Sales Inquiries',
    description: 'Learn about enterprise plans and custom solutions.',
    value: 'sales@docuflow.com',
    icon: Phone,
  },
  {
    name: 'Office Location',
    description: 'Visit our headquarters in San Francisco.',
    value: '123 Innovation Drive, San Francisco, CA 94105',
    icon: MapPin,
  },
  {
    name: 'Business Hours',
    description: 'We\'re here to help during these hours.',
    value: 'Monday - Friday, 9:00 AM - 6:00 PM PST',
    icon: Clock,
  },
]

const faqs = [
  {
    question: 'How do I get started with DocuFlow?',
    answer: 'Simply sign up for a free account and try our demo. Upload your first Word template and start generating documents in minutes.',
  },
  {
    question: 'What file formats does DocuFlow support?',
    answer: 'We currently support Word (.docx) templates. The generated documents are also in .docx format for maximum compatibility.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. Your documents are processed securely and never stored on our servers. We use enterprise-grade encryption.',
  },
  {
    question: 'Can I integrate DocuFlow with my existing systems?',
    answer: 'Absolutely! We provide a comprehensive API that allows you to integrate DocuFlow into your existing workflows and applications.',
  },
]

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about DocuFlow? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                    >
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Sales Question</option>
                      <option>Feature Request</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF6B4A] focus:ring-[#FF6B4A] px-4 py-3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <div key={method.name} className="flex items-start gap-4">
                        <div className="rounded-full bg-[#FF6B4A]/10 p-3">
                          <method.icon className="h-5 w-5 text-[#FF6B4A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{method.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                          <p className="text-sm text-[#FF6B4A]">{method.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Response Time</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email Support:</span>
                      <span className="font-medium">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales Inquiries:</span>
                      <span className="font-medium">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical Issues:</span>
                      <span className="font-medium">Within 6 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Quick answers to common questions about DocuFlow.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Try DocuFlow today and see how easy document generation can be.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Try Demo
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 