export const metadata = {
  title: 'Telehealth Consent | Rooted Health Hormones & MedSpa',
  description: 'Telehealth informed consent for Rooted Health Hormones & MedSpa, Conway AR. Arkansas residents only.',
}

export default function TelehealthConsentPage() {
  return (
    <main className="bg-[#F7F4EE] min-h-screen">
      <section className="bg-white border-b border-[#E2DDD4] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-[#1E1D1A] mb-4">
            Telehealth Informed Consent
          </h1>
          <p className="text-[#7A7870]">Rooted Health Hormones & MedSpa, LLC &bull; Effective January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-[#1E1D1A]">

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <p className="text-amber-800 font-semibold text-sm leading-relaxed">
              Telehealth services at Rooted Health are available only to patients who are physically located in the state of Arkansas at the time of the visit. By scheduling a telehealth appointment, you confirm you are in Arkansas.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">What Is Telehealth?</h2>
            <p className="text-[#7A7870] leading-relaxed">
              Telehealth refers to the delivery of health care services using electronic communications, including video conferencing, telephone, and secure messaging platforms. Rooted Health offers telehealth consultations as part of your membership for appropriate clinical services.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Scope of Telehealth Services</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">Services available via telehealth include:</p>
            <ul className="space-y-2 text-[#7A7870]">
              {[
                'Hormone consultation and follow-up visits',
                'GLP-1 weight loss program check-ins and dose adjustments',
                'Lab result review and interpretation',
                'Prescription management and refills (excluding controlled substances)',
                'Nutrition and lifestyle counseling',
                'Primary care visits for appropriate outpatient conditions',
                'Membership enrollment consultations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Services Requiring In-Person Visits</h2>
            <p className="text-[#7A7870] leading-relaxed mb-4">The following require an in-person evaluation and cannot be initiated via telehealth:</p>
            <ul className="space-y-2 text-[#7A7870]">
              {[
                'Initial prescribing of controlled substances (per the federal Ryan Haight Act)',
                'Physical examinations requiring hands-on assessment',
                'Injections, IV therapy, and all medspa treatments',
                'Lab draws and specimen collection',
                'Emergency or urgent care situations — call 911 or go to the nearest ER',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#7A7870] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Risks and Limitations</h2>
            <p className="text-[#7A7870] leading-relaxed">
              Telehealth has benefits and limitations compared to in-person care. Potential risks include:
            </p>
            <ul className="space-y-2 text-[#7A7870] mt-3">
              {[
                'Technology failures, poor audio/video quality, or connectivity issues that may interrupt or delay care',
                'Inability to perform a complete physical examination, which may limit diagnostic accuracy',
                'Delays in diagnosis or treatment recommendations due to inability to physically examine the patient',
                'Security risks inherent in electronic transmission of health information, though we use HIPAA-compliant platforms',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#7A7870] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Privacy and Security</h2>
            <p className="text-[#7A7870] leading-relaxed">
              All telehealth sessions are conducted using HIPAA-compliant platforms. Your health information transmitted during telehealth visits is protected under HIPAA and our{' '}
              <a href="/hipaa" className="text-[#1D9E75] hover:underline">Notice of Privacy Practices</a>.
              We do not record telehealth sessions without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Arkansas Telehealth Requirements</h2>
            <p className="text-[#7A7870] leading-relaxed">
              Rooted Health is licensed to practice in Arkansas only. Telehealth services are provided exclusively to patients who are physically located in Arkansas at the time of the visit, consistent with Arkansas telehealth law (Ark. Code Ann. § 17-80-117). You must confirm your location at the start of each telehealth visit.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Your Rights</h2>
            <ul className="space-y-2 text-[#7A7870]">
              {[
                'You have the right to refuse telehealth services and request an in-person visit instead.',
                'You may withdraw consent for telehealth at any time without affecting your right to future care.',
                'You have the right to request that your telehealth visit be conducted by an alternative method or at an alternative time.',
                'You have the right to access all records generated during your telehealth visits.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Contact & Questions</h2>
            <p className="text-[#7A7870] leading-relaxed">
              For questions about telehealth services or to schedule an in-person visit:
            </p>
            <p className="text-[#7A7870] leading-relaxed mt-3">
              <strong className="text-[#1E1D1A]">Rooted Health Hormones & MedSpa, LLC</strong><br />
              LaDonna Walker, MSN, APRN, FNP-BC<br />
              1120 Hogan Lane, Suite 2B, Conway, AR 72032<br />
              Phone: <a href="tel:4798806148" className="text-[#1D9E75] hover:underline">(479) 880-6148</a><br />
              Email: <a href="mailto:rootedhealthormones@gmail.com" className="text-[#1D9E75] hover:underline">rootedhealthormones@gmail.com</a>
            </p>
          </div>

          <div className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#E2DDD4] text-center">
            <p className="text-[#7A7870] text-sm leading-relaxed">
              By scheduling a telehealth appointment with Rooted Health, you acknowledge that you have read and understand this consent, that you are physically located in Arkansas, and that you agree to participate in telehealth services under these terms.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
