'use client'

import { MainLayout } from '@/components/layout/MainLayout'
import { Users, Zap, Heart, Globe, Code, TrendingUp } from 'lucide-react'

const benefits = [
  {
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and unlimited PTO.',
    icon: Globe,
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs.',
    icon: Heart,
  },
  {
    title: 'Learning & Growth',
    description: 'Professional development budget and conference attendance.',
    icon: TrendingUp,
  },
  {
    title: 'Great Team',
    description: 'Work with passionate, talented people who care about your success.',
    icon: Users,
  },
  {
    title: 'Innovation',
    description: 'Build cutting-edge document generation technology.',
    icon: Zap,
  },
  {
    title: 'Impact',
    description: 'Help thousands of businesses streamline their document workflows.',
    icon: Code,
  },
]

const openPositions = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and scale our document generation platform using modern technologies.',
    requirements: [
      '5+ years of full-stack development experience',
      'Expertise in Node.js, React, and TypeScript',
      'Experience with document processing libraries',
      'Strong problem-solving and communication skills',
    ],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Lead product strategy and development for our document generation platform.',
    requirements: [
      '3+ years of product management experience',
      'Experience with B2B SaaS products',
      'Strong analytical and user research skills',
      'Excellent communication and leadership abilities',
    ],
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure our infrastructure is secure, scalable, and reliable.',
    requirements: [
      '3+ years of DevOps experience',
      'Expertise in AWS, Docker, and Kubernetes',
      'Experience with security and compliance',
      'Strong automation and monitoring skills',
    ],
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help customers succeed with DocuFlow and drive product adoption.',
    requirements: [
      '2+ years of customer success experience',
      'Experience with B2B SaaS products',
      'Strong relationship-building skills',
      'Technical aptitude and problem-solving abilities',
    ],
  },
]

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Help us revolutionize document generation and build the future of business automation. 
              We're looking for passionate people who want to make a difference.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="mx-auto rounded-full bg-[#FF6B4A]/10 p-3 w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-[#FF6B4A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Open Positions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We're growing our team and looking for talented individuals to join us.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="space-y-8">
                {openPositions.map((position) => (
                  <div key={position.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                        Apply Now
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#FF6B4A] rounded-full mt-2 flex-shrink-0"></div>
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Submit General Application
              </button>
            </div>
          </div>

          <div className="mt-24 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Our Values
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Everything we do is driven by our customers' needs. We listen, learn, and build solutions that truly help.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We're not afraid to try new things and push boundaries. Innovation is in our DNA.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We believe the best results come from working together. We support each other and celebrate success as a team.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We do what's right, even when it's hard. Trust and transparency are fundamental to everything we do.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Help us build the future of document generation and make a real impact on businesses worldwide.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                View All Positions
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Contact Recruiting
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 