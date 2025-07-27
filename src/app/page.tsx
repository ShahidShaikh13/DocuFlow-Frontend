import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/layout/Hero'
import { Features } from '@/components/layout/Features'
import { FAQ } from '@/components/layout/FAQ'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/shared/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FAQ />
        
        {/* Call to Action Section */}
        <section className="py-24 sm:py-32 bg-[#3B82F6]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl mb-6">
                Ready to automate your documents?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the power of intelligent document automation. Transform your workflow with our advanced template processing platform.
              </p>
              <div className="flex justify-center gap-4">
                <Button href="/demo" variant="primary">
                  Try DocumentFlow Demo
                </Button>
                <Button href="/features" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
