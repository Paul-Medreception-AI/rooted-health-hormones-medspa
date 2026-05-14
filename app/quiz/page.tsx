import React from 'react'
import Link from 'next/link'

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Membership
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover personalized healthcare that adapts to your unique wellness journey
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl p-12 max-w-2xl mx-auto text-center shadow-xl">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-[#1D9E75] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] mb-4">
            Your Personalized Path to Wellness
          </h2>
          <p className="text-lg text-[#1E1D1A]/70 mb-8 leading-relaxed">
            Our interactive quiz helps you discover which membership tier aligns with your health goals, 
            lifestyle, and wellness priorities. Whether you're seeking preventive care, hormone optimization, 
            or comprehensive weight management, we'll guide you to the perfect fit.
          </p>
          <div className="border-t border-[#1D9E75]/20 pt-8">
            <p className="text-[#1E1D1A]/80 mb-6 font-medium">
              Ready to get started? Let's discuss your unique needs in a complimentary consultation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#1D9E75] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0F6E56] transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1E1D1A] mb-4">
            Compare Our Membership Tiers
          </h2>
          <p className="text-lg text-[#1E1D1A]/70">
            Choose the level of care that matches your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#1D9E75] transition-all">
            <div className="text-center mb-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1E1D1A] mb-2">
                Virtual DPC
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-[#1D9E75]">$99</span>
                <span className="text-[#1E1D1A]/60">/month</span>
              </div>
              <p className="text-[#1E1D1A]/70">Essential primary care access</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">24/7 telehealth access</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Same-day appointments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Unlimited messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Wellness planning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">At-cost prescriptions</span>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full text-center bg-[#F7F4EE] text-[#1D9E75] px-6 py-3 rounded-full font-semibold hover:bg-[#1D9E75] hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1D9E75] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1D9E75] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1E1D1A] mb-2">
                Hormone Optimization
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-[#1D9E75]">$149</span>
                <span className="text-[#1E1D1A]/60">- $199/mo</span>
              </div>
              <p className="text-[#1E1D1A]/70">Complete hormone therapy</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80 font-semibold">Everything in Virtual DPC</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Comprehensive hormone testing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">TRT & HRT medications included</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Monthly monitoring & adjustments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Nutrition & lifestyle coaching</span>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full text-center bg-[#1D9E75] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0F6E56] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#1D9E75] transition-all">
            <div className="text-center mb-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1E1D1A] mb-2">
                Elite GLP-1
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-[#1D9E75]">$349</span>
                <span className="text-[#1E1D1A]/60">/month</span>
              </div>
              <p className="text-[#1E1D1A]/70">Complete weight management</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80 font-semibold">Everything in Hormone Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Semaglutide or Tirzepatide included</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Weekly medication management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Custom nutrition & fitness plans</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1D9E75] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1E1D1A]/80">Body composition tracking</span>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="block w-full text-center bg-[#F7F4EE] text-[#1D9E75] px-6 py-3 rounded-full font-semibold hover:bg-[#1D9E75] hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold text-[#1E1D1A] mb-4">
            Still Not Sure Which Is Right for You?
          </h2>
          <p className="text-lg text-[#1E1D1A]/70 mb-8">
            Schedule a complimentary consultation with our team to discuss your health goals and find your perfect fit.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#1D9E75] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#0F6E56] transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}