import React from 'react'
import Link from 'next/link'

export default function GLP1Page() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
            Medical Weight Loss That Works
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl mb-8 max-w-3xl mx-auto opacity-95">
            FDA-approved GLP-1 therapy with full medical oversight — included in your Elite membership.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#0F6E56] px-8 py-4 rounded-full font-[family-name:var(--font-dm-sans)] font-semibold hover:bg-[#F7F4EE] transition-colors"
          >
            Start Your Weight Loss Journey
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1D9E75] mb-2">15-20%</div>
              <div className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">Average Weight Loss</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1D9E75] mb-2">FDA-Approved</div>
              <div className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">Medication</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1D9E75] mb-2">Monthly</div>
              <div className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">Medical Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-16">
            The GLP-1 Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] mb-4">1</div>
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-xl text-[#1E1D1A] mb-3">
                Initial Consultation
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
                Labs, metabolic assessment, health history
              </p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] mb-4">2</div>
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-xl text-[#1E1D1A] mb-3">
                Personalized Protocol
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
                GLP-1 dosing plan tailored to your body
              </p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] mb-4">3</div>
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-xl text-[#1E1D1A] mb-3">
                Monthly Check-Ins
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
                Adjust dosing, track progress, address side effects
              </p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] mb-4">4</div>
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-xl text-[#1E1D1A] mb-3">
                Long-Term Support
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
                Nutrition coaching, lifestyle optimization, maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <ul className="space-y-4 font-[family-name:var(--font-dm-sans)]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">GLP-1 medication (semaglutide or tirzepatide)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Initial metabolic lab panel</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Monthly monitoring visits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Dosing adjustments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Nutrition coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Body composition tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">24/7 messaging access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1E1D1A]">Prescription management</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#E1F5EE] rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-xl text-[#1E1D1A] mb-4">
                Not Included
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
                Some specialized lab work may be billed separately if needed. Initial consultation will determine if any additional testing is recommended for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Info */}
      <section className="bg-[#1E1D1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center mb-16">
            About GLP-1 Medications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-2xl mb-4">
                Semaglutide
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70 mb-4">
                (Ozempic/Wegovy)
              </p>
              <ul className="space-y-3 font-[family-name:var(--font-dm-sans)]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  Weekly injection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  15% average weight loss
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  FDA approved
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-2xl mb-4">
                Tirzepatide
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70 mb-4">
                (Mounjaro/Zepbound)
              </p>
              <ul className="space-y-3 font-[family-name:var(--font-dm-sans)]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  Weekly injection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  20% average weight loss
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1D9E75] rounded-full mr-3"></span>
                  FDA approved
                </li>
              </ul>
            </div>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-center text-white/80 max-w-2xl mx-auto">
            LaDonna will recommend the right medication based on your health profile.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-16">
            Pricing
          </h2>
          <div className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto">
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1E1D1A] mb-4">
              Elite GLP-1 + Metabolic Program
            </h3>
            <div className="font-[family-name:var(--font-dm-sans)] text-5xl font-bold text-[#1D9E75] mb-6">
              $349<span className="text-2xl text-[#7A7870]">/mo</span>
            </div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870] mb-8">
              Includes medication, monitoring, nutrition coaching, and everything in our Hormone Optimization plan.
            </p>
            <div className="space-y-4">
              <Link 
                href="/contact"
                className="block w-full bg-[#1D9E75] text-white px-8 py-4 rounded-full font-[family-name:var(--font-dm-sans)] font-semibold hover:bg-[#0F6E56] transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/memberships"
                className="block w-full border-2 border-[#1D9E75] text-[#1D9E75] px-8 py-4 rounded-full font-[family-name:var(--font-dm-sans)] font-semibold hover:bg-[#E1F5EE] transition-colors"
              >
                Compare All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl mb-8 opacity-95">
            Schedule your consultation with LaDonna Walker NP to see if GLP-1 therapy is right for you.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#0F6E56] px-8 py-4 rounded-full font-[family-name:var(--font-dm-sans)] font-semibold hover:bg-[#F7F4EE] transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}