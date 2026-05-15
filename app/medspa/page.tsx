import React from 'react'
import Link from 'next/link'

export default function MedSpaPage() {
  const services = [
    {
      title: 'Neurotoxins (Botox/Dysport)',
      description: 'Wrinkle relaxers, brow lift, jaw slimming, and hyperhidrosis treatment for a refreshed, youthful appearance.'
    },
    {
      title: 'Dermal Fillers',
      description: 'Lip augmentation, cheek volume restoration, nasolabial fold smoothing, and under-eye hollow correction.'
    },
    {
      title: 'Medical-Grade Facials',
      description: 'Deep cleansing, brightening, and anti-aging protocols designed for visible results.'
    },
    {
      title: 'Chemical Peels',
      description: 'Superficial to medium depth peels targeting pigmentation, texture irregularities, and acne.'
    },
    {
      title: 'Skin Tightening',
      description: 'RF microneedling and collagen stimulation treatments to address skin laxity and improve firmness.'
    },
    {
      title: 'Skincare Consulting',
      description: 'Medical-grade product recommendations and custom regimen design tailored to your skin needs.'
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
            MedSpa & Aesthetic Services
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl text-white/90">
            Medical-grade aesthetic treatments by LaDonna Walker NP in Conway, AR.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E2DDD4] shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-[#7A7870] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E1D1A] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-6">
            Member Discounts
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg mb-12 text-white/90">
            Elite GLP-1 members receive exclusive discounts on all MedSpa services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0F6E56] rounded-2xl p-8 border border-[#1D9E75]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-4">
                Members
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg mb-4">
                10-20% discount on all services
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-white/90">
                Priority booking and scheduling
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-4">
                Non-Members
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg mb-4">
                Standard pricing
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-white/90">
                Regular scheduling availability
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/memberships"
              className="inline-block bg-[#1D9E75] text-white font-[family-name:var(--font-dm-sans)] px-8 py-4 rounded-full hover:bg-[#0F6E56] transition-colors"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
            Book a Consultation
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-[#7A7870] mb-10">
            All aesthetic treatments begin with a complimentary consultation to discuss your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1D9E75] text-white font-[family-name:var(--font-dm-sans)] px-8 py-4 rounded-full hover:bg-[#0F6E56] transition-colors mb-6"
          >
            Schedule Your Consultation
          </Link>
          <div className="font-[family-name:var(--font-dm-sans)] text-[#7A7870] mt-8">
            <p className="mb-2">
              <strong className="text-[#1E1D1A]">LaDonna Walker NP</strong>
            </p>
            <p className="mb-2">Rooted Health Hormones & MedSpa</p>
            <p className="mb-2">Conway, AR</p>
            <p>
              <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] hover:text-[#0F6E56]">
                bekinditmatters@icloud.com
              </a>
            </p>
            <p className="mt-2">
              <a href="https://rootedhealthmember.com" className="text-[#1D9E75] hover:text-[#0F6E56]">
                rootedhealthmember.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}