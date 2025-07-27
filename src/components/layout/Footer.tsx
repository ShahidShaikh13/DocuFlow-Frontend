'use client'

import Link from 'next/link'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Demo', href: '/demo' },
      { label: 'Templates', href: '/templates' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About DocumentFlow', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Data Security', href: '/security' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#3B82F6]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} DocumentFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 