import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Rooted Health Hormones & MedSpa',
  description: 'Get in touch with Rooted Health Hormones & MedSpa in Conway, AR. Contact LaDonna Walker, NP for hormone therapy, GLP-1, MedSpa, and primary care services.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-[#1E1D1A]/80">
            Have questions about our services? We'd love to hear from you. Reach out to us and let's start your wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-light tracking-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Send us a Message
            </h2>

            <form method="POST" action="https://formspree.io/f/mzzydoby" className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1E1D1A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-[#1E1D1A]/20 rounded-md bg-[#F7F4EE] text-[#1E1D1A] placeholder-[#1E1D1A]/50 focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1E1D1A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[#1E1D1A]/20 rounded-md bg-[#F7F4EE] text-[#1E1D1A] placeholder-[#1E1D1A]/50 focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1E1D1A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-[#1E1D1A]/20 rounded-md bg-[#F7F4EE] text-[#1E1D1A] placeholder-[#1E1D1A]/50 focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Service Interest Field */}
              <div>
                <label htmlFor="service-interest" className="block text-sm font-medium text-[#1E1D1A] mb-2">
                  Service of Interest
                </label>
                <select
                  id="service-interest"
                  name="service-interest"
                  className="w-full px-4 py-3 border border-[#1E1D1A]/20 rounded-md bg-[#F7F4EE] text-[#1E1D1A] focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Hormone Therapy">Hormone Therapy</option>
                  <option value="GLP-1">GLP-1</option>
                  <option value="MedSpa">MedSpa</option>
                  <option value="Primary Care">Primary Care</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1E1D1A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-[#1E1D1A]/20 rounded-md bg-[#F7F4EE] text-[#1E1D1A] placeholder-[#1E1D1A]/50 focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

            {/* HIPAA Notice */}
            <div className="mt-8 p-4 bg-[#F7F4EE] rounded-md border border-[#1E1D1A]/10">
              <p className="text-sm text-[#1E1D1A]/70">
                <span className="font-semibold block mb-1">HIPAA Notice:</span>
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Visit Us
              </h3>
              <p className="text-[#1E1D1A]/80 mb-2">
                <span className="font-semibold text-[#0F6E56]">Rooted Health Hormones & MedSpa</span>
              </p>
              <p className="text-[#1E1D1A]/70 mb-4">
                Conway, AR
              </p>
              <p className="text-sm text-[#1E1D1A]/60">
                Provider: LaDonna Walker, NP
              </p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-[#0F6E56] mb-1">Email</p>
                  <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] hover:text-[#0F6E56] transition-colors">
                    bekinditmatters@icloud.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F6E56] mb-1">Location</p>
                  <p className="text-[#1E1D1A]/70">Conway, AR</p>
                </div>
              </div>
            </div>

            {/* Services Offered Card */}
            <div className="bg-[#1D9E75] text-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Hormone Therapy</li>
                <li>✓ GLP-1 Weight Management</li>
                <li>✓ MedSpa Services</li>
                <li>✓ Primary Care</li>
                <li>✓ Wellness Consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}