export const metadata = {
  title: 'Cabot Satellite Clinic | Rooted Health Hormones & MedSpa',
  description: 'Rooted Health is coming to Cabot, AR. Hormone therapy, GLP-1 weight loss, and metabolic medicine without insurance barriers. Join the waitlist.',
}

export default function CabotClinicPage() {
  return (
    <main className="bg-[#F7F4EE] min-h-screen">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">Coming Soon</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl text-white mb-6">
            Cabot Satellite Clinic
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-10">
            Rooted Health is expanding to Cabot, AR. Get the same hormone optimization and metabolic medicine care, closer to home. Join the waitlist to be the first to know when we open.
          </p>
          <a
            href="mailto:rootedhealthormones@gmail.com?subject=Cabot Clinic Waitlist"
            className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6 text-center">
            What We&apos;ll Offer in Cabot
          </h2>
          <p className="text-[#7A7870] text-center mb-14 max-w-2xl mx-auto">
            Our Cabot satellite clinic will bring the full Rooted Health experience to the greater Cabot area, including the same cash-pay memberships and no insurance requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Hormone Optimization',
                desc: 'Bioidentical hormone replacement therapy, thyroid management, and comprehensive hormone testing for men and women.',
              },
              {
                title: 'GLP-1 / Weight Loss',
                desc: 'Medically supervised semaglutide and tirzepatide programs with metabolic monitoring and nutrition coaching.',
              },
              {
                title: 'Exclusive Injections',
                desc: 'NAD+, B12, Lipotropic, Vitamin D, and Immunity injections — administered by licensed providers.',
              },
              {
                title: 'Primary Care DPC',
                desc: 'Direct Primary Care memberships for same-day access, unlimited visits, and wholesale medications.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-3">{item.title}</h3>
                <p className="text-[#7A7870] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
            Can&apos;t Wait? Visit Us in Conway
          </h2>
          <p className="text-[#7A7870] leading-relaxed mb-8">
            Our main office at 1120 Hogan Lane, Suite 2B, Conway, AR 72032 is open now. We also see patients monthly at The Spa&apos;Ah on Dave Ward Drive. Virtual appointments are available for new patient consultations across Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Book in Conway
            </a>
            <a
              href="/quiz"
              className="border-2 border-[#1D9E75] text-[#1D9E75] hover:bg-[#1D9E75] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Take the Membership Quiz
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#1E1D1A] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/70 mb-6">
            Email us to be added to the Cabot clinic waitlist. We&apos;ll notify you as soon as dates and booking open.
          </p>
          <a
            href="mailto:rootedhealthormones@gmail.com?subject=Cabot Clinic Waitlist"
            className="text-[#1D9E75] hover:text-white font-semibold transition-colors text-lg"
          >
            rootedhealthormones@gmail.com
          </a>
          <p className="text-white/50 text-sm mt-4">Or call (479) 880-6148</p>
        </div>
      </section>
    </main>
  )
}
