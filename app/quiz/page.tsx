import Link from 'next/link';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-[#0F6E56] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
          Find Your Perfect Membership
        </h1>
        <p className="text-xl text-[#1E1D1A] mb-8 font-sans leading-relaxed">
          At Rooted Health, we understand that every member's health journey is unique. Our membership quiz is designed to help match your symptoms, goals, and lifestyle to the membership tier that's right for you.
        </p>
        <p className="text-lg text-[#1E1D1A] mb-12 font-sans leading-relaxed">
          Whether you're seeking convenient virtual care, comprehensive hormone optimization, or our most advanced metabolic wellness program, we have a solution tailored to your needs.
        </p>
      </section>

      {/* Membership Tiers */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#0F6E56] mb-12 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Our Membership Tiers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Virtual DPC */}
            <div className="border-2 border-[#1D9E75] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#1D9E75] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Virtual DPC
              </h3>
              <p className="text-3xl font-bold text-[#0F6E56] mb-4">$99/mo</p>
              <p className="text-[#1E1D1A] mb-6 font-sans leading-relaxed">
                Perfect for those seeking straightforward, convenient virtual primary care with direct provider access and minimal wait times.
              </p>
              <ul className="space-y-2 text-sm text-[#1E1D1A] font-sans">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Unlimited virtual visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Direct provider messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Basic preventive care</span>
                </li>
              </ul>
            </div>

            {/* Hormone Optimization */}
            <div className="border-2 border-[#0F6E56] rounded-lg p-8 md:scale-105">
              <h3 className="text-2xl font-serif text-[#0F6E56] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Hormone Optimization
              </h3>
              <p className="text-3xl font-bold text-[#0F6E56] mb-4">$149–199/mo</p>
              <p className="text-[#1E1D1A] mb-6 font-sans leading-relaxed">
                Designed for those experiencing hormonal imbalances, mood changes, or energy challenges seeking comprehensive wellness support.
              </p>
              <ul className="space-y-2 text-sm text-[#1E1D1A] font-sans">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Comprehensive hormone testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Personalized optimization plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Nutrition & lifestyle coaching</span>
                </li>
              </ul>
            </div>

            {/* Elite GLP-1 */}
            <div className="border-2 border-[#1D9E75] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#1D9E75] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Elite GLP-1
              </h3>
              <p className="text-3xl font-bold text-[#0F6E56] mb-4">$349/mo</p>
              <p className="text-[#1E1D1A] mb-6 font-sans leading-relaxed">
                Our most comprehensive program for those pursuing advanced metabolic wellness, weight optimization, and complete health transformation.
              </p>
              <ul className="space-y-2 text-sm text-[#1E1D1A] font-sans">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>GLP-1 medication access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Advanced metabolic testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">✓</span>
                  <span>Premium concierge support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How the Quiz Works */}
      <section className="px-6 py-16 bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-[#0F6E56] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How the Quiz Works
          </h2>
          <div className="space-y-6 text-[#1E1D1A] font-sans">
            <p className="text-lg leading-relaxed">
              Our membership quiz takes just a few minutes and asks about your health goals, current symptoms, lifestyle, and wellness priorities. Based on your responses, we match you with the membership tier that offers the right level of support and resources for your unique needs.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're managing hormonal shifts, seeking preventive care, or pursuing advanced metabolic optimization with GLP-1 support, the quiz ensures you start with a membership that aligns perfectly with your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-[#1E1D1A] mb-8 font-sans">
            Ready to find your perfect membership? Schedule a free consultation with LaDonna Walker, NP, to discuss your health goals and get personalized recommendations.
          </p>
          <a
            href="https://rootedhealthmember.janeapp.com"
            className="inline-block px-8 py-4 bg-[#1D9E75] text-white font-sans font-bold rounded-lg hover:bg-[#0F6E56] transition-colors text-lg"
          >
            Book a Free Consult
          </a>
          <p className="text-sm text-[#1E1D1A] mt-6 font-sans">
            Located in Conway, AR | Provider: LaDonna Walker, NP
          </p>
        </div>
      </section>
    </main>
  );
}