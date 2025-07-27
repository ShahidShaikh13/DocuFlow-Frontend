'use client'

import { FileText, Zap, Shield, Sparkles, Users, Lock } from 'lucide-react'

const features = [
  {
    name: 'Intelligent Template Engine',
    description: 'Our AI-powered system learns from your templates and suggests optimizations for better document generation.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Lightning-Fast Processing',
    description: 'Generate hundreds of documents in seconds with our optimized processing engine. No waiting, no delays.',
    icon: Zap,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Enterprise-Grade Security',
    description: 'Your documents are processed in secure memory and never stored. Military-grade encryption protects your data.',
    icon: Lock,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Smart Placeholder Detection',
    description: 'Our system automatically detects and suggests placeholders, making template creation effortless.',
    icon: FileText,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Team Collaboration Hub',
    description: 'Share templates, collaborate on documents, and maintain version control across your entire team.',
    icon: Users,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Zero-Knowledge Architecture',
    description: 'We never see your document content. Your data stays private and secure at all times.',
    icon: Shield,
    gradient: 'from-teal-500 to-blue-500',
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose DocumentFlow?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've reimagined document automation from the ground up. Here's what makes us different.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Documents Generated Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 