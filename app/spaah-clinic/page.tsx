export const metadata = {
  title: 'Spaah Monthly Satellite Clinic Conway AR | Rooted Health Hormones & MedSpa',
  description: 'Rooted Health sees patients monthly at The Spa\'Ah in Conway, AR. Hormone consultations, GLP-1 check-ins, and injections in a relaxed spa setting. No insurance required.',
}

export default function SpaahClinicPage() {
  return (
    <main className="bg-[#F7F4EE] min-h-screen">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">Satellite Clinic</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl text-white mb-6">
            Monthly Clinic at The Spa&apos;Ah
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-10">
            Rooted Health brings hormone and metabolic care to The Spa&apos;Ah on Dave Ward Drive one day each month. Same trusted provider, relaxed setting, no insurance required.
          </p>
          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg"
          >
            Book a Spaah Clinic Appointment
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6">
              What to Expect
            </h2>
            <p className="text-[#7A7870] leading-relaxed mb-6">
              LaDonna Walker, NP travels to The Spa&apos;Ah one day per month to see Rooted Health patients in a beautiful, spa-inspired environment. You receive the same high-quality clinical care as our main Conway office in a more relaxed setting.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-8">
              Spaah clinic days are ideal for established Rooted Health members who want a convenient, local option for their follow-up visits, injections, and lab draws without making the trip to Hogan Lane.
            </p>
            <div className="space-y-4">
              {[
                'Hormone consultation & follow-up visits',
                'GLP-1 weight loss program check-ins',
                'Lab draws & results review',
                'Injection therapy (B12, NAD+, Lipotropic, and more)',
                'Membership enrollment consultations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1 text-lg">✓</span>
                  <span className="text-[#1E1D1A]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4">
                Location
              </h3>
              <p className="text-[#7A7870] leading-relaxed">
                <strong className="text-[#1E1D1A]">The Spa&apos;Ah</strong><br />
                2501 Dave Ward Drive<br />
                Conway, AR 72034
              </p>
              <a
                href="https://www.thespaah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D9E75] hover:underline text-sm mt-2 inline-block"
              >
                www.thespaah.com
              </a>
            </div>

            <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[#E2DDD4]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4">
                Scheduling
              </h3>
              <p className="text-[#7A7870] leading-relaxed mb-4">
                Spaah clinic dates are announced monthly. Book through our online scheduling portal and select the Spaah location when choosing your appointment.
              </p>
              <p className="text-[#7A7870] text-sm">
                Questions? Call us at{' '}
                <a href="tel:4798806148" className="text-[#1D9E75] hover:underline font-semibold">
                  (479) 880-6148
                </a>
              </p>
            </div>

            <div className="bg-[#E1F5EE] rounded-2xl p-8 border border-[#C5EBD9]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-2">
                Members Only
              </h3>
              <p className="text-[#7A7870] leading-relaxed text-sm">
                Spaah clinic days are available to active Rooted Health members. Not yet a member?{' '}
                <a href="/quiz" className="text-[#1D9E75] hover:underline font-semibold">Take the membership quiz</a>{' '}
                to find the right plan for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0F6E56] to-[#1D9E75] py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white mb-4">
            Ready to Book Your Spaah Clinic Visit?
          </h2>
          <p className="text-white/80 mb-8">
            Take our 2-minute quiz to find the right membership, then book your first appointment online.
          </p>
          <a
            href="/quiz"
            className="bg-white text-[#1D9E75] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#F7F4EE] transition-colors inline-block shadow-lg"
          >
            Take the Membership Quiz
          </a>
        </div>
      </section>
    </main>
  )
}
