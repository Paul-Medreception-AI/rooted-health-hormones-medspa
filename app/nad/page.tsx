import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NAD+ Infusion Therapy Conway AR | $295/session | Rooted Health',
  description: 'NAD+ IV infusions at $295/session in Conway, AR, well below the $450-500 market rate. Administered by licensed NPs. Book online.',
}

const testimonials = [
  {
    name: 'Lauren, 42',
    quote: 'I felt a deep sense of calm come over me about halfway through my session. By the end, I felt genuinely lighter.',
  },
  {
    name: 'Jared, 36',
    quote: "It's a weird but kind of amazing feeling, like your cells are waking up.",
  },
  {
    name: 'Rachel, 38',
    quote: 'The next day, I had energy I had not felt in years.',
  },
  {
    name: 'Angela, 33',
    quote: 'After a few sessions, my anxiety was lower, my focus was sharp.',
  },
  {
    name: 'Devon, 40',
    quote: "It's like my system got a reset. I've been clearer, more productive.",
  },
]

export default function NADPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-4">
            NAD+ Infusion Therapy
          </h1>
          <p className="text-xl text-white/90 mb-2">Conway, AR</p>
          <div className="text-4xl font-bold text-white mt-4 mb-6">$295<span className="text-2xl text-white/80">/session</span></div>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Well below the $450-500 market rate. Administered by licensed Nurse Practitioners using pharmaceutical-grade NAD+.
          </p>
          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Book Your NAD+ Session
          </a>
        </div>
      </section>

      {/* What is NAD+ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6 text-center">
            What is NAD+?
          </h2>
          <p className="text-[#1E1D1A] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell in your body. It supports energy production, DNA repair, brain function, and metabolic balance. NAD+ levels naturally decline with age and stress, contributing to fatigue, brain fog, and slower recovery. IV infusion therapy replenishes NAD+ directly into the bloodstream for maximum absorption.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            Benefits of NAD+ Therapy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Increased Energy', body: 'NAD+ is essential to mitochondrial function. Restoring levels supports sustained energy and stamina throughout the day.' },
              { title: 'Mental Clarity and Focus', body: 'Improved neuronal function leads to sharper focus, better memory retention, and reduced brain fog.' },
              { title: 'Mood and Anxiety', body: 'Many patients report reduced anxiety and a lift in overall mood within sessions or the days following infusion.' },
              { title: 'Faster Recovery', body: 'Supports recovery from physical stress, intense workouts, illness, and general fatigue faster than rest alone.' },
              { title: 'Cellular Repair and Aging', body: 'NAD+ activates sirtuins, proteins involved in DNA repair and healthy aging at the cellular level.' },
              { title: 'Detoxification and Reset', body: 'Patients describe infusions as a full-system reset, particularly effective for burnout and chronic fatigue.' },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-[#E2DDD4]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#0F6E56] mb-3">{b.title}</h3>
                <p className="text-[#7A7870] text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rooted Health */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            Why Choose Rooted Health for NAD+
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Licensed Nurse Practitioners', body: 'All infusions are administered by licensed NPs with clinical oversight from LaDonna Walker.' },
              { title: 'Pharmaceutical-Grade NAD+', body: 'We only use pharmaceutical-grade 500mg NAD+, sourced and handled to maintain potency and purity.' },
              { title: 'Personalized Plans', body: 'Infusion protocols are based on your health history, goals, and how your body responds to treatment.' },
              { title: 'Competitive Pricing', body: 'At $295 per session, we are significantly below the $450-500 market rate without compromising quality.' },
              { title: 'Calm Clinical Setting', body: 'Infusions take place in a comfortable, calm clinical environment at our Conway, AR office.' },
              { title: 'Integrated Care', body: 'NAD+ can be combined with hormone therapy, GLP-1, or wellness injections as part of a comprehensive plan.' },
            ].map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="text-[#1D9E75] font-bold mt-1 text-xl">&#10003;</span>
                <div>
                  <h3 className="font-semibold text-[#1E1D1A] mb-1">{r.title}</h3>
                  <p className="text-[#7A7870] text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IV vs Injections */}
      <section className="py-20 bg-[#1E1D1A] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-center mb-12">
            IV Infusion vs. Weekly Injections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-8 border border-[#1D9E75]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-2">IV Infusion</h3>
              <p className="text-[#1D9E75] font-bold text-xl mb-4">$295 / session</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Deeper systemic effect</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> 1-3 hours per session</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> 500mg pharmaceutical-grade NAD+</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Ideal for intensive reset or recovery</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Monitored by licensed NP throughout</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-2">Weekly Injections</h3>
              <p className="text-white/60 font-semibold mb-4">Part of wellness injection program</p>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Ongoing maintenance and support</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Quick subcutaneous injection</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Lower dose, more frequent delivery</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Can be combined with B12, Vitamin D</li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75]">&#10003;</span> Ideal between IV sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            What Patients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-[#E2DDD4]">
                <p className="text-[#1E1D1A] text-lg italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[#1D9E75] font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold mb-4">
            Book Your NAD+ Session
          </h2>
          <p className="text-xl text-white/90 mb-4">$295 per 500mg session in Conway, AR</p>
          <p className="text-white/70 mb-10">No insurance required. Administered by licensed Nurse Practitioners.</p>
          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Book Your NAD+ Session
          </a>
        </div>
      </section>
    </main>
  )
}
