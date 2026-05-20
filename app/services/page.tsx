import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Hormone Therapy, GLP-1, MedSpa Conway AR | Rooted Health',
  description: 'Hormone therapy, GLP-1 weight loss, NAD+ infusions, Botox, facials, and primary care DPC in Conway, AR. Cash-pay, no insurance required.',
}

const services = [
  {
    title: 'Hormone Therapy',
    desc: 'Bioidentical hormone replacement therapy for men and women. Restore balance and address root causes of fatigue, mood swings, low libido, weight gain, and more.',
    points: [
      'BHRT, testosterone, progesterone, DHEA, DIM, anastrozole',
      'Hot flash relief and mood stabilization',
      'Improved libido and sexual function',
      'Better sleep, skin aging, and muscle function',
      'Cardiovascular and metabolic support',
    ],
    cta: { label: 'Take the Membership Quiz', href: '/quiz', external: false },
  },
  {
    title: 'GLP-1 and Medical Weight Loss',
    desc: 'Medically supervised Semaglutide and Tirzepatide programs. Microdose program available for maintenance, sensitivity, and metabolic conditions.',
    points: [
      'Semaglutide and Tirzepatide options',
      'Microdose program for PCOS, prediabetes, metabolic syndrome',
      '15-20% average body weight loss',
      'Medication, labs, and visits included',
      'No insurance required, no prior auth delays',
    ],
    cta: { label: 'Learn More', href: '/glp-1', external: false },
  },
  {
    title: 'NAD+ IV Infusion',
    desc: 'Pharmaceutical-grade NAD+ infusions at $295 per session, well below the $450-500 market rate. Administered by licensed Nurse Practitioners.',
    points: [
      '$295 per 500mg session (vs $450-500 market rate)',
      'Increased energy and stamina',
      'Improved focus, memory, and mental clarity',
      'Better mood and reduced anxiety',
      'Cellular repair and healthy aging support',
    ],
    cta: { label: 'Learn More About NAD+', href: '/nad', external: false },
  },
  {
    title: 'Wellness Injections',
    desc: 'Targeted injectable therapies to support energy, immunity, and metabolic function.',
    points: [
      'NAD+ injections (maintenance program)',
      'Immunity: Vitamin C, Zinc, and Glutathione',
      'Vitamin D injection',
      'Lipotropic with L-Carnitine',
      'B12 Methylcobalamin',
    ],
    cta: { label: 'Book Now', href: 'https://rootedhealth.janeapp.com/', external: true },
  },
  {
    title: 'MedSpa and Aesthetics',
    desc: 'Medical-grade aesthetic treatments for skin rejuvenation, anti-aging, and body contouring. Full menu with transparent pricing.',
    points: [
      'Botox and Dysport neuromodulators',
      'Dermal fillers and SKINVIVE by Juvederm',
      'Jalupro and KYBELLA fat dissolving',
      'Facial menu starting at $55',
      'Laser hair removal and chemical peels',
    ],
    cta: { label: 'See Full MedSpa Menu', href: '/medspa', external: false },
  },
  {
    title: 'Fitness and Nutrition',
    desc: 'Chelsea Lary, Registered Dietitian and Certified Personal Trainer, brings 10+ years of experience with a realistic, sustainable approach.',
    points: [
      'Nutrition consultation',
      'Fitness consultation',
      'Combined nutrition and fitness plans',
      'Integrates with your hormone or GLP-1 care',
      'Keeping it realistic for your life and schedule',
    ],
    cta: { label: 'Meet Chelsea', href: '/about', external: false },
  },
  {
    title: 'Home Lab Testing',
    desc: 'At-home genetic testing kits for convenience and privacy. Results are delivered through Rupa Health and reviewed by LaDonna.',
    points: [
      'At-home cheek swab collection',
      'Genetic and metabolic panels',
      'Results via Rupa Health portal',
      'Clinical interpretation included',
      'No lab visit required',
    ],
    cta: { label: 'Book Now', href: 'https://rootedhealth.janeapp.com/', external: true },
  },
  {
    title: 'Primary Care DPC',
    desc: 'Virtual direct primary care membership with unlimited visits, same-day access, and wholesale medication pricing. No insurance required.',
    points: [
      'Unlimited virtual visits',
      'Same-day and next-day access',
      'Wholesale medication pricing',
      'Direct messaging to LaDonna',
      'Preventive care and chronic condition management',
    ],
    cta: { label: 'Take the Membership Quiz', href: '/quiz', external: false },
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Hormone therapy, GLP-1 weight loss, NAD+ infusions, MedSpa treatments, and primary care DPC in Conway, AR. Cash-pay, no insurance required.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                  {s.title}
                </h2>
                <p className="text-[#7A7870] mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-[#1D9E75] mt-0.5">&#10003;</span>
                      <span className="text-[#1E1D1A] text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
                {s.cta.external ? (
                  <a
                    href={s.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-center"
                  >
                    {s.cta.label}
                  </a>
                ) : (
                  <Link
                    href={s.cta.href}
                    className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-center"
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Take our quick quiz to find the membership and services that fit your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Take the Membership Quiz
            </Link>
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
