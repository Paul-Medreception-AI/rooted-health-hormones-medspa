import React from 'react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Meet Your Provider
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Rooted Health Hormones & MedSpa — Conway, Arkansas
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/clinical-1.jpg"
              alt="LaDonna Walker, NP — Rooted Health"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
          <div className="space-y-6 text-[#1E1D1A]">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#0F6E56] mb-1">
                LaDonna Walker, NP
              </h2>
              <p className="text-[#1D9E75] font-semibold text-lg mb-6">Founder &amp; Nurse Practitioner</p>
            </div>
            <p className="text-lg leading-relaxed">
              LaDonna Walker is a board-certified Nurse Practitioner with a passion for helping individuals achieve optimal health through functional hormone therapy and personalized wellness care. Based in Conway, Arkansas, LaDonna founded Rooted Health Hormones &amp; MedSpa to provide a patient-centered approach that goes beyond conventional medicine.
            </p>
            <p className="text-lg leading-relaxed">
              LaDonna believes in addressing the root cause of health concerns rather than simply masking symptoms. Her approach centers on comprehensive hormone optimization, advanced aesthetic treatments, and evidence-based functional medicine — all through a transparent cash-pay model that puts patients first.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>Board Certified Nurse Practitioner</span></li>
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>Hormone Replacement Therapy Specialist</span></li>
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>Functional Medicine Practitioner</span></li>
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>Aesthetic &amp; Regenerative Medicine</span></li>
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>Peptide Therapy Certified</span></li>
              <li className="flex items-center gap-3"><span className="text-[#1D9E75] text-lg">✓</span><span>IV Nutritional Therapy Provider</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1E1D1A] text-center mb-16">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">Root-Cause Medicine</h3>
              <p className="text-[#1E1D1A] leading-relaxed">We dig deeper to identify and address the underlying causes of your symptoms, not just treat surface-level issues. Comprehensive testing and personalized assessments guide every treatment plan.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">Cash-Pay Model</h3>
              <p className="text-[#1E1D1A] leading-relaxed">Our transparent cash-pay structure allows us to spend quality time with each patient, offer competitive pricing, and provide services often not covered by insurance — without third-party limitations.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">Personalized Plans</h3>
              <p className="text-[#1E1D1A] leading-relaxed">Every patient is unique. We create customized treatment protocols based on your specific hormonal needs, health goals, lifestyle, and comprehensive lab work to optimize your wellness journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1E1D1A] mb-6">
          Ready to Start Your Wellness Journey?
        </h2>
        <p className="text-xl text-[#1E1D1A]/80 mb-10 max-w-2xl mx-auto">
          Schedule a consultation with LaDonna at our Conway, Arkansas location and discover how personalized hormone therapy can transform your health.
        </p>
        <a href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
          Book a Consultation
        </a>
      </section>
    </main>
  )
}
