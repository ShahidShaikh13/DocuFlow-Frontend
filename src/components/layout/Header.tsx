'use client'

import Link from 'next/link'
import { Button } from '@/components/shared/Button'

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Demo', href: '/demo' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">DF</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              DocumentFlow
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 relative group transition-colors duration-200"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            href="/demo" 
            variant="primary" 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Try DocumentFlow
          </Button>
        </div>
      </div>
    </header>
  )
} 