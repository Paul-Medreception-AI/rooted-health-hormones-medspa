import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero — above the fold, no animation */}
      <section className="min-h-screen bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-7xl font-light text-white tracking-tight leading-tight mb-6">
            Hormone &amp; Metabolic Medicine Without Insurance Barriers
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Direct-pay memberships starting at $99/mo for hormone therapy, GLP-1 weight loss, and primary care in Conway, AR.
          </p>
          <Link
            href="/quiz"
            className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg"
          >
            Take the Membership Quiz
          </Link>
        </div>
      </section>

      {/* Trust/credibility bar */}
      <section className="bg-white py-10 border-b border-[#E2DDD4]">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 px-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-[#7A7870] mb-1">Board Certified NP</p>
            <p className="text-sm font-semibold text-[#1E1D1A]">LaDonna Walker, NP</p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-[#7A7870] mb-1">Payment Model</p>
            <p className="text-sm font-semibold text-[#1E1D1A]">Cash-Pay Only</p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-[#7A7870] mb-1">Location</p>
            <p className="text-sm font-semibold text-[#1E1D1A]">Conway, Arkansas</p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-[#7A7870] mb-1">Insurance</p>
            <p className="text-sm font-semibold text-[#1E1D1A]">No Insurance Required</p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="bg-[#F7F4EE] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-center text-[#1E1D1A] mb-4">
            Membership Plans
          </h2>
          <p className="text-[#7A7870] text-center mb-16">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-2">
                Virtual DPC
              </h3>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[#1D9E75]">$99</span>
                <span className="text-lg text-[#7A7870]">/mo</span>
              </div>
              <p className="text-[#7A7870] text-sm mb-6">Primary Care Direct</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Unlimited virtual visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Text &amp; email access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Same-day appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Labs at cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Wholesale medications</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] shadow-sm ring-2 ring-[#1D9E75] relative hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1D9E75] text-white text-xs px-4 py-1 rounded-full font-semibold whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-2">
                Hormone Optimization
              </h3>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[#1D9E75]">$149&ndash;$199</span>
                <span className="text-lg text-[#7A7870]">/mo</span>
              </div>
              <p className="text-[#7A7870] text-sm mb-6">Complete Hormone Care</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Everything in Virtual DPC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Comprehensive hormone testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">BHRT &amp; thyroid optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Quarterly follow-ups included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-[#1E1D1A]">Personalized treatment plans</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-[#1E1D1A] text-white rounded-2xl p-8 border border-[#1E1D1A] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-white mb-2">
                Elite GLP-1
              </h3>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[#1D9E75]">$349</span>
                <span className="text-lg text-white/70">/mo</span>
              </div>
              <p className="text-white/70 text-sm mb-6">Medical Weight Loss</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-white">Everything in Hormone tier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-white">GLP-1 medication included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-white">Monthly metabolic monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-white">Nutrition &amp; lifestyle coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">&#10003;</span>
                  <span className="text-white">MedSpa discounts included</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-white text-[#1E1D1A] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 section */}
      <section className="bg-[#1E1D1A] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white mb-6">
              Medical Weight Loss That Actually Works
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Our Elite GLP-1 program combines FDA-approved medications with comprehensive medical supervision, metabolic testing, and personalized coaching to help you achieve sustainable weight loss results.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-white">Medication, labs, and visits all included in one monthly fee</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-white">Board-certified provider managing your entire care journey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-white">No insurance required, no prior authorization delays</span>
              </li>
            </ul>
            <Link
              href="/quiz"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E1D1A] px-8 py-4 rounded-lg transition-colors inline-block font-semibold"
            >
              Start Your GLP-1 Journey
            </Link>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">15-20%</div>
              <div className="text-white/70">Average body weight loss</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">$349/mo</div>
              <div className="text-white/70">All-inclusive pricing with medication</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">Same Week</div>
              <div className="text-white/70">Start date after enrollment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider bio */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-3">
              Meet LaDonna Walker, NP
            </h2>
            <p className="text-[#7A7870] mb-6">
              Board Certified Nurse Practitioner | Hormone &amp; Metabolic Medicine Specialist
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              LaDonna Walker brings over a decade of clinical experience in hormone optimization, metabolic health, and primary care. Her passion for helping patients achieve optimal health led her to open Rooted Health, a direct-pay practice where she can spend real time with each patient without insurance limitations.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-8">
              Specializing in bioidentical hormone replacement therapy, GLP-1 weight loss programs, thyroid management, and comprehensive primary care, LaDonna creates personalized treatment plans that address root causes rather than just symptoms. Her approach combines evidence-based medicine with a deep commitment to patient education and empowerment.
            </p>
            <Link
              href="/about"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block mt-8"
            >
              Learn More About Our Practice
            </Link>
          </div>
          <div className="bg-[#E1F5EE] rounded-2xl h-96 w-full flex items-center justify-center text-[#7A7870] text-sm italic">
            Provider Photo
          </div>
        </div>
      </section>

      {/* Spaah teaser */}
      <section className="bg-[#E1F5EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-[#1D9E75] font-semibold mb-3">Satellite Clinic</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-[#1E1D1A] mb-4">
              Monthly Clinic at The Spa&apos;Ah
            </h2>
            <p className="text-[#7A7870] text-lg leading-relaxed mb-6">
              Can&apos;t make it to our main Conway office? LaDonna sees patients one day each month at The Spa&apos;Ah on Dave Ward Drive, bringing full hormone and metabolic care to a relaxed, spa-like setting.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-[#1E1D1A]">Hormone consultations &amp; follow-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-[#1E1D1A]">GLP-1 program check-ins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-[#1E1D1A]">Injections &amp; lab draws</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1">&#10003;</span>
                <span className="text-[#1E1D1A]">2501 Dave Ward Drive, Conway AR 72034</span>
              </li>
            </ul>
            <a
              href="/spaah-clinic"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Learn About Spaah Clinic Days
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-80 bg-white rounded-2xl p-8 border border-[#C5EBD9] shadow-sm text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-2">The Spa&apos;Ah</h3>
            <p className="text-[#7A7870] text-sm mb-4">
              2501 Dave Ward Drive
              <br />
              Conway, AR 72034
            </p>
            <p className="text-[#1D9E75] font-semibold text-sm">Monthly satellite clinic days</p>
            <p className="text-[#7A7870] text-xs mt-2">Book through our main scheduling page</p>
          </div>
        </div>
      </section>

      {/* Patient testimonials */}
      <section className="bg-[#F7F4EE] py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-16">
          Patient Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-[#E2DDD4] shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] leading-none mb-4">&ldquo;</div>
            <p className="italic text-[#1E1D1A] text-lg mb-6">
              After years of being dismissed by doctors who accepted insurance, LaDonna finally listened to me. She ran the right tests, found my hormone imbalances, and created a treatment plan that actually works. I feel like myself again for the first time in a decade.
            </p>
            <p className="font-semibold text-[#1E1D1A]">Sarah M.</p>
            <p className="text-[#7A7870] text-sm">Conway, AR</p>
          </div>
          <div className="bg-white rounded-2xl p-10 border border-[#E2DDD4] shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#1D9E75] leading-none mb-4">&ldquo;</div>
            <p className="italic text-[#1E1D1A] text-lg mb-6">
              The GLP-1 program changed my life. I have lost 45 pounds in six months, and more importantly, I have learned how to sustain it. Having everything included in one monthly price with no insurance hassles made this so simple. Worth every penny.
            </p>
            <p className="font-semibold text-[#1E1D1A]">Michael T.</p>
            <p className="text-[#7A7870] text-sm">Little Rock, AR</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0F6E56] to-[#1D9E75] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Take our quick 2-minute quiz to find the perfect membership plan for your health goals. No obligation, no pressure.
          </p>
          <Link
            href="/quiz"
            className="bg-white text-[#1D9E75] px-12 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg"
          >
            Take the Membership Quiz
          </Link>
        </div>
      </section>
    </main>
  )
}
