import React from 'react'

export default function SpaahPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center px-4">
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
          Spaah Monthly Satellite Clinic
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Rooted Health brings full-service hormone and aesthetic care to you — monthly pop-up clinic events at the Spaah location.
        </p>
      </section>

      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
            What Is the Spaah Clinic?
          </h2>
          <p className="text-lg text-[#1E1D1A] mb-6 leading-relaxed">
            LaDonna Walker, NP, brings her full suite of Rooted Health services to the Spaah location on a monthly basis. This satellite clinic offers the same exceptional care you've come to expect from Rooted Health Hormones & MedSa, now available in a convenient pop-up format.
          </p>
          <p className="text-lg text-[#1E1D1A] mb-6 leading-relaxed">
            Patients can receive hormone consultations, GLP-1 check-ins, MedSpa treatments, and more without traveling to Conway. Whether you're an existing patient looking for easier access or a new patient curious about our services, the Spaah clinic provides a welcoming environment for all your hormone and aesthetic needs.
          </p>
          <p className="text-lg text-[#1E1D1A] leading-relaxed">
            This is a rotating monthly clinic — appointments must be booked in advance. Spots are limited, so we encourage you to reserve your appointment early to secure your preferred time.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center text-[#1E1D1A] mb-12">
          Services Available at Spaah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              Hormone Consultations
            </h3>
            <p className="text-[#7A7870]">
              Comprehensive hormone evaluations and treatment planning with LaDonna Walker, NP.
            </p>
          </div>
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              GLP-1 Follow-Ups
            </h3>
            <p className="text-[#7A7870]">
              Weight management check-ins and medication adjustments for optimal results.
            </p>
          </div>
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              Botox & Neurotoxins
            </h3>
            <p className="text-[#7A7870]">
              Expert injections to smooth fine lines and prevent wrinkles with natural-looking results.
            </p>
          </div>
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              Dermal Fillers
            </h3>
            <p className="text-[#7A7870]">
              Restore volume and contour with hyaluronic acid fillers for a refreshed appearance.
            </p>
          </div>
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              Membership Enrollment
            </h3>
            <p className="text-[#7A7870]">
              Sign up for exclusive membership benefits and discounted treatment pricing.
            </p>
          </div>
          <div className="bg-[#E1F5EE] rounded-xl p-8 border border-[#E2DDD4]">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
              Lab Review & Results
            </h3>
            <p className="text-[#7A7870]">
              In-depth review of your lab work and personalized treatment recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
          Clinic Schedule
        </h2>
        <div className="bg-white rounded-2xl p-12 max-w-2xl mx-auto border border-[#E2DDD4]">
          <p className="text-2xl text-[#1E1D1A] mb-4">
            📅 Monthly — dates announced via email and Instagram @rootedhealthllc
          </p>
          <p className="text-xl text-[#7A7870] mb-4">
            📍 Location details coming soon
          </p>
          <p className="text-lg text-[#1E1D1A] font-semibold">
            Spots are limited — book your appointment in advance.
          </p>
          <a
            href="/contact"
            className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block mt-6"
          >
            Reserve Your Spot
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center px-4">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-6">
          Stay Updated
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Follow @rootedhealthllc on Instagram for monthly clinic dates and availability updates.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#1D9E75] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  )
}