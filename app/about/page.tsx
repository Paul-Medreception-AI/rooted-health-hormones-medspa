import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Providers | Rooted Health Hormones & MedSpa Conway AR',
  description: 'Meet LaDonna Walker NP and Chelsea Lary RD, the providers behind Rooted Health Hormones & MedSpa in Conway, AR.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Meet Our Providers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Real care, root causes, and results. Rooted Health Hormones &amp; MedSpa, Conway, AR.
          </p>
        </div>
      </section>

      {/* LaDonna Walker */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-72 rounded-2xl bg-[#1D9E75] flex items-center justify-center mb-6 shadow-lg">
              <div className="text-center text-white">
                <div className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold mb-2">LaDonna Walker, NP</div>
                <div className="text-white/80 text-sm">MSN, APRN, FNP-BC</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#7A7870] text-sm">Board Certified Family Nurse Practitioner</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] mb-2">
                LaDonna Walker, MSN, APRN, FNP-BC
              </h2>
              <p className="text-[#1D9E75] font-semibold text-lg mb-6">Board Certified Family Nurse Practitioner</p>
            </div>

            <p className="text-[#1E1D1A] text-lg leading-relaxed">
              LaDonna Walker is a Board Certified Family Nurse Practitioner with a passion for helping patients achieve optimal health through hormone optimization, GLP-1 weight loss, and personalized metabolic care. She founded Rooted Health Hormones and MedSpa in Conway, Arkansas to offer a direct-pay model that gives her the time to truly listen, investigate root causes, and build lasting treatment plans.
            </p>
            <p className="text-[#1E1D1A] text-lg leading-relaxed">
              Her philosophy is simple: spend real time with each patient, address what is actually driving symptoms, and never let insurance constraints dictate the quality of care. Whether you are navigating bioidentical hormone replacement, thyroid management, metabolic dysfunction, or weight loss, LaDonna works with you, not just your chart.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A] mb-5">
                Specialties
              </h3>
              <ul className="space-y-3">
                {[
                  'Hormone optimization and bioidentical HRT',
                  'GLP-1 weight loss (Semaglutide and Tirzepatide)',
                  'Thyroid management',
                  'Primary care DPC (direct primary care)',
                  'Metabolic health and PCOS',
                  'MedSpa aesthetics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1D9E75] mt-0.5 font-bold">&#10003;</span>
                    <span className="text-[#1E1D1A]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#E2DDD4]">
                <p className="text-[#7A7870] text-sm">
                  Collaborating physician: Abrar Ashraf Khan, MD (Ark. Code § 17-87-310)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chelsea Lary */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] mb-2">
                  Chelsea Lary
                </h2>
                <p className="text-[#1D9E75] font-semibold text-lg mb-6">Registered Dietitian and Certified Personal Trainer</p>
              </div>

              <p className="text-[#1E1D1A] text-lg leading-relaxed">
                Chelsea Lary brings over 10 years of experience in health, fitness, and nutrition to the Rooted Health team. As a Registered Dietitian and Certified Personal Trainer, she focuses on what actually works: keeping it realistic and sustainable for your life, your body, and your schedule.
              </p>
              <p className="text-[#1E1D1A] text-lg leading-relaxed">
                She partners with patients to build nutrition and fitness strategies that complement their medical care, whether that includes hormone therapy, GLP-1 weight loss, or general wellness goals.
              </p>

              <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A] mb-5">
                  Consultation Options
                </h3>
                <ul className="space-y-3">
                  {[
                    'Nutrition consultation',
                    'Fitness consultation',
                    'Nutrition and Fitness combined consultation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#1D9E75] mt-0.5 font-bold">&#10003;</span>
                      <span className="text-[#1E1D1A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://rootedhealth.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Book with Chelsea
              </a>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/images/chelsea-lary.jpg"
                alt="Chelsea Lary, Registered Dietitian and Personal Trainer"
                className="rounded-2xl w-full max-w-sm object-cover shadow-lg"
              />
              <p className="text-[#7A7870] text-sm mt-4 text-center">
                Registered Dietitian / Certified Personal Trainer, 10+ years experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Info */}
      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] text-center mb-12">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-4">
                Main Office
              </h3>
              <p className="text-[#1E1D1A] leading-relaxed">
                1120 Hogan Lane, Suite 2B<br />
                Conway, AR 72032
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-4">
                Satellite Clinic (Monthly)
              </h3>
              <p className="text-[#1E1D1A] leading-relaxed">
                The Spa&apos;Ah<br />
                2501 Dave Ward Drive<br />
                Conway, AR 72034
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-4">
                Contact and Booking
              </h3>
              <p className="text-[#1E1D1A] leading-relaxed mb-3">
                <a href="tel:+14798806148" className="hover:text-[#1D9E75] transition-colors">(479) 880-6148</a>
              </p>
              <a
                href="https://rootedhealth.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-sm"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] text-center mb-12">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Root-Cause Medicine',
                body: 'We dig deeper to identify and address the underlying causes of your symptoms, not just treat surface-level issues. Comprehensive testing and personalized assessments guide every treatment plan.',
              },
              {
                title: 'Direct-Pay Model',
                body: 'Our transparent cash-pay structure allows us to spend quality time with each patient, offer competitive pricing, and provide services without third-party limitations.',
              },
              {
                title: 'Personalized Plans',
                body: 'Every patient is unique. We create customized treatment protocols based on your specific hormonal needs, health goals, lifestyle, and comprehensive lab work.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4] hover:shadow-md transition-shadow duration-200">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#1E1D1A] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule a consultation at our Conway, Arkansas office and take the first step toward feeling like yourself again.
          </p>
          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
