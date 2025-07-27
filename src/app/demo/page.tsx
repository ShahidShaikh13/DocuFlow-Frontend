'use client'

import { Header } from '@/components/layout/Header'
import { DocuFlow } from '@/components/layout/DocuFlow'
import { Footer } from '@/components/layout/Footer'

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DocuFlow />
      </main>
      <Footer />
    </div>
  )
} 