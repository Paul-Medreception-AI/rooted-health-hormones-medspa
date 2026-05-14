import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (connect to Mailchimp or backend)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', serviceInterest: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4" style={{ color: '#1D9E75' }}>Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Have questions about memberships or our services? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-emerald-50 rounded-lg p-8 md:p-12" style={{ backgroundColor: '#E1F5EE' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-emerald-900 mb-2" style={{ color: '#0F6E56' }}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  style={{ borderColor: '#E2DDD4' }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-emerald-900 mb-2" style={{ color: '#0F6E56' }}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  style={{ borderColor: '#E2DDD4' }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-emerald-900 mb-2" style={{ color: '#0F6E56' }}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  style={{ borderColor: '#E2DDD4' }}
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-semibold text-emerald-900 mb-2" style={{ color: '#0F6E56' }}>Service Interest</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  style={{ borderColor: '#E2DDD4' }}
                >
                  <option value="">Select a service...</option>
                  <option value="primary_care">Primary Care Membership</option>
                  <option value="hormone">Hormone Optimization</option>
                  <option value="metabolic">Metabolic Medicine</option>
                  <option value="glp1">GLP-1 & Weight Optimization</option>
                  <option value="medspa">MedSpa Services</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg font-semibold text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: '#1D9E75' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0F6E56'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1D9E75'}
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-4 p-4 rounded-lg bg-emerald-100 border-2 border-emerald-500 text-emerald-900" style={{ backgroundColor: '#E1F5EE', borderColor: '#1D9E75' }}>
                <p className="font-semibold">Thank you for contacting us.</p>
                <p className="text-sm mt-1">We'll review your inquiry and follow up shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HIPAA Privacy Notice */}
      <section className="px-4 py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#1D9E75' }}>
            <h3 className="font-semibold text-gray-900 mb-3">Privacy Notice</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              This form collects contact information only. We do not collect any protected health information (PHI) on this page. Any health information you share will be handled in accordance with HIPAA regulations and our privacy policy. Your information is secure and will never be shared with third parties without your explicit consent.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-emerald-900" style={{ color: '#0F6E56' }}>Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E1F5EE' }}>
                <span className="text-2xl" style={{ color: '#1D9E75' }}>📅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book a Consult</h3>
              <p className="text-gray-600 text-sm mb-4">Schedule directly through Jane App or take our membership quiz to get started.</p>
              <a href="/quiz" className="text-sm font-semibold" style={{ color: '#1D9E75' }}>Start Quiz</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E1F5EE' }}>
                <span className="text-2xl" style={{ color: '#1D9E75' }}>📧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">Reach out with questions about our memberships and services.</p>
              <a href="mailto:contact@rootedhealthmember.com" className="text-sm font-semibold" style={{ color: '#1D9E75' }}>Send Email</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E1F5EE' }}>
                <span className="text-2xl" style={{ color: '#1D9E75' }}>📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <p className="text-gray-600 text-sm mb-4">Stay updated on health tips and clinic announcements.</p>
              <a href="https://instagram.com/rootedhealthllc" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#1D9E75' }}>@rootedhealthllc</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}