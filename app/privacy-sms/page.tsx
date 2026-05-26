import React from 'react'
import Link from 'next/link'

export default function PrivacySMSPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg opacity-90">
            Effective Date: May 1st, 2026 | Rooted Health Hormones & MedSpa LLC
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 font-[family-name:var(--font-dm-sans)] text-[#1E1D1A]">
            <div className="bg-[#E1F5EE] border border-[#1D9E75] rounded-xl p-6">
              <p className="text-lg leading-relaxed text-[#1E1D1A] font-semibold mb-2">
                IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
              </p>
              <p className="text-lg leading-relaxed text-[#1E1D1A]">
                Rooted Health Hormones & MedSpa LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                1. Information We Collect
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                We collect the following types of information:
              </p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Personal Information
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Name, email address, phone number, physical address</li>
                <li>Payment information when you make a purchase or request a quote</li>
                <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
              </ul>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Non-Personal Information
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>IP address, browser type, device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Customer Communication
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] ml-4 space-y-1">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                We use collected data for:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] ml-4 space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about your inquiries, appointments, and promotions</li>
                <li>Enhancing website functionality and user experience</li>
                <li>Ensuring security and fraud prevention</li>
                <li>Maintaining records of your communication preferences and consent</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                3. SMS Messaging & Compliance
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                <strong>Text Message Program Terms & Conditions</strong>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
              </p>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Opt-In & Consent
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Opt-Out Instructions
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately.</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Message Frequency & Content
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Help & Support
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Reply &quot;HELP&quot; for assistance or contact us at <a href="mailto:rootedhealthhormones@gmail.com" className="text-[#1D9E75] underline hover:text-[#0F6E56]">rootedhealthhormones@gmail.com</a></li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Carrier Information
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                SMS Data Protection Statement
              </h3>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                4. Information Sharing & Disclosure
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                We do not sell, rent, or trade personal information or Protected Health Information. We may share information with:
              </p>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Healthcare Operations
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Other healthcare providers involved in your care for treatment coordination purposes</li>
                <li>Health insurance companies and third-party payers for billing and claims processing</li>
                <li>Healthcare clearinghouses as necessary for payment processing</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Service Providers
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling, electronic health records) under Business Associate Agreements</li>
                <li>SMS aggregators and providers solely for the purpose of delivering messages you&apos;ve consented to receive</li>
                <li>All service providers are contractually obligated to maintain confidentiality, security, and HIPAA compliance where applicable</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Legal Requirements
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>When required by law, regulation, or legal process</li>
                <li>To public health authorities as required or permitted by law</li>
                <li>For health oversight activities, judicial proceedings, or law enforcement purposes as permitted by HIPAA</li>
              </ul>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0F6E56] mb-3">
                Business Transfers
              </h3>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>In case of mergers, acquisitions, or sale of assets</li>
                <li>In such cases, your data remains protected under the terms of this policy and applicable law</li>
              </ul>

              <p className="text-lg leading-relaxed text-[#7A7870]">
                All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                5. Data Security
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                We implement and maintain reasonable security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and disaster recovery procedures</li>
              </ul>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                6. Cookies & Tracking Technologies
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                7. Your Rights & Choices
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
                <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
                <li>Request information on how we process your data</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                To exercise these rights, please contact us using the information in Section 10.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                8. Privacy, HIPAA & Health Information
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                As a healthcare provider, we are committed to protecting your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-[#7A7870] mb-4 ml-4 space-y-2">
                <li>SMS is not a fully encrypted communication method. We minimize the amount of health information included in text messages to protect your privacy.</li>
                <li>We will not include detailed medical records, diagnoses, lab results, or other sensitive clinical data in SMS messages.</li>
                <li>By opting in, you acknowledge that standard SMS messages may be intercepted or read by unauthorized parties due to the nature of wireless communications, and you accept this risk for the convenience of receiving appointment-related text messages.</li>
                <li>Your consent to receive SMS messages is separate from and does not replace any HIPAA authorizations or medical consent forms.</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA), HIPAA, CTIA guidelines, and all applicable federal and state regulations regarding SMS communications and health information.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#0F6E56] mb-4">
                10. Contact Us
              </h2>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                If you have questions about this Privacy Policy or how your information is handled, contact us at:
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                <strong>Rooted Health Hormones & MedSpa LLC</strong>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                Phone: <a href="tel:+14798806148" className="text-[#1D9E75] underline hover:text-[#0F6E56]">(479) 880-6148</a>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                Email: <a href="mailto:rootedhealthhormones@gmail.com" className="text-[#1D9E75] underline hover:text-[#0F6E56]">rootedhealthhormones@gmail.com</a>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                Website: <a href="http://therootedhealth.net/" className="text-[#1D9E75] underline hover:text-[#0F6E56]">http://therootedhealth.net/</a>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                To file a HIPAA complaint, you may also contact:
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                <strong>U.S. Department of Health and Human Services</strong>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-2">
                Office for Civil Rights
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870] mb-4">
                Website: <a href="https://www.hhs.gov/ocr" className="text-[#1D9E75] underline hover:text-[#0F6E56]">www.hhs.gov/ocr</a>
              </p>
              <p className="text-lg leading-relaxed text-[#7A7870]">
                By using our website and services, you consent to this Privacy Policy. This policy does not replace or modify the informed consent process for medical treatment or our HIPAA Notice of Privacy Practices.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E1F5EE] text-center font-[family-name:var(--font-dm-sans)]">
            <p className="text-[#7A7870]">
              <Link href="/terms-sms" className="text-[#1D9E75] hover:text-[#0F6E56] underline">
                SMS Terms
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
