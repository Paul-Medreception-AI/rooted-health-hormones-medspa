import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] flex items-center justify-center px-6 relative">
        <img src="/hero-bg.jpg" alt="Rooted Health clinic" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-4xl text-center relative z-10">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-7xl font-light text-white tracking-tight leading-tight mb-6">
            Hormone & Metabolic Medicine Without Insurance Barriers
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Direct-pay memberships starting at $99/mo for hormone therapy, GLP-1 weight loss, and primary care in Conway, AR.
          </p>
          <Link href="/quiz" className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg">
            Take the Membership Quiz
          </Link>
        </div>
      </section>

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

      <section className="bg-[#F7F4EE] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-center text-[#1E1D1A] mb-4">
            Membership Plans
          </h2>
          <p className="text-[#7A7870] text-center mb-16">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] shadow-sm">
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
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Unlimited virtual visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Text & email access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Same-day appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Labs at cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Wholesale medications</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2DDD4] shadow-sm ring-2 ring-[#1D9E75] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1D9E75] text-white text-xs px-4 py-1 rounded-full font-semibold whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-2">
                Hormone Optimization
              </h3>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[#1D9E75]">$149–$199</span>
                <span className="text-lg text-[#7A7870]">/mo</span>
              </div>
              <p className="text-[#7A7870] text-sm mb-6">Complete Hormone Care</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Everything in Virtual DPC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Comprehensive hormone testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">BHRT & thyroid optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Quarterly follow-ups included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-[#1E1D1A]">Personalized treatment plans</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8">
                Get Started
              </Link>
            </div>

            <div className="bg-[#1E1D1A] text-white rounded-2xl p-8 border border-[#1E1D1A] shadow-sm">
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
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-white">Everything in Hormone tier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-white">GLP-1 medication included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-white">Weekly metabolic monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-white">Nutrition & lifestyle coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1">✓</span>
                  <span className="text-white">Priority appointment scheduling</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center mt-8">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-center text-[#1E1D1A] mb-4">
            Our Services
          </h2>
          <p className="text-[#7A7870] text-center mb-16 max-w-2xl mx-auto">
            Comprehensive hormone optimization, metabolic health, and aesthetic treatments tailored to your unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Bioidentical Hormone Replacement
              </h3>
              <p className="text-[#7A7870]">
                BHRT tailored to restore hormonal balance and vitality for men and women.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                GLP-1 Weight Loss
              </h3>
              <p className="text-[#7A7870]">
                Medical weight loss using proven GLP-1 medications with comprehensive support.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Microdosing GLP-1
              </h3>
              <p className="text-[#7A7870]">
                Optimized low-dose protocols for sustainable metabolic health and weight management.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Laser Hair Removal
              </h3>
              <p className="text-[#7A7870]">
                Advanced laser technology for safe, effective permanent hair reduction.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                NAD+ Treatments
              </h3>
              <p className="text-[#7A7870]">
                Cellular rejuvenation therapy for energy, mental clarity, and anti-aging benefits.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Fat Dissolving Injections
              </h3>
              <p className="text-[#7A7870]">
                Non-surgical body contouring to reduce stubborn fat deposits.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Tattoo Removal
              </h3>
              <p className="text-[#7A7870]">
                State-of-the-art laser technology for safe and effective tattoo removal.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Exclusive Injections
              </h3>
              <p className="text-[#7A7870]">
                Premium injectable treatments for aesthetic enhancement and wellness.
              </p>
            </div>
            <div className="p-6 border border-[#E2DDD4] rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">
                Neova Skin Care
              </h3>
              <p className="text-[#7A7870]">
                Medical-grade skincare products for optimal skin health and rejuvenation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] rounded-2xl overflow-hidden">
            <img src="/clinical-1.jpg" alt="LaDonna Walker NP at Rooted Health" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-[#1E1D1A] mb-6">
              Meet LaDonna Walker, NP
            </h2>
            <p className="text-[#7A7870] text-lg mb-6 leading-relaxed">
              As a board-certified nurse practitioner specializing in hormone optimization and metabolic medicine, LaDonna brings years of expertise in helping patients reclaim their health without insurance barriers.
            </p>
            <p className="text-[#7A7870] text-lg mb-8 leading-relaxed">
              Her approach combines evidence-based medicine with personalized care, ensuring each patient receives treatment tailored to their unique hormonal and metabolic needs.
            </p>
            <Link href="/about" className="text-[#1D9E75] font-semibold hover:text-[#0F6E56] transition-colors inline-flex items-center gap-2">
              Learn More About Our Practice
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-center text-[#1E1D1A] mb-4">
            Real Results
          </h2>
          <p className="text-[#7A7870] text-center mb-16 max-w-2xl mx-auto">
            Our patients experience transformative outcomes through personalized hormone optimization and metabolic treatments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/clinical-2.jpg" alt="Treatment results at Rooted Health" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/clinical-3.jpg" alt="Patient transformation results" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/clinical-4.jpg" alt="Clinical treatment outcomes" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-center text-[#1E1D1A] mb-16">
            What Our Patients Say
          </h2>
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E2DDD4] shadow-sm">
              <p className="text-[#1E1D1A] text-lg mb-4 leading-relaxed">
                "After years of feeling dismissed by traditional doctors, LaDonna actually listened and helped me optimize my hormones. I finally feel like myself again."
              </p>
              <p className="text-[#7A7870] font-semibold">— Sarah M.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#E2DDD4] shadow-sm">
              <p className="text-[#1E1D1A] text-lg mb-4 leading-relaxed">
                "The GLP-1 program changed my life. Down 45 pounds and my energy is through the roof. The direct-pay model makes it so affordable compared to my insurance plan."
              </p>
              <p className="text-[#7A7870] font-semibold">— Michael T.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#E2DDD4] shadow-sm">
              <p className="text-[#1E1D1A] text-lg mb-4 leading-relaxed">
                "No more insurance hoops to jump through. Just quality care when I need it. The membership model is a game-changer for hormone therapy."
              </p>
              <p className="text-[#7A7870] font-semibold">— Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            Join hundreds of patients who've found better health through our direct-pay membership model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/quiz" className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg">
              Take the Membership Quiz
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-block">
              Schedule a Consultation
            </Link>
          </div>
          <div className="text-white/90 space-y-3">
            <p className="text-lg">
              <span className="font-semibold">Call:</span> <a href="tel:4798806148" className="hover:text-white transition-colors">(479) 880-6148</a>
            </p>
            <p className="text-lg">
              <span className="font-semibold">Primary Location:</span> 1120 Hogan Lane Suite 2B, Conway, AR 72032
            </p>
            <p className="text-lg">
              <span className="font-semibold">Spaah Satellite Clinic:</span> 2501 Dave Ward Drive, Conway, AR 72034 (monthly)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}