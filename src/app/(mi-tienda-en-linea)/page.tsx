import Link from 'next/link'
import { HeaderHero } from '@/components'
import { BenefitSection, ContactForm, FeatureSection, PricingSection, TemplateSection, ValuePropositionSection } from '@/components/landing'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        {/* Hero Section */}
        <HeaderHero />

        {/* Value Proposition */}
        <ValuePropositionSection />

        {/* Templates Section */}
        <TemplateSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Key Benefits */}
        <BenefitSection />

        {/* Features */}
        <FeatureSection />

        {/* Testimonials */}
        {/* <TestimonialSection /> */}

        {/* CTA */}
        <section className="bg-blue-600 pb-20 pt-24 mb-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="text-xl mb-8">Solicita una demostración gratuita y descubre cómo podemos ayudarte.</p>
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
              <Link href="#contact">Solicitar Demostración</Link>
            </Button>
          </div>
        </section>

        {/* Contact */}
        <ContactForm />
      </main>

    </div>
  )
}
