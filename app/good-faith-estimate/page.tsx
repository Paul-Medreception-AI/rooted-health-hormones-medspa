export const metadata = {
  title: 'Good Faith Estimate | Rooted Health Hormones & MedSpa',
  description: 'Good Faith Estimate notice under the No Surprises Act. Rooted Health Hormones & MedSpa, Conway AR.',
}

export default function GoodFaithEstimatePage() {
  return (
    <main className="bg-[#F7F4EE] min-h-screen">
      <section className="bg-white border-b border-[#E2DDD4] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-[#1E1D1A] mb-4">
            Good Faith Estimate
          </h1>
          <p className="text-[#7A7870]">Notice Under the No Surprises Act &bull; Effective January 1, 2022</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-[#1E1D1A]">

          <div className="bg-[#E1F5EE] rounded-2xl p-6 border border-[#C5EBD9]">
            <p className="text-[#0F6E56] font-semibold leading-relaxed">
              You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Your Right to a Good Faith Estimate</h2>
            <p className="text-[#7A7870] leading-relaxed">
              Under the No Surprises Act (Section 2799B-6 of the Public Health Service Act), health care providers are required to provide patients who do not have insurance or who are not using insurance with an estimate of the expected charges for medical services. This notice applies to self-pay and uninsured patients.
            </p>
            <p className="text-[#7A7870] leading-relaxed mt-3">
              Because Rooted Health Hormones & MedSpa operates as a direct primary care (DPC) membership practice and does not bill insurance for most services, this notice applies to most services we provide.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">What This Means for You</h2>
            <ul className="space-y-4 text-[#7A7870]">
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                <span>You have the right to receive a Good Faith Estimate in writing at least 1 business day before your medical service or item.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                <span>You can also ask us for a Good Faith Estimate before you schedule an item or service.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                <span>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1D9E75] mt-1 shrink-0">✓</span>
                <span>Make sure to save a copy or picture of your Good Faith Estimate.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Our Membership Pricing</h2>
            <p className="text-[#7A7870] leading-relaxed mb-6">
              As a direct primary care practice, our membership fees are transparent and published. Your monthly membership constitutes your Good Faith Estimate for included services. Current membership pricing:
            </p>
            <div className="space-y-4">
              {[
                { name: 'Virtual DPC Membership', price: '$99/month', desc: 'Unlimited virtual visits, messaging, same-day appointments, labs at cost, wholesale medications.' },
                { name: 'Hormone Optimization Membership', price: '$149–$199/month', desc: 'Everything in Virtual DPC plus comprehensive hormone testing, BHRT, thyroid optimization, quarterly follow-ups.' },
                { name: 'Elite GLP-1 Membership', price: '$349/month', desc: 'Everything in Hormone Optimization plus GLP-1 medication, monthly metabolic monitoring, nutrition coaching, MedSpa discounts.' },
              ].map((tier) => (
                <div key={tier.name} className="bg-white rounded-xl p-6 border border-[#E2DDD4]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#1E1D1A]">{tier.name}</h3>
                    <span className="text-[#1D9E75] font-semibold shrink-0 ml-4">{tier.price}</span>
                  </div>
                  <p className="text-[#7A7870] text-sm">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#7A7870] text-sm mt-4 leading-relaxed">
              Add-on services (medspa treatments, IV therapy, additional labs) are priced separately and will be disclosed before any service is rendered. A Good Faith Estimate for any add-on service is available upon request.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Requesting a Good Faith Estimate</h2>
            <p className="text-[#7A7870] leading-relaxed">
              To request a written Good Faith Estimate for any service, please contact us:
            </p>
            <p className="text-[#7A7870] leading-relaxed mt-3">
              <strong className="text-[#1E1D1A]">Rooted Health Hormones & MedSpa, LLC</strong><br />
              LaDonna Walker, MSN, APRN, FNP-BC<br />
              1120 Hogan Lane, Suite 2B, Conway, AR 72032<br />
              Phone: <a href="tel:4798806148" className="text-[#1D9E75] hover:underline">(479) 880-6148</a><br />
              Email: <a href="mailto:rootedhealthormones@gmail.com" className="text-[#1D9E75] hover:underline">rootedhealthormones@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">Disputing a Bill</h2>
            <p className="text-[#7A7870] leading-relaxed">
              If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. For information about your rights regarding bill disputes, visit{' '}
              <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">
                www.cms.gov/nosurprises
              </a>{' '}
              or call 1-800-985-3059.
            </p>
            <p className="text-[#7A7870] leading-relaxed mt-3">
              Note: A Good Faith Estimate is not a contract and does not require you to obtain the listed items or services from our practice.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
