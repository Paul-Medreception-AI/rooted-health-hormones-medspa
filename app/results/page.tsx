import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Results & Testimonials | Rooted Health Conway AR',
  description: 'Real patient results from hormone therapy, GLP-1 weight loss, NAD+ infusions, and MedSpa treatments at Rooted Health in Conway, AR.',
}

const nadTestimonials = [
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

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Real Results. Rooted in Care.
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Conway, AR
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1E1D1A] text-lg leading-relaxed">
            Welcome to our Before and After Gallery, where real people share real results through our integrative, medically guided approach to wellness and beauty.
          </p>
        </div>
      </section>

      {/* Featured Outcomes */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            What Our Patients Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Weight and Body Composition',
                body: 'Reduced weight and improved body composition through medically supervised GLP-1 therapy and personalized metabolic care.',
              },
              {
                title: 'Skin and Contour',
                body: 'Enhanced skin tone and tightened contours with MedSpa treatments including SKINVIVE, Jalupro, and medical-grade facials.',
              },
              {
                title: 'Energy and Confidence',
                body: 'Renewed energy and self-confidence from hormone optimization and NAD+ infusion therapy.',
              },
              {
                title: 'Metabolic Markers',
                body: 'Improved metabolic markers for PCOS and insulin resistance through our integrative GLP-1 and hormone programs.',
              },
            ].map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-6 border border-[#E2DDD4]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#0F6E56] mb-3">{o.title}</h3>
                <p className="text-[#7A7870] text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAD+ Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-4">
            NAD+ Infusion Patient Experiences
          </h2>
          <p className="text-[#7A7870] text-center mb-12 max-w-2xl mx-auto">
            What patients say after their first NAD+ IV infusion session at Rooted Health.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nadTestimonials.map((t) => (
              <div key={t.name} className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4]">
                <p className="text-[#1E1D1A] text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[#1D9E75] font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKINVIVE Testimonial */}
      <section className="py-20 bg-[#E1F5EE]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-12">
            SKINVIVE Results
          </h2>
          <div className="bg-white rounded-2xl p-10 border border-[#C5EBD9] flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-[#1E1D1A] text-xl leading-relaxed italic mb-6">
                &ldquo;My skin felt softer and looked brighter, a natural glow that lasted for months.&rdquo;
              </p>
              <p className="text-[#1D9E75] font-semibold">Sarah M., Conway AR</p>
              <p className="text-[#7A7870] text-sm mt-1">SKINVIVE by Juvederm patient</p>
            </div>
            <div className="md:w-64">
              <img
                src="/images/skinvive.jpg"
                alt="SKINVIVE by Juvederm results at Rooted Health MedSpa Conway AR"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] text-center mb-4">
            Before and After Gallery
          </h2>
          <p className="text-[#7A7870] text-center mb-12">
            Patient photos shared with consent. Individual results may vary.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: '/images/blog-botox-dysport.webp', label: 'Botox and Dysport' },
              { img: '/images/blog-hormones.webp', label: 'Hormone Therapy' },
              { img: '/images/blog-insulin.webp', label: 'Metabolic Health' },
            ].map((g) => (
              <div key={g.label} className="rounded-2xl overflow-hidden border border-[#E2DDD4] bg-white">
                <img src={g.img} alt={`${g.label} results at Rooted Health Conway AR`} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <p className="text-[#1E1D1A] font-medium">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#7A7870] text-sm text-center leading-relaxed">
            All photos shared with patient consent. Individual results may vary. Services provided by licensed medical professionals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold mb-6">
            Start Your Journey
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Ready to see what is possible? Take our quiz or book a consultation with LaDonna Walker NP in Conway, AR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quiz" className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Take the Membership Quiz
            </a>
            <a href="https://rootedhealth.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Book Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
