import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Rooted Health',
  description: 'Comprehensive hormone therapy, weight loss, medspa, and primary care services in Conway, AR',
};

const services = [
  {
    icon: '⚗️',
    title: 'Hormone Therapy (BHRT)',
    description:
      'Bioidentical hormone replacement therapy tailored to your unique needs to restore balance and vitality. Our personalized approach helps address hormonal imbalances affecting energy, mood, and overall wellness.',
  },
  {
    icon: '⚖️',
    title: 'GLP-1 Weight Loss',
    description:
      'Medical weight loss program utilizing GLP-1 medications for sustainable results and improved metabolic health. Combined with lifestyle guidance, our comprehensive approach supports your weight loss journey.',
  },
  {
    icon: '✨',
    title: 'MedSpa Services',
    description:
      'Advanced aesthetic treatments including Botox, dermal fillers, and skin rejuvenation procedures. Enhance your natural beauty with our professional medspa services delivered by experienced practitioners.',
  },
  {
    icon: '🏥',
    title: 'Direct Primary Care (DPC)',
    description:
      'Personalized primary care with direct access to LaDonna Walker, NP, without the insurance hassle. Enjoy longer appointments, same-day care, and a true partnership in your health management.',
  },
  {
    icon: '💊',
    title: 'Peptide Therapy',
    description:
      'Cutting-edge peptide treatments to optimize cellular function, enhance recovery, and improve overall performance. Our peptide protocols are customized to support your specific health and wellness goals.',
  },
  {
    icon: '🔬',
    title: 'Thyroid & Metabolic',
    description:
      'Comprehensive thyroid and metabolic testing with expert analysis to optimize your energy and weight management. We address root causes of thyroid dysfunction for lasting improvements.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            className="mb-4 text-5xl font-bold tracking-tight text-[#1E1D1A]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#0F6E56]">
            Comprehensive healthcare solutions tailored to your wellness journey at Rooted Health in Conway, AR.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 text-5xl">{service.icon}</div>

              {/* Title */}
              <h2
                className="mb-3 text-2xl font-semibold text-[#1D9E75]"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {service.title}
              </h2>

              {/* Description */}
              <p className="mb-6 flex-grow text-base leading-relaxed text-[#1E1D1A]">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href="/contact"
                className="inline-block self-start rounded-md bg-[#1D9E75] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#0F6E56]"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-lg bg-[#1D9E75] px-8 py-12 text-center text-white">
          <h2
            className="mb-4 text-3xl font-bold"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="mb-8 text-lg">
            Schedule a consultation with LaDonna Walker, NP, and discover how Rooted Health can support your health goals.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-3 font-semibold text-[#1D9E75] transition-colors duration-200 hover:bg-[#F7F4EE]"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
}