'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#F7F4EE]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="text-5xl sm:text-6xl font-bold text-[#0F6E56] mb-6"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Hormone & Metabolic Medicine Without Insurance Barriers
        </h1>
        <p
          className="text-xl text-[#1E1D1A] mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Direct-pay memberships starting at $99/month. Access hormone optimization, GLP-1 weight loss, and comprehensive primary care on your terms.
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Take the Membership Quiz
        </Link>
      </section>

      {/* Membership Tiers Section */}
      <section
        id="memberships"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h2
          className="text-4xl font-bold text-center text-[#0F6E56] mb-12"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Membership Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Virtual DPC */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1D9E75]">
            <h3
              className="text-2xl font-bold text-[#1D9E75] mb-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Virtual DPC
            </h3>
            <p
              className="text-4xl font-bold text-[#1E1D1A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              $99<span className="text-lg">/mo</span>
            </p>
            <ul
              className="space-y-3 mb-8 text-[#1E1D1A]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Unlimited virtual visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Primary care management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Prescription management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Chronic disease support</span>
              </li>
            </ul>
            <button
              className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Learn More
            </button>
          </div>

          {/* Hormone Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1D9E75] md:ring-2 md:ring-[#1D9E75]">
            <h3
              className="text-2xl font-bold text-[#1D9E75] mb-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Hormone Optimization
            </h3>
            <p
              className="text-4xl font-bold text-[#1E1D1A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              $149–199<span className="text-lg">/mo</span>
            </p>
            <ul
              className="space-y-3 mb-8 text-[#1E1D1A]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Everything in Virtual DPC</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Comprehensive hormone labs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>HRT optimization & monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Metabolic assessment</span>
              </li>
            </ul>
            <button
              className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Learn More
            </button>
          </div>

          {/* Elite GLP-1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1D9E75]">
            <h3
              className="text-2xl font-bold text-[#1D9E75] mb-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Elite GLP-1
            </h3>
            <p
              className="text-4xl font-bold text-[#1E1D1A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              $349<span className="text-lg">/mo</span>
            </p>
            <ul
              className="space-y-3 mb-8 text-[#1E1D1A]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Everything in Hormone Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>GLP-1 agonist therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Weight loss optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1D9E75] mr-3 font-bold">✓</span>
                <span>Medication cost included*</span>
              </li>
            </ul>
            <button
              className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* GLP-1 Program Highlight */}
      <section
        id="glp1"
        className="bg-[#0F6E56] text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 rounded-lg my-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Medically-Supervised GLP-1 Weight Loss
            </h2>
            <p
              className="text-lg mb-6"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Lose weight effectively with GLP-1 receptor agonists like semaglutide and tirzepatide. Our providers customize therapy based on your metabolic profile, ensuring sustainable results.
            </p>
            <ul
              className="space-y-3"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Personalized dosing protocols</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Monthly check-ins & lab monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Nutrition & lifestyle coaching</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Side effect management</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <p
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <strong>Average Results:</strong>
            </p>
            <ul
              className="space-y-2"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <li>• 10–15% body weight reduction in 3 months</li>
              <li>• Improved metabolic markers</li>
              <li>• Better blood sugar control</li>
              <li>• Increased energy & wellness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Provider Trust Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className="text-4xl font-bold text-center text-[#0F6E56] mb-12"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Meet Your Provider
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
          <h3
            className="text-3xl font-bold text-[#1D9E75] mb-2"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            LaDonna Walker, NP
          </h3>
          <p
            className="text-lg text-[#0F6E56] mb-6 font-semibold"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Nurse Practitioner, Hormone & Metabolic Medicine Specialist
          </p>
          <p
            className="text-[#1E1D1A] mb-4 leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            LaDonna brings over 15 years of clinical experience to Rooted Health, specializing in bioidentical hormone replacement therapy, metabolic medicine, and sustainable weight loss. Her evidence-based approach focuses on treating the root cause of hormonal imbalance rather than just symptoms.
          </p>
          <p
            className="text-[#1E1D1A] mb-4 leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Located in Conway, AR, she is committed to providing personalized, compassionate care that honors your unique health goals and values.
          </p>
          <div className="mt-6 pt-6 border-t border-[#F7F4EE]">
            <p
              className="text-sm text-[#0F6E56] font-semibold"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Board-certified • 15+ years clinical experience • Bioidentical HRT specialist
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className="text-4xl font-bold text-center text-[#0F6E56] mb-12"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Patient Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#1D9E75]">
            <p
              className="text-[#1E1D1A] mb-6 italic"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              "I felt lost after my hysterectomy—hot flashes, brain fog, zero energy. LaDonna listened and designed a hormone plan that finally made sense. Within weeks, I felt like myself again. No insurance hassles, just real care."
            </p>
            <p
              className="font-bold text-[#0F6E56]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              — Sarah M., Conway
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#1D9E75]">
            <p
              className="text-[#1E1D1A] mb-6 italic"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              "I tried every diet. The GLP-1 program with Rooted Health was different—medically supervised, no shame, real results. I lost 35 pounds in 6 months and actually kept it off. Worth every penny."
            </p>
            <p
              className="font-bold text-[#0F6E56]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              — Marcus T., Conway
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#1D9E75]">
            <p
              className="text-[#1E1D1A] mb-6 italic"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              "My insurance kept denying my HRT. Rooted Health made it simple and affordable. Direct-pay means I control my care, not some insurance company. Best decision for my health."
            </p>
            <p
              className="font-bold text-[#0F6E56]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              — Jennifer L., Conway
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="bg-[#1D9E75] text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 rounded-lg my-20">
        <div className="text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to Take Control of Your Health?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Schedule a consultation with LaDonna or start with our membership quiz to find the right plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-block bg-white text-[#1D9E75] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Take the Quiz
            </Link>
            <a
              href="tel:+15015551234"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1D9E75] px-8 py-4 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Call (501) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1D1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3
                className="text-xl font-bold text-[#1D9E75] mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Rooted Health
              </h3>
              <p
                className="text-gray-300"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Hormone & Metabolic Medicine<br />
                Conway, AR
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Quick Links
              </h3>
              <ul
                className="space-y-2 text-gray-300"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                <li><a href="#memberships" className="hover:text-[#1D9E75]">Memberships</a></li>
                <li><a href="#glp1" className="hover:text-[#1D9E75]">GLP-1 Program</a></li>
                <li><a href="#about" className="hover:text-[#1D9E75]">About</a></li>
              </ul>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Contact
              </h3>
              <p
                className="text-gray-300 text-sm"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                <a href="tel:+15015551234" className="hover:text-[#1D9E75]">Phone: (501) 555-1234</a><br />
                <a href="mailto:info@rootedhealthmember.com" className="hover:text-[#1D9E75]">Email: info@rootedhealthmember.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p
              className="text-gray-400 text-center text-sm mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <strong>HIPAA Privacy Notice:</strong> This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
            </p>
            <p
              className="text-gray-500 text-center text-xs"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              © {new Date().getFullYear()} Rooted Health. All rights reserved. This content is for educational purposes only and not medical advice. Consult with a healthcare provider for your specific condition.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}