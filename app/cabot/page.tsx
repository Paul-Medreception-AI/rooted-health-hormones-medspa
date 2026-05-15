import React from 'react'
import Link from 'next/link'

export default function CabotPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
            Cabot Satellite Clinic
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Rooted Health services are coming to Cabot, AR — bringing hormone and metabolic medicine closer to you.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6 text-center">
            Rooted Health in Cabot
          </h2>
          <div className="space-y-6 text-[#1E1D1A] text-lg leading-relaxed">
            <p>
              LaDonna Walker, NP is expanding Rooted Health services to the Cabot community. We're excited to bring our signature approach to hormone therapy, metabolic health, and primary care to Central Arkansas families who deserve convenient access to exceptional medical care.
            </p>
            <p>
              The Cabot satellite clinic offers the same high-quality hormone therapy, GLP-1 weight loss programs, and primary care services as the Conway location. Our direct-pay model ensures you receive personalized attention and comprehensive care without insurance barriers or rushed appointments.
            </p>
            <p>
              No need to drive to Conway — receive world-class direct-pay medicine in your community. Whether you're seeking bioidentical hormone replacement, metabolic optimization, or preventive primary care, Rooted Health Cabot brings evidence-based medicine and personalized wellness to your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-4 text-center">
            Services Available in Cabot
          </h2>
          <p className="text-center text-[#7A7870] text-lg mb-12 max-w-2xl mx-auto">
            All Rooted Health services will be available at our Cabot location
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Hormone Replacement Therapy
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                Bioidentical hormones for men and women. Pellet therapy, injections, and topical options tailored to your needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                GLP-1 Weight Loss
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                Semaglutide and tirzepatide programs with medical supervision, nutrition guidance, and metabolic optimization.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Primary Care
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                Direct primary care with extended appointments, comprehensive lab work, and true preventive medicine.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Metabolic Health
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                Comprehensive metabolic panels, insulin resistance management, and personalized nutrition strategies.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Wellness Optimization
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                IV therapy, nutritional supplements, and integrative approaches to support your health goals.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Telemedicine
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                Virtual appointments available for follow-ups, medication management, and consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
            Clinic Hours & Location
          </h2>
          
          <div className="bg-white rounded-2xl p-12 border border-[#E2DDD4] mb-8">
            <div className="space-y-6 text-lg text-[#1E1D1A]">
              <p className="text-2xl">📍 Cabot, AR — exact address coming soon</p>
              <p className="text-xl text-[#7A7870]">
                🗓️ Schedule to be announced — join the waitlist to be notified
              </p>
              <p className="text-[#1D9E75] font-medium pt-4 border-t border-[#E2DDD4]">
                Virtual appointments available now for Cabot-area patients.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-[#1D9E75] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#0F6E56] transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white mb-4">
            Virtual Appointments Available Now
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Can't wait for the Cabot clinic to open? Schedule a virtual appointment today and begin your health journey with Rooted Health from the comfort of your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0F6E56] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#E1F5EE] transition-colors"
          >
            Schedule Virtual Visit
          </Link>
        </div>
      </section>
    </div>
  )
}