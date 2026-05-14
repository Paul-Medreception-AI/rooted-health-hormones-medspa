import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-[#F7F4EE]">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Hormone & Metabolic Medicine Without Insurance Barriers
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
            Direct primary care membership model with cash-pay options. No insurance hassles, no surprise bills. Personalized hormone optimization and metabolic medicine in Conway, Arkansas.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-[#1D9E75] px-8 sm:px-10 py-4 rounded-lg font-semibold hover:bg-[#F7F4EE] transition-colors duration-300"
          >
            Take the Membership Quiz
          </Link>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-5xl text-center mb-4 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Membership Tiers
          </h2>
          <p className="text-center text-[#1E1D1A]/70 mb-16 text-lg">
            Choose the plan that fits your health goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Virtual DPC */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#1D9E75] p-8">
                <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
                  Virtual DPC
                </h3>
                <p className="text-white/90 text-sm mb-4">Primary Care Direct</p>
                <p className="text-4xl font-bold text-white">$99<span className="text-lg font-normal">/mo</span></p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-[#1E1D1A]">
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Unlimited primary care visits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Secure messaging & consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Lab ordering & interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Preventative care planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hormone Optimization */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 md:scale-105">
              <div className="bg-[#0F6E56] p-8">
                <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
                  Hormone Optimization
                </h3>
                <p className="text-white/90 text-sm mb-4">Comprehensive Wellness</p>
                <p className="text-4xl font-bold text-white">$149-199<span className="text-lg font-normal">/mo</span></p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-[#1E1D1A]">
                  <li className="flex items-start">
                    <span className="text-[#0F6E56] mr-3 mt-1">✓</span>
                    <span>Everything in Virtual DPC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F6E56] mr-3 mt-1">✓</span>
                    <span>Bioidentical hormone therapy (BHRT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F6E56] mr-3 mt-1">✓</span>
                    <span>Testosterone optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F6E56] mr-3 mt-1">✓</span>
                    <span>Thyroid management & monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Elite GLP-1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#1D9E75] p-8">
                <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
                  Elite GLP-1
                </h3>
                <p className="text-white/90 text-sm mb-4">Full Metabolic Program</p>
                <p className="text-4xl font-bold text-white">$349<span className="text-lg font-normal">/mo</span></p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-[#1E1D1A]">
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Everything in Hormone Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>GLP-1 injections & titration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Comprehensive metabolic assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D9E75] mr-3 mt-1">✓</span>
                    <span>Nutrition & lifestyle coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-5xl text-center mb-6 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            GLP-1 Metabolic Medicine
          </h2>
          <p className="text-lg text-[#1E1D1A]/70 text-center mb-8 leading-relaxed">
            Bioidentical GLP-1 therapy designed for sustainable metabolic health and weight optimization. Our program combines pharmaceutical support with personalized nutrition and lifestyle coaching to help you achieve your health goals.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#1D9E75] text-white px-8 sm:px-10 py-4 rounded-lg font-semibold hover:bg-[#0F6E56] transition-colors duration-300"
            >
              Learn More About GLP-1
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-5xl text-center mb-12 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Meet Your Provider
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <h3 className="text-3xl font-semibold text-[#1D9E75] mb-2" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
              LaDonna Walker, NP
            </h3>
            <p className="text-[#0F6E56] font-semibold mb-6">Nurse Practitioner, Conway, Arkansas</p>
            <div className="space-y-4 text-[#1E1D1A] leading-relaxed">
              <p>
                Board-certified Nurse Practitioner with over 10 years of clinical experience in hormone optimization, metabolic medicine, and direct primary care. LaDonna is passionate about helping patients achieve hormonal balance and metabolic wellness through personalized, evidence-based treatment plans.
              </p>
              <p>
                Specializing in bioidentical hormone replacement therapy, thyroid management, testosterone optimization, and GLP-1 therapy, LaDonna takes a whole-person approach to health. She believes in transparent, straightforward healthcare without the barriers of traditional insurance systems.
              </p>
              <p>
                Serving the Conway community with compassion and expertise, LaDonna is committed to your long-term health outcomes and metabolic vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-5xl text-center mb-12 text-[#1E1D1A]" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Member Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-[#F7F4EE] rounded-xl p-8 border-l-4 border-[#1D9E75]">
              <p className="text-[#1E1D1A] mb-4 text-lg leading-relaxed">
                "After years of feeling exhausted and dealing with brain fog, I finally found answers with LaDonna. The hormone optimization program changed my life. I feel like myself again."
              </p>
              <p className="text-[#0F6E56] font-semibold">— Sarah M., Conway</p>
            </blockquote>
            <blockquote className="bg-[#F7F4EE] rounded-xl p-8 border-l-4 border-[#1D9E75]">
              <p className="text-[#1E1D1A] mb-4 text-lg leading-relaxed">
                "No insurance headaches, no waiting months for appointments. The direct care model means I get real answers and real results. Highly recommend Rooted Health."
              </p>
              <p className="text-[#0F6E56] font-semibold">— James T., Conway</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1D9E75] to-[#0F6E56]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl text-white mb-6" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Ready to Reclaim Your Health?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Take our membership quiz to find the perfect plan for your health goals.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-[#1D9E75] px-8 sm:px-10 py-4 rounded-lg font-semibold hover:bg-[#F7F4EE] transition-colors duration-300"
          >
            Take the Membership Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}