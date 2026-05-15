import React from 'react'

export default function SMSTermsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl mb-4">
            SMS Terms of Service
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg opacity-90">
            Last updated: May 2026 | Rooted Health Hormones & MedSpa LLC
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E1F5EE] border border-[#1D9E75] rounded-xl p-6 mb-8">
            <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] font-semibold text-center">
              Text STOP to unsubscribe | Text HELP for help | Msg & data rates may apply | Frequency varies
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Program Description
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Rooted Health Hormones & MedSpa LLC ('Rooted Health', 'we', 'us') offers SMS text messaging to communicate appointment reminders, health updates, membership information, and promotional offers to patients and prospective patients who have provided consent.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                How to Opt In
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                You may opt in to receive SMS messages from Rooted Health by: (1) submitting our online contact form and checking the SMS consent checkbox, (2) providing your phone number to our staff and verbally consenting, or (3) texting START to our practice number.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Message Frequency
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Message frequency varies. You may receive up to 4 messages per month related to appointments, health updates, or promotions.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Message & Data Rates
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Message and data rates may apply. Check with your wireless carrier for details about your plan.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                How to Opt Out
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                To stop receiving SMS messages at any time, reply STOP to any message we send. After you send STOP, we will send one final message confirming your unsubscription. You will not receive any further SMS messages unless you opt back in.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Help
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                For help or more information, reply HELP to any message or contact us at bekinditmatters@icloud.com.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Supported Carriers
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Supported carriers include: AT&T, Verizon, T-Mobile, Sprint, Boost Mobile, U.S. Cellular, and other major US wireless carriers. Carrier is not liable for delayed or undelivered messages.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Privacy
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Your phone number and messaging consent information are stored securely and never sold to third parties. See our full <a href="/privacy" className="text-[#1D9E75] underline">Privacy Policy</a> for details.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#0F6E56] mb-4">
                Contact
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1E1D1A] leading-relaxed">
                Rooted Health Hormones & MedSpa LLC | Conway, AR | bekinditmatters@icloud.com | rootedhealthmember.com
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E1F5EE] text-center">
            <nav className="font-[family-name:var(--font-dm-sans)] text-[#7A7870]">
              <a href="/privacy" className="hover:text-[#1D9E75] underline">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-[#1D9E75] underline">Terms of Service</a>
            </nav>
          </div>
        </div>
      </section>
    </main>
  )
}