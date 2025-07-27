import { MainLayout } from '@/components/layout/MainLayout'
import { Users, Target, Zap, Shield } from 'lucide-react'

const values = [
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of document generation technology to provide cutting-edge solutions.',
    icon: Zap,
  },
  {
    title: 'Security',
    description: 'Your documents and data are protected with enterprise-grade security measures and privacy controls.',
    icon: Shield,
  },
  {
    title: 'Simplicity',
    description: 'Complex document generation made simple. No technical expertise required to create professional documents.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: 'Built for teams to work together seamlessly on document creation and management.',
    icon: Users,
  },
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former document automation specialist with 10+ years in enterprise software.',
    image: 'https://picsum.photos/200/200?random=1',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Product',
    bio: 'Product leader focused on user experience and workflow optimization.',
    image: 'https://picsum.photos/200/200?random=2',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Engineer',
    bio: 'Full-stack developer passionate about scalable document processing systems.',
    image: 'https://picsum.photos/200/200?random=3',
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    bio: 'UX designer dedicated to creating intuitive and beautiful interfaces.',
    image: 'https://picsum.photos/200/200?random=4',
  },
]

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About DocuFlow
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're revolutionizing how businesses and individuals create professional documents. 
              Our mission is to make document generation accessible, secure, and efficient for everyone.
            </p>
          </div>

          {/* Story Section */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    DocuFlow was born from a simple frustration: the time-consuming process of creating 
                    professional documents manually. Our founder, Alex Chen, spent countless hours 
                    generating contracts, proposals, and reports for his previous company.
                  </p>
                  <p>
                    In 2023, we set out to solve this problem by creating a platform that could 
                    transform Word templates into dynamic documents in seconds. What started as a 
                    simple tool has grown into a comprehensive document generation platform used by 
                    thousands of businesses worldwide.
                  </p>
                  <p>
                    Today, DocuFlow helps teams save hours every week by automating their document 
                    workflows, allowing them to focus on what matters most: growing their business.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To democratize document generation by making professional document creation 
                  accessible to businesses of all sizes, from startups to enterprises.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF6B4A] rounded-full"></div>
                    <span className="text-sm text-gray-600">Eliminate manual document creation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF6B4A] rounded-full"></div>
                    <span className="text-sm text-gray-600">Ensure document security and privacy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF6B4A] rounded-full"></div>
                    <span className="text-sm text-gray-600">Enable seamless team collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF6B4A] rounded-full"></div>
                    <span className="text-sm text-gray-600">Scale with growing business needs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide everything we do at DocuFlow.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="mx-auto rounded-full bg-[#FF6B4A]/10 p-3 w-fit mb-4">
                      <value.icon className="h-6 w-6 text-[#FF6B4A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The passionate people behind DocuFlow.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                  <div key={member.name} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#FF6B4A] mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your document workflow? Start using DocuFlow today.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                Try Demo
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 