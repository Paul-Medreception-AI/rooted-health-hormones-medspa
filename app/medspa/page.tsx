import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MedSpa Services Conway AR | Botox, Fillers, Facials | Rooted Health',
  description: 'Botox, fillers, SKINVIVE, Jalupro, facials, laser hair removal, and more at Rooted Health MedSpa in Conway, AR. See our full menu and pricing.',
}

export default function MedSpaPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6">
            MedSpa Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Medical-grade aesthetic treatments by LaDonna Walker NP in Conway, AR. Real results, real pricing.
          </p>
          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0F6E56] hover:bg-[#F7F4EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Section 1: Injectables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">Injectables</h2>
          <p className="text-[#7A7870] mb-10">Neuromodulators, fillers, and bio-revitalization treatments</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Botox and Dysport',
                desc: "Neuromodulators for forehead lines, 11s, and crow's feet. Smooth, natural-looking results without downtime.",
              },
              {
                name: 'Dermal Fillers',
                desc: 'Volume enhancement for lips, cheeks, and nasolabial folds. Restores youthful contour and balance.',
              },
              {
                name: 'KYBELLA Fat Dissolving',
                desc: 'Targets double chin and submental fat. Sessions are 15-30 minutes. Minimum 2 treatments recommended for optimal results.',
              },
              {
                name: 'Jalupro Skin Bio-Revitalizer',
                price: '$795 for 3 sessions',
                desc: 'Amino acids plus hyaluronic acid to treat fine lines, dark circles, acne scars, and skin on the neck, decollete, and hands.',
              },
              {
                name: 'SKINVIVE by Juvederm',
                price: '$550 single / $995 for 2',
                desc: 'FDA-approved cheek hydration and smoothness treatment lasting 6 months. Recommended for patients 21 and older.',
                img: '/images/skinvive.jpg',
              },
              {
                name: 'Cellulite Injections',
                desc: 'Minimally invasive treatment with results lasting up to 2 years.',
              },
            ].map((s) => (
              <div key={s.name} className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#E2DDD4] h-full">
                {s.img && (
                  <img src={s.img} alt={s.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                )}
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1E1D1A] mb-1">{s.name}</h3>
                {s.price && <p className="text-[#1D9E75] font-semibold text-sm mb-2">{s.price}</p>}
                <p className="text-[#7A7870] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Laser and Technology */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">Laser and Technology</h2>
          <p className="text-[#7A7870] mb-10">Advanced devices for lasting skin improvement</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Laser Hair Removal', desc: 'Diode laser with integrated cooling for comfortable, long-lasting hair reduction on all skin types.' },
              { name: 'Pico Laser Tattoo Removal', desc: 'Picosecond laser technology to break down ink particles efficiently with minimal surrounding tissue disruption.' },
              { name: 'Chemical Peels', desc: 'Targets fine lines, acne, and hyperpigmentation. Customized depth based on your skin concern.' },
              { name: 'Microchanneling', price: 'Starting at $175', desc: 'Precision micro-channels to stimulate collagen and enhance product absorption. Minimal downtime.' },
              { name: 'IDENEL Peptide Treatment', price: '$150', desc: 'Advanced peptide infusion that supports skin repair, hydration, and a youthful glow.' },
            ].map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-[#E2DDD4] h-full">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1E1D1A] mb-1">{s.name}</h3>
                {s.price && <p className="text-[#1D9E75] font-semibold text-sm mb-2">{s.price}</p>}
                <p className="text-[#7A7870] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Facial Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">Facial Menu</h2>
              <p className="text-[#7A7870] mb-8">Expertly crafted facials for every skin goal and budget</p>
              <div className="space-y-4">
                {[
                  { name: 'Mortal Facial', time: '45 min', price: '$55' },
                  { name: 'Demi-God Facial', time: '60 min', price: '$70' },
                  { name: 'Oracle Facial', time: '60 min', price: '$95', note: 'Includes crystal hydrojelly mask and sound therapy' },
                  { name: 'Goddess Facial', time: '90 min', price: '$100' },
                  { name: 'Titan Facial', time: '90 min', price: '$150', note: 'Deep Hungarian massage techniques' },
                  { name: 'Back Facial', price: '$60', note: 'With Hot Stones $75 / With Hot and Cold Stones $90' },
                ].map((f) => (
                  <div key={f.name} className="flex justify-between items-start p-4 rounded-xl bg-[#F7F4EE] border border-[#E2DDD4]">
                    <div>
                      <p className="font-semibold text-[#1E1D1A]">{f.name}</p>
                      {f.time && <p className="text-[#7A7870] text-sm">{f.time}</p>}
                      {f.note && <p className="text-[#7A7870] text-xs mt-1">{f.note}</p>}
                    </div>
                    <p className="text-[#1D9E75] font-bold whitespace-nowrap ml-4">{f.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-80">
              <img src="/images/facials.webp" alt="Facial treatments at Rooted Health MedSpa, Conway AR" className="rounded-2xl w-full object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Facial Add-Ons */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-8">Facial Add-Ons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'Dermaplaning', price: '$50' },
              { name: 'LED Light Therapy', price: '$25' },
              { name: 'Galvanic Current', price: '$30' },
              { name: 'High Frequency', price: '$30' },
              { name: 'Microdermabrasion', price: '$50' },
              { name: 'Micro-current', price: '$30' },
              { name: 'Ultrasonic', price: '$30' },
              { name: 'Ice Globes', price: '$3' },
              { name: 'Hot/Cold Stones', price: '$3' },
              { name: 'Herbal Steam', price: '$5' },
              { name: 'Extractions', price: '$10+' },
              { name: 'Sound Therapy', price: '$5' },
              { name: 'Skin Analysis', price: '$10' },
              { name: 'Crystal Hydrojelly Mask', price: '$20' },
              { name: 'High Frequency Comb', price: '$10' },
            ].map((a) => (
              <div key={a.name} className="bg-white rounded-xl p-4 border border-[#E2DDD4] flex justify-between items-center">
                <span className="text-[#1E1D1A] text-sm">{a.name}</span>
                <span className="text-[#1D9E75] font-bold text-sm ml-2">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Waxing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-8">Waxing</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'Eyebrow', price: '$15' },
              { name: 'Lip', price: '$10' },
              { name: 'Under Arm', price: '$20' },
              { name: 'Legs', price: '$70' },
              { name: 'Back', price: '$50' },
              { name: 'Bikini Line', price: '$35' },
              { name: 'Full Bikini', price: '$60' },
              { name: 'Brazilian', price: '$80' },
              { name: 'Aftercare Mask', price: '$20' },
            ].map((w) => (
              <div key={w.name} className="bg-[#F7F4EE] rounded-xl p-4 border border-[#E2DDD4] flex justify-between items-center">
                <span className="text-[#1E1D1A] text-sm">{w.name}</span>
                <span className="text-[#1D9E75] font-bold text-sm ml-2">{w.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Sexual Health */}
      <section className="py-20 bg-[#E1F5EE]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-6 text-center">
            Sexual Health Treatments
          </h2>
          <p className="text-[#7A7870] text-center mb-10 max-w-2xl mx-auto">
            Minimally invasive treatments for erectile dysfunction and vaginal dryness, with results lasting up to 2 years. Discreet, professional, and medically guided.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#C5EBD9]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F6E56] mb-3">Erectile Dysfunction</h3>
              <p className="text-[#7A7870] leading-relaxed">
                Non-surgical, minimally invasive treatments that address the root cause of ED. Results lasting up to 2 years. Confidential consultations available.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#C5EBD9]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F6E56] mb-3">Vaginal Dryness</h3>
              <p className="text-[#7A7870] leading-relaxed">
                Minimally invasive procedures to restore comfort, lubrication, and tissue health. Results lasting up to 2 years with minimal downtime.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Book a Confidential Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Member discount */}
      <section className="bg-[#1E1D1A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-6">Member Savings</h2>
          <p className="text-lg text-white/90 mb-10">
            Elite GLP-1 and Hormone Optimization members receive exclusive discounts and priority booking on all MedSpa services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/memberships"
              className="border-2 border-[#1D9E75] text-[#1D9E75] hover:bg-[#1D9E75] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              View Membership Plans
            </a>
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
