'use client'

import Image from 'next/image'
import { Button } from '@/components/shared/Button'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
            <span className="flex items-center gap-x-2">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              DocumentFlow Pro - Intelligent Document Automation
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Streamline Your
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Document Process
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your document workflow with intelligent template processing. 
            <br />
            Create professional documents in seconds with our advanced automation platform.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/demo" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg">
              Start Automating Now
            </Button>
            <Button href="/features" variant="secondary" className="border-2 border-blue-200 hover:border-blue-300">
              Explore Features
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-20"></div>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="DocumentFlow automation interface"
              width={1200}
              height={600}
              className="relative rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
            />
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Template Ready</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Processing...</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg px-4 py-2">
              <span className="text-sm font-medium">Document Generated Successfully!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 