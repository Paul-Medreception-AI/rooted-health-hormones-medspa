import React from 'react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl mb-4">Privacy Policy</h1>
          <p className="text-white/90">Last updated: May 2026 | Rooted Health Hormones & MedSpa LLC</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="font-[family-name:var(--font-dm-sans)]">
            
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Who We Are</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              Rooted Health Hormones & MedSpa LLC is a medical practice located in Conway, Arkansas, providing hormone therapy, aesthetic treatments, and wellness services. Our website is <a href="https://www.therootedhealth.net" className="text-[#1D9E75] underline">www.therootedhealth.net</a>. For questions about this Privacy Policy, please contact us at <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] underline">bekinditmatters@icloud.com</a>.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Information We Collect</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We collect limited personal information through contact forms on our website, including your name, email address, phone number, and service interest. This information is used solely to respond to your inquiries and facilitate appointment scheduling.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              <strong>Important:</strong> We do NOT collect or store protected health information (PHI) or medical records through this website. All clinical information is handled through our secure, HIPAA-compliant patient portal.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">How We Use Your Information</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We use the information you provide to:
            </p>
            <ul className="list-disc list-inside text-[#7A7870] leading-relaxed mb-4 ml-4">
              <li>Respond to your inquiries about our services</li>
              <li>Schedule consultations and appointments</li>
              <li>Send appointment reminders and health updates</li>
              <li>Send marketing communications (with your explicit consent)</li>
            </ul>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We will never sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">SMS / Text Messaging</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              By providing your phone number and submitting our contact form, you consent to receive SMS text messages from Rooted Health regarding appointments, health updates, and promotional offers. Message frequency varies. Message and data rates may apply.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance. For more information, see our <Link href="/sms-terms" className="text-[#1D9E75] underline">SMS Terms</Link>.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Email Communications</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We will only send you marketing emails if you have explicitly opted in to receive them. Every marketing email includes an unsubscribe link at the bottom. You may opt out at any time by clicking that link or contacting us directly at <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] underline">bekinditmatters@icloud.com</a>.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              Transactional emails (such as appointment confirmations) are not subject to opt-out, as they are necessary for providing our services.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Data Security</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We take the security of your personal information seriously. Our website uses SSL/TLS encryption to protect data transmitted between your browser and our servers. Access to contact form submissions is limited to authorized staff members only.
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              Please note that no PHI (protected health information) is stored on this website. All medical records and clinical data are handled exclusively through our secure, HIPAA-compliant patient portal.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">HIPAA Notice</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              This website does not collect or store protected health information (PHI). All clinical intake forms, medical records, and health-related communications are handled exclusively through our secure patient portal in compliance with the Health Insurance Portability and Accountability Act (HIPAA).
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              If you are an established patient, you will receive separate HIPAA Notice of Privacy Practices documentation that explains how your medical information is used and protected in our clinical practice.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Third-Party Services</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              Our website uses the following third-party services to improve functionality and user experience:
            </p>
            <ul className="list-disc list-inside text-[#7A7870] leading-relaxed mb-4 ml-4">
              <li><strong>Google Analytics</strong> — for website traffic analysis (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">Privacy Policy</a>)</li>
              <li><strong>Facebook Pixel</strong> — for advertising and analytics (<a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">Privacy Policy</a>)</li>
              <li><strong>Mailchimp</strong> — for email marketing (<a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">Privacy Policy</a>)</li>
              <li><strong>Formspree</strong> — for contact form handling (<a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">Privacy Policy</a>)</li>
            </ul>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              These services may collect information about your visit, such as IP address, browser type, pages viewed, and time spent on pages. We encourage you to review their privacy policies to understand how they handle your data.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Your Rights</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#7A7870] leading-relaxed mb-4 ml-4">
              <li>Request a copy of the personal information we have collected about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] underline">bekinditmatters@icloud.com</a>. We will respond to your request within 30 days.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Contact Us</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              <strong>Rooted Health Hormones & MedSpa LLC</strong><br />
              Conway, Arkansas<br />
              Email: <a href="mailto:bekinditmatters@icloud.com" className="text-[#1D9E75] underline">bekinditmatters@icloud.com</a><br />
              Website: <a href="https://www.therootedhealth.net" className="text-[#1D9E75] underline">www.therootedhealth.net</a>
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1E1D1A] mb-4 mt-10">Changes to This Policy</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically for the latest information on our privacy practices.
            </p>

            <div className="mt-12 pt-8 border-t border-[#E1F5EE] text-center text-[#7A7870] text-sm">
              <Link href="/terms" className="text-[#1D9E75] underline hover:text-[#0F6E56]">Terms of Service</Link>
              {' | '}
              <Link href="/sms-terms" className="text-[#1D9E75] underline hover:text-[#0F6E56]">SMS Terms</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}