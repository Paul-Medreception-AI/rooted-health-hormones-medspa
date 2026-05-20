import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GLP-1 Weight Loss Program Conway AR | Semaglutide & Tirzepatide | Rooted Health',
  description: 'Medically supervised GLP-1 weight loss with semaglutide and tirzepatide in Conway, AR. Microdose program available. No insurance required. From $349/mo.',
}

export default function GLP1Page() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6">
            Medical Weight Loss That Actually Works
          </h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto opacity-95">
            GLP-1 therapy with Semaglutide and Tirzepatide, medically supervised in Conway, AR. No insurance required, no prior auth delays.
          </p>
          <p className="text-white/80 mb-10">Microdose program available for gentle, affordable entry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quiz"
              className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Take the Membership Quiz
            </a>
            <a href="https://rootedhealth.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0F6E56] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '15-20%', label: 'Average body weight loss' },
              { stat: 'Same Week', label: 'Start after enrollment' },
              { stat: 'No Insurance', label: 'Required, no prior auth delays' },
            ].map((s) => (
              <div key={s.stat}>
                <div className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1D9E75] mb-2">{s.stat}</div>
                <div className="text-[#7A7870]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: The Program */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
                The GLP-1 Program
              </h2>
              <p className="text-[#1E1D1A] text-lg leading-relaxed mb-6">
                GLP-1 medications including Semaglutide and Tirzepatide are powerful tools for managing weight and metabolic health. At Rooted Health, we personalize every protocol. Not everyone needs the highest dose.
              </p>
              <p className="text-[#1E1D1A] text-lg leading-relaxed mb-8">
                Our Microdose Program is a lower-dose, more affordable entry point designed for specific patients.
              </p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F6E56] mb-4">
                The Microdose Program is Ideal For:
              </h3>
              <ul className="space-y-3">
                {[
                  'Patients who have hit weight loss goals and want to maintain',
                  'Those who are sensitive to standard GLP-1 doses',
                  'First-time users seeking a gentle, affordable introduction',
                  'Individuals managing chronic metabolic conditions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1D9E75] font-bold mt-0.5">&#10003;</span>
                    <span className="text-[#1E1D1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/images/glp1-graphic.png" alt="GLP-1 weight loss program at Rooted Health Conway AR" className="rounded-2xl w-full object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Conditions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            Conditions This Program Supports
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'PCOS',
                body: 'Reduces insulin resistance, helps regulate appetite and hormonal balance. GLP-1 therapy is increasingly recognized as a key part of managing PCOS.',
              },
              {
                title: 'Prediabetes and Insulin Resistance',
                body: 'Improves blood sugar control and may prevent Type 2 diabetes progression. Early intervention with GLP-1 therapy can make a significant difference.',
              },
              {
                title: 'Metabolic Syndrome',
                body: 'Supports weight loss, reduces abdominal fat and chronic inflammation. Addresses the cluster of conditions that increase cardiovascular risk.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F6E56] mb-4">{c.title}</h3>
                <p className="text-[#1E1D1A] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Medications */}
      <section className="py-20 bg-[#1E1D1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center mb-12">
            About GLP-1 Medications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {[
              {
                name: 'Semaglutide',
                subname: '(Ozempic / Wegovy)',
                points: ['Weekly injection', '15% average weight loss', 'FDA approved'],
              },
              {
                name: 'Tirzepatide',
                subname: '(Mounjaro / Zepbound)',
                points: ['Weekly injection', '20% average weight loss', 'FDA approved'],
              },
            ].map((m) => (
              <div key={m.name} className="bg-white/10 rounded-2xl p-8">
                <h3 className="font-semibold text-2xl mb-1">{m.name}</h3>
                <p className="text-white/60 text-sm mb-4">{m.subname}</p>
                <ul className="space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#1D9E75] rounded-full"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/80 max-w-2xl mx-auto">
            LaDonna will recommend the right medication and dose based on your health profile, goals, and any prior GLP-1 experience.
          </p>
        </div>
      </section>

      {/* Section 4: Why Microdosing */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            Why Microdosing Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lower Cost', body: 'More affordable monthly investment, especially during maintenance phases.' },
              { title: 'Fewer Side Effects', body: 'Lower doses are better tolerated, reducing nausea and GI discomfort.' },
              { title: 'Sustainable Long-Term', body: 'Designed to be maintained indefinitely for metabolic health and weight stability.' },
              { title: 'Flexible Entry', body: 'Start low and titrate up only if needed. You are in control of your dosing journey.' },
            ].map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-[#E2DDD4]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#0F6E56] mb-3">{w.title}</h3>
                <p className="text-[#7A7870] text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            Membership Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1D9E75] text-white rounded-2xl p-10 text-center">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-3">Elite GLP-1</h3>
              <div className="text-5xl font-bold mb-2">$349<span className="text-2xl text-white/80">/mo</span></div>
              <p className="text-white/90 mb-6">Medication, labs, and visits all included</p>
              <ul className="text-left space-y-2 text-sm mb-8">
                {['GLP-1 medication included', 'Initial metabolic lab panel', 'Monthly monitoring visits', 'Dosing adjustments', 'Nutrition coaching'].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-white/80">&#10003;</span> {i}
                  </li>
                ))}
              </ul>
              <a href="/quiz" className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center">
                Take the Membership Quiz
              </a>
            </div>
            <div className="bg-[#F7F4EE] rounded-2xl p-10 text-center border border-[#E2DDD4]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1E1D1A] mb-3">Hormone Optimization</h3>
              <div className="text-5xl font-bold text-[#1D9E75] mb-2">$149-199<span className="text-2xl text-[#7A7870]">/mo</span></div>
              <p className="text-[#7A7870] mb-6">For patients who want hormones plus metabolic support</p>
              <ul className="text-left space-y-2 text-sm mb-8 text-[#1E1D1A]">
                {['Bioidentical hormone therapy', 'Thyroid management', 'Lab monitoring included', 'Add GLP-1 upgrade available', 'Direct access to LaDonna'].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#1D9E75]">&#10003;</span> {i}
                  </li>
                ))}
              </ul>
              <a href="/quiz" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center">
                Take the Membership Quiz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Schedule a consultation with LaDonna Walker NP to see if GLP-1 therapy is right for you.
          </p>
          <a href="https://rootedhealth.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
            Book Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
