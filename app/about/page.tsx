export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#1D9E75] to-[#0F6E56] text-[#F7F4EE] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            LaDonna Walker, NP
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Family Nurse Practitioner & Hormone Specialist
          </p>
          <p className="text-lg opacity-90">
            Rooted Health Hormones & MedSpa | Conway, AR
          </p>
        </div>
      </section>

      {/* About Bio Section */}
      <section className="w-full bg-[#F7F4EE] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F6E56] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Meet Your Provider
            </h2>
            <p className="text-lg text-[#1E1D1A] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              LaDonna Walker is a dedicated Family Nurse Practitioner with a passion for helping women reclaim their health and vitality. With years of clinical experience and specialized training in hormone optimization, LaDonna takes a root-cause approach to wellness—addressing the underlying factors that impact your hormones, energy, and quality of life.
            </p>
            <p className="text-lg text-[#1E1D1A] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              At Rooted Health, LaDonna believes that your healthcare should be accessible, transparent, and free from insurance barriers. She has built a cash-pay practice model that prioritizes your time, your results, and your peace of mind. Every patient receives personalized, comprehensive care designed specifically for their unique needs and health goals.
            </p>
            <p className="text-lg text-[#1E1D1A] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Whether you're navigating perimenopause, managing hormone imbalances, seeking preventive care, or looking to optimize your wellness, LaDonna combines evidence-based medicine with a holistic philosophy to support you on your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F6E56] mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Credentials & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1D9E75] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Certifications
              </h3>
              <ul className="space-y-2 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Family Nurse Practitioner (FNP-C)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Registered Nurse (RN)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Advanced Hormone Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Bioidentical Hormone Replacement Specialist</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D9E75] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Areas of Focus
              </h3>
              <ul className="space-y-2 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Menopause & Perimenopause Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Hormone Optimization & Balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Root-Cause Medicine & Prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] font-bold mr-3">✓</span>
                  <span>Women's Wellness & Anti-Aging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-[#F7F4EE] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F6E56] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Our Approach
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#1D9E75] pl-6">
              <h3 className="text-xl font-semibold text-[#0F6E56] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Root-Cause Medicine
              </h3>
              <p className="text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                We don't just treat symptoms. We investigate the underlying causes of your health concerns and develop sustainable solutions that address what's really going on.
              </p>
            </div>
            <div className="border-l-4 border-[#1D9E75] pl-6">
              <h3 className="text-xl font-semibold text-[#0F6E56] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Cash-Pay Model
              </h3>
              <p className="text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                No insurance barriers, no claim denials, no waiting. You get direct access to quality care with transparent pricing and your time fully respected.
              </p>
            </div>
            <div className="border-l-4 border-[#1D9E75] pl-6">
              <h3 className="text-xl font-semibold text-[#0F6E56] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Care
              </h3>
              <p className="text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Every patient is unique. We create individualized treatment plans that reflect your body, your goals, and your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F6E56] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Located in Conway, AR
          </h2>
          <div className="bg-[#F7F4EE] rounded-lg p-8">
            <p className="text-lg text-[#1E1D1A] mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Rooted Health Hormones & MedSpa is conveniently located in Conway, Arkansas, serving the central Arkansas community with compassionate, expert hormone and wellness care.
            </p>
            <p className="text-[#1E1D1A] font-semibold mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Ready to take the next step on your health journey?
            </p>
            <p className="text-[#1E1D1A]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Learn more about our services and schedule your consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#0F6E56] to-[#1D9E75] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F4EE] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Discover If Rooted Health Is Right for You
          </h2>
          <p className="text-lg text-[#F7F4EE] mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Take our quick assessment quiz to learn how we can support your hormone health and wellness goals.
          </p>
          <a
            href="/quiz"
            className="inline-block bg-[#F7F4EE] text-[#0F6E56] font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Start Your Quiz
          </a>
        </div>
      </section>
    </main>
  );
}