import React from 'react'
import Script from 'next/script'

export default function PatientFormSMSPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold mb-4">
            Patient Form
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg opacity-90">
            Rooted Health Hormones & MedSpa LLC
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://api.medreception.ai/widget/form/ZABe4kdM107mi5enlkDH"
            style={{ width: '100%', height: '788px', border: 'none', borderRadius: '3px' }}
            id="inline-ZABe4kdM107mi5enlkDH"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form A2P New"
            data-height="788"
            data-layout-iframe-id="inline-ZABe4kdM107mi5enlkDH"
            data-form-id="ZABe4kdM107mi5enlkDH"
            title="Form A2P New"
          />
        </div>
      </section>

      <Script src="https://api.medreception.ai/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}
