import React from 'react'

export default function MembershipsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center px-4">
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
          Membership Plans
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Transparent pricing. No hidden fees. No insurance required. Cancel anytime.
        </p>
      </section>

      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-[#E2DDD4] shadow-sm max-w-4xl mx-auto mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">
                Virtual DPC Primary Care
              </h2>
              <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] px-4 py-1 rounded-full text-sm font-medium">
                Essential
              </span>
            </div>
            <div className="text-right">
              <div className="text-5xl font-light font-[family-name:var(--font-cormorant)] text-[#1E1D1A]">
                $99
              </div>
              <div className="text-[#7A7870]">/month</div>
            </div>
          </div>
          
          <p className="text-lg text-[#7A7870] mb-8 leading-relaxed">
            Direct access to primary care without insurance barriers. Unlimited virtual visits, same-day responses, and transparent pricing.
          </p>

          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A] mb-4">
              What's Included:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Unlimited virtual visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Secure messaging 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Same-day & next-day appointments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Labs at wholesale cost</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Wholesale medication pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Preventative care & wellness</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Chronic condition management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Annual wellness exam</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F7F4EE] p-6 rounded-xl mb-8">
            <h4 className="font-semibold text-[#1E1D1A] mb-2">Who it's for:</h4>
            <p className="text-[#7A7870]">
              Ideal for patients who need consistent primary care, chronic disease management, or want to establish a direct care relationship.
            </p>
          </div>

          <a
            href="/contact"
            className="block w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-center py-4 px-8 rounded-lg font-medium transition-colors"
          >
            Get Started with Virtual DPC
          </a>
        </div>

        <div className="bg-white rounded-2xl p-10 md:p-14 border border-[#E2DDD4] shadow-sm max-w-4xl mx-auto mb-8 relative">
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="inline-block bg-[#1D9E75] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Most Popular
            </span>
          </div>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">
                Hormone Optimization
              </h2>
              <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] px-4 py-1 rounded-full text-sm font-medium">
                Comprehensive
              </span>
            </div>
            <div className="text-right">
              <div className="text-5xl font-light font-[family-name:var(--font-cormorant)] text-[#1E1D1A]">
                $149-199
              </div>
              <div className="text-[#7A7870]">/month</div>
            </div>
          </div>
          
          <p className="text-lg text-[#7A7870] mb-8 leading-relaxed">
            Comprehensive hormone therapy and metabolic wellness. Includes everything in Virtual DPC plus specialized hormone care.
          </p>

          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A] mb-4">
              What's Included:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Everything in Virtual DPC</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Comprehensive hormone panel</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Bioidentical hormone therapy (BHRT)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Testosterone optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Thyroid & adrenal management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Quarterly follow-up visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Pellet therapy option</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Symptom tracking & optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F7F4EE] p-6 rounded-xl mb-4">
            <h4 className="font-semibold text-[#1E1D1A] mb-2">Who it's for:</h4>
            <p className="text-[#7A7870]">
              Ideal for patients experiencing fatigue, weight changes, mood shifts, low libido, brain fog, or other hormone-related symptoms.
            </p>
          </div>

          <div className="bg-[#FEF7E6] border border-[#F4D06F] p-4 rounded-lg mb-8">
            <p className="text-sm text-[#7A7870]">
              <strong className="text-[#1E1D1A]">Note:</strong> Pricing varies based on hormone levels and treatment protocol.
            </p>
          </div>

          <a
            href="/contact"
            className="block w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-center py-4 px-8 rounded-lg font-medium transition-colors"
          >
            Start Hormone Optimization
          </a>
        </div>

        <div className="bg-white rounded-2xl p-10 md:p-14 border border-[#E2DDD4] shadow-sm max-w-4xl mx-auto mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">
                Elite GLP-1 + Metabolic
              </h2>
              <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] px-4 py-1 rounded-full text-sm font-medium">
                Comprehensive
              </span>
            </div>
            <div className="text-right">
              <div className="text-5xl font-light font-[family-name:var(--font-cormorant)] text-[#1E1D1A]">
                $349
              </div>
              <div className="text-[#7A7870]">/month</div>
            </div>
          </div>
          
          <p className="text-lg text-[#7A7870] mb-8 leading-relaxed">
            Our most comprehensive program combining GLP-1 therapy, full metabolic medicine, and everything in Hormone Optimization.
          </p>

          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A] mb-4">
              What's Included:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Everything in Hormone Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">GLP-1 medication included</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Monthly monitoring visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Comprehensive metabolic assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Nutrition & lifestyle coaching</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Body composition tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">MedSpa service discounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3">✓</span>
                <span className="text-[#1E1D1A]">Priority scheduling</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F7F4EE] p-6 rounded-xl mb-8">
            <h4 className="font-semibold text-[#1E1D1A] mb-2">Who it's for:</h4>
            <p className="text-[#7A7870]">
              Ideal for patients seeking significant weight loss, metabolic reset, or the most comprehensive direct-care experience.
            </p>
          </div>

          <a
            href="/contact"
            className="block w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-center py-4 px-8 rounded-lg font-medium transition-colors"
          >
            Start the Elite Program
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-12">
          Compare Plans
        </h2>
        
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#E2DDD4]">
                <th className="text-left py-4 px-4 font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A]">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A]">
                  Virtual DPC
                </th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A]">
                  Hormone
                </th>
                <th className="text-center py-4 px-4 font-[family-name:var(--font-dm-sans)] font-semibold text-[#1E1D1A]">
                  Elite
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">Virtual visits</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">Secure messaging 24/7</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">Labs at wholesale cost</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">Hormone therapy</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">GLP-1 medication</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">Nutrition coaching</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
              <tr className="border-b border-[#E2DDD4]">
                <td className="py-4 px-4 text-[#1E1D1A]">MedSpa discounts</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#7A7870]">—</td>
                <td className="text-center py-4 px-4 text-[#1D9E75] text-xl">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-12">
          Common Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white rounded-xl p-6 border border-[#E2DDD4] group">
            <summary className="font-semibold text-[#1E1D1A] cursor-pointer list-none flex items-center justify-between">
              Can I cancel anytime?
              <span className="text-[#1D9E75] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[#7A7870] leading-relaxed">
              Yes, all memberships are month-to-month with no long-term contracts. You can cancel anytime with no penalties or fees.
            </p>
          </details>

          <details className="bg-white rounded-xl p-6 border border-[#E2DDD4] group">
            <summary className="font-semibold text-[#1E1D1A] cursor-pointer list-none flex items-center justify-between">
              Does insurance cover this?
              <span className="text-[#1D9E75] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[#7A7870] leading-relaxed">
              No — this is a cash-pay model by design. By removing insurance from the equation, we can provide more personalized care, transparent pricing, and eliminate administrative barriers between you and your provider.
            </p>
          </details>

          <details className="bg-white rounded-xl p-6 border border-[#E2DDD4] group">
            <summary className="font-semibold text-[#1E1D1A] cursor-pointer list-none flex items-center justify-between">
              Do you accept HSA/FSA?
              <span className="text-[#1D9E75] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[#7A7870] leading-relaxed">
              Yes, most membership and treatment expenses qualify for HSA/FSA payment. We provide detailed receipts for easy reimbursement.
            </p>
          </details>

          <details className="bg-white rounded-xl p-6 border border-[#E2DDD4] group">
            <summary className="font-semibold text-[#1E1D1A] cursor-pointer list-none flex items-center justify-between">
              What if I need a specialist referral?
              <span className="text-[#1D9E75] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[#7A7870] leading-relaxed">
              We coordinate referrals as part of your membership. LaDonna Walker NP works closely with trusted specialists in the Conway area and will guide you through the process when specialized care is needed.
            </p>
          </details>

          <details className="bg-white rounded-xl p-6 border border-[#E2DDD4] group">
            <summary className="font-semibold text-[#1E1D1A] cursor-pointer list-none flex items-center justify-between">
              Is this available outside Conway, AR?
              <span className="text-[#1D9E75] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[#7A7870] leading-relaxed">
              Virtual DPC is available statewide in Arkansas. Hormone therapy and Elite programs may require in-person visits to our Conway location for labs, assessments, and certain treatments.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center px-4">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-6">
          Not Sure Which Plan?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let us help you find the right membership for your health goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="inline-block bg-white text-[#0F6E56] hover:bg-[#F7F4EE] py-3 px-8 rounded-lg font-medium transition-colors"
          >
            Book a Consultation
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-medium transition-colors"
          >
            Take the Quiz
          </a>
        </div>
      </section>
    </main>
  )
}