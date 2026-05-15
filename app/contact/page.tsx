import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Rooted Health Hormones & MedSpa',
  description: 'Schedule your consultation with LaDonna Walker NP in Conway, AR. Hormone optimization, GLP-1 weight loss, and medical spa services.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Get Started Today
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your health? Schedule your consultation with LaDonna Walker NP at Rooted Health in Conway, Arkansas.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8 lg:p-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#0F6E56] mb-6">
                Send Us a Message
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg text-gray-700 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form method="POST" action="mailto:bekinditmatters@icloud.com" className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-[family-name:var(--font-dm-sans)] block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="font-[family-name:var(--font-dm-sans)] w-full px-4 py-3 border border-[#E2DDD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-[family-name:var(--font-dm-sans)] block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="font-[family-name:var(--font-dm-sans)] w-full px-4 py-3 border border-[#E2DDD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-[family-name:var(--font-dm-sans)] block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="font-[family-name:var(--font-dm-sans)] w-full px-4 py-3 border border-[#E2DDD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="font-[family-name:var(--font-dm-sans)] block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="font-[family-name:var(--font-dm-sans)] w-full px-4 py-3 border border-[#E2DDD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="virtual-dpc">Virtual DPC - $99/month</option>
                    <option value="hormone-optimization">Hormone Optimization - $149-199/month</option>
                    <option value="elite-glp1">Elite GLP-1 Program - $349/month</option>
                    <option value="medspa">MedSpa Services</option>
                    <option value="primary-care">Primary Care DPC</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-[family-name:var(--font-dm-sans)] block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="font-[family-name:var(--font-dm-sans)] w-full px-4 py-3 border border-[#E2DDD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="font-[family-name:var(--font-dm-sans)] w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8 lg:p-12">
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#0F6E56] mb-6">
                  Book Directly
                </h2>
                <p className="font-[family-name:var(--font-dm-sans)] text-lg text-gray-700 mb-8">
                  Schedule your appointment instantly through our online booking system powered by Jane App.
                </p>
                <a
                  href="https://rootedhealthmember.com"
                  className="font-[family-name:var(--font-dm-sans)] bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-center w-full"
                >
                  Book Appointment Online
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8 lg:p-12">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-6">
                  Contact Information
                </h2>
                <div className="font-[family-name:var(--font-dm-sans)] space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-[#0F6E56] mb-1">Provider</h3>
                    <p>LaDonna Walker, NP</p>
                    <p className="text-sm text-gray-600">Hormone & Metabolic Medicine Specialist</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[#0F6E56] mb-1">Location</h3>
                    <p>Conway, Arkansas</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[#0F6E56] mb-1">Website</h3>
                    <a href="https://rootedhealthmember.com" className="text-[#1D9E75] hover:text-[#0F6E56] transition-colors">
                      rootedhealthmember.com
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD4]">
                    <h3 className="font-semibold text-[#0F6E56] mb-2">Office Hours</h3>
                    <p className="text-sm">Monday - Friday: By Appointment</p>
                    <p className="text-sm">Virtual Consultations Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                  Not Sure Where to Start?
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 mb-6">
                  Take our personalized health quiz to discover which services are right for you.
                </p>
                <a
                  href="/quiz"
                  className="font-[family-name:var(--font-dm-sans)] bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-center w-full"
                >
                  Take Health Quiz
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-[#E2DDD4] p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#0F6E56] mb-4">
                Privacy & HIPAA Notice
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-gray-600 leading-relaxed">
                Rooted Health Hormones & MedSpa is committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations. Please note that communications via email and online forms are not considered secure methods for transmitting protected health information. For sensitive medical information, please contact our office directly or use our secure patient portal. By submitting this form, you acknowledge that you understand the limitations of electronic communication and consent to receiving general, non-confidential information via email. Any personal health information shared will be handled in strict accordance with federal and state privacy laws.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}