import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Wellness Services
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Evidence-based treatments designed to optimize your health, restore balance, and help you feel your best at every stage of life.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                Hormone Therapy
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Bioidentical hormone replacement therapy to address symptoms of menopause, andropause, and hormonal imbalances. Restore energy, mood, libido, and vitality.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Comprehensive hormone testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Customized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Pellet therapy and topical options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Ongoing monitoring and adjustment</span>
                </li>
              </ul>
              <Link href="/quiz" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                GLP-1 Weight Loss
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Medically supervised GLP-1 therapy with semaglutide and tirzepatide. Achieve sustainable weight loss with expert guidance and comprehensive metabolic support.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Prescription medication included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Monthly provider consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Nutrition and lifestyle coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Body composition tracking</span>
                </li>
              </ul>
              <Link href="/quiz" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                MedSpa & Aesthetics
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Advanced aesthetic treatments to enhance your natural beauty. Professional-grade services for skin rejuvenation, facial contouring, and anti-aging.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Neurotoxin and dermal fillers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Medical-grade facials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Laser treatments and peels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Customized skincare regimens</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Book Consultation
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                Primary Care DPC
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Direct primary care with unlimited access to your provider. No insurance hassles, just affordable, personalized healthcare when you need it.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Same-day and next-day appointments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Virtual and in-person visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Text and email access to provider</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Wholesale lab pricing</span>
                </li>
              </ul>
              <Link href="/quiz" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Join Now
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                Thyroid & Metabolic
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Specialized care for thyroid disorders and metabolic dysfunction. Comprehensive testing and treatment to optimize your metabolism and energy levels.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Complete thyroid panel analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Metabolic rate assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Medication optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Nutritional and supplement guidance</span>
                </li>
              </ul>
              <Link href="/quiz" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                Peptide Therapy
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6 leading-relaxed">
                Cutting-edge peptide treatments for recovery, performance, anti-aging, and cellular repair. Harness the power of targeted biological signaling.
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Growth hormone optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Immune system support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Tissue repair and healing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D9E75] mr-2">•</span>
                  <span>Cognitive and performance enhancement</span>
                </li>
              </ul>
              <Link href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#0F6E56] mb-4">
              How It Works
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to optimal health starts with three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-8xl font-bold text-[#1D9E75] mb-6">
                01
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                Complete Your Assessment
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 leading-relaxed">
                Take our comprehensive health quiz to help us understand your symptoms, goals, and health history. This allows us to tailor your consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-8xl font-bold text-[#1D9E75] mb-6">
                02
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                Meet With LaDonna Walker NP
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 leading-relaxed">
                Schedule your initial consultation to review your health concerns, discuss treatment options, and order any necessary lab work to guide your care.
              </p>
            </div>

            <div className="text-center">
              <div className="font-[family-name:var(--font-cormorant)] text-8xl font-bold text-[#1D9E75] mb-6">
                03
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                Begin Your Treatment Plan
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 leading-relaxed">
                Receive your personalized treatment protocol and ongoing support. We monitor your progress and adjust your plan to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl mb-8 text-white/90">
            Take the first step toward feeling your best. Complete our health assessment or schedule a consultation with LaDonna Walker NP today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-white text-[#0F6E56] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Take Health Quiz
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}