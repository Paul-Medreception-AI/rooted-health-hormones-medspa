# app/quiz/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership Quiz | Rooted Health Hormones & MedSpa',
  description: 'Find your perfect membership plan at Rooted Health. Hormone optimization, GLP-1 weight loss, and primary care in Conway, AR.',
}

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Find Your Perfect Membership
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Personalized healthcare designed for your unique wellness journey with LaDonna Walker NP
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8 sm:p-12 text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#0F6E56] mb-6">
              Your Personalized Plan Awaits
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              At Rooted Health, we believe in personalized care. Our team will work with you to determine the best membership based on your health goals, whether that's hormone optimization, weight management with GLP-1, comprehensive primary care, or aesthetic treatments.
            </p>
            <div className="bg-[#F7F4EE] rounded-xl p-8 mb-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                What to Expect
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-left space-y-3 text-gray-700 max-w-xl mx-auto">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">•</span>
                  <span>Comprehensive health assessment and consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">•</span>
                  <span>Review of your symptoms, goals, and medical history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">•</span>
                  <span>Personalized membership recommendation from our team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">•</span>
                  <span>Direct access to LaDonna Walker NP for ongoing care</span>
                </li>
              </ul>
            </div>
            <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Schedule Your Consultation
            </Link>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-gray-600 mt-6">
              Conway, AR | rootedhealthmember.com
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#0F6E56] mb-4">
              Compare Our Memberships
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the plan that aligns with your health and wellness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-2">
                Virtual DPC
              </h3>
              <div className="mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1D9E75]">$99</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-gray-600">/month</span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6">
                Comprehensive primary care with direct access to your provider from anywhere.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Unlimited virtual visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Direct messaging with provider</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Prescription management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Lab coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Chronic disease management</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border-2 border-[#1D9E75] p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#1D9E75] text-white px-4 py-1 rounded-full text-sm font-semibold font-[family-name:var(--font-dm-sans)]">
                  Most Popular
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-2 mt-4">
                Hormone Optimization
              </h3>
              <div className="mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1D9E75]">$149</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-gray-600">/month</span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6">
                Advanced hormone therapy and metabolic medicine for optimal wellness and vitality.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Comprehensive hormone testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Personalized hormone replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Metabolic optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Regular monitoring and adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>All Virtual DPC benefits included</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-2">
                Elite GLP-1
              </h3>
              <div className="mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1D9E75]">$349</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-gray-600">/month</span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6">
                Comprehensive medical weight loss program with GLP-1 medications and lifestyle support.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>GLP-1 medication included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Weekly check-ins and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Metabolic testing and monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Nutrition and lifestyle coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>All Virtual DPC benefits included</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center">
                Get Started
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6">
              Not sure which membership is right for you? Our team is here to help.
            </p>
            <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold mb-6">
            Additional Services Available
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl text-white/90 mb-8">
            Enhance your wellness journey with our MedSpa treatments and specialized services available to all members at exclusive rates.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-3">
                MedSpa Treatments
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-white/90">
                Injectables, laser treatments, facials, and advanced aesthetic procedures
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-3">
                Specialty Care
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-white/90">
                Thyroid management, peptide therapy, IV nutrition, and wellness optimization
              </p>
            </div>
          </div>
          <Link href="/contact" className="bg-white text-[#0F6E56] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
            Learn More About Services
          </Link>
        </div>
      </section>
    </main>
  )
}