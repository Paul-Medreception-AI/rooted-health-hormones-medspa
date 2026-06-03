import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg opacity-90">
            Last updated: May 2026 | Rooted Health Hormones & MedSpa LLC
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 font-[family-name:var(--font-dm-sans)] text-[#1E1D1A]">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                By accessing and using www.therootedhealth.net, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                2. Services Described
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                This website describes membership-based direct primary care and aesthetic services offered by Rooted Health Hormones & MedSpa. The information provided on this website does not constitute medical advice and is for informational purposes only. Individual consultations are required for personalized medical recommendations.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                3. Membership Terms
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Membership is provided on a month-to-month basis. Members may cancel at any time with 30 days written notice. No refunds will be provided for partial months. Membership fees and terms are subject to change with 30 days notice to active members.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                4. Not a Substitute for Emergency Care
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Rooted Health Hormones & MedSpa is not an emergency service. If you are experiencing a medical emergency, call 911 immediately or go to the nearest emergency room. Our services are designed for routine care, preventive health, and wellness optimization—not emergency situations.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                5. No Insurance Billing
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                All services are cash-pay only. We do not bill insurance companies. Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) are accepted. Members are responsible for all membership fees and service charges at the time of service.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                6. HIPAA and Privacy
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Clinical intake and protected health information (PHI) are handled through our secure patient portal in compliance with HIPAA regulations. This public website does not collect or store PHI. For more information, please review our <Link href="/privacy" className="text-[#1D9E75] underline hover:text-[#0F6E56]">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                All content, branding, logos, images, and materials on this website are the property of Rooted Health Hormones & MedSpa LLC and are protected by copyright and trademark laws. Unauthorized use or reproduction is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Rooted Health Hormones & MedSpa LLC is not liable for decisions made based solely on website content. The information provided is general in nature and should not replace professional medical advice. Always consult with a licensed healthcare provider for personalized medical guidance.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                9. Governing Law
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                These terms and conditions are governed by and construed in accordance with the laws of the State of Arkansas. Any disputes arising from these terms shall be resolved in the courts of Arkansas.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                10. Contact Information
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                <strong>Rooted Health Hormones & MedSpa LLC</strong>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                Conway, AR
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                LaDonna Walker, NP
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Email: <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] underline hover:text-[#0F6E56]">bekinditmatters@icloud.com</a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E1F5EE] text-center font-[family-name:var(--font-dm-sans)]">
            <p className="text-[#7A7870]">
              <Link href="/privacy" className="text-[#1D9E75] hover:text-[#0F6E56] underline">
                Privacy Policy
              </Link>
              {' | '}
              <Link href="/sms-terms" className="text-[#1D9E75] hover:text-[#0F6E56] underline">
                SMS Terms
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}