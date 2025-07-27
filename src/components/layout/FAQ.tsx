'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does DocumentFlow work?',
    answer: 'DocumentFlow uses intelligent template processing to automatically fill in placeholders in your Word documents. Simply upload a template with placeholders like {{name}}, {{date}}, etc., fill in the values, and get your generated document instantly.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'Currently, we support Microsoft Word (.docx) files. Your templates should be in .docx format with placeholders marked using double curly braces like {{placeholder_name}}.',
  },
  {
    question: 'Is my document data secure?',
    answer: 'Yes, we prioritize your security. Documents are processed in secure memory and are never stored on our servers. We use enterprise-grade encryption and follow zero-knowledge architecture principles.',
  },
  {
    question: 'Can I use my own templates?',
    answer: 'Absolutely! You can upload any .docx template you have. Just make sure to include placeholders in the format {{placeholder_name}} where you want dynamic content to be inserted.',
  },
  {
    question: 'What if my template has complex formatting?',
    answer: 'DocumentFlow preserves all your original formatting, including fonts, colors, tables, images, and layout. Your generated documents will look exactly like your templates.',
  },
  {
    question: 'Do you offer bulk document generation?',
    answer: 'Yes! You can generate multiple documents at once by providing different values for your placeholders. This is perfect for creating personalized documents for multiple recipients.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about DocumentFlow
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <dt>
                  <button
                    className="flex w-full items-start justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-base font-semibold text-[#333333]">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform text-gray-700 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 text-base text-gray-600">
                    {faq.answer}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 