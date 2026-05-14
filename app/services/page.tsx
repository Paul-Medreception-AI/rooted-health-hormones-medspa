import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Primary Care Membership',
      description: 'Unlimited access to primary care services, preventive health, chronic disease management, and acute care coordination through a direct membership model.',
      features: ['Unlimited messaging', 'Extended visits', 'Prescription management', 'Care coordination']
    },
    {
      title: 'Hormone Optimization',
      description: 'Comprehensive hormone assessment and treatment including thyroid, estrogen, progesterone, testosterone, and adrenal protocols tailored to your goals.',
      features: ['Lab analysis', 'HRT protocols', 'Symptom tracking', 'Ongoing optimization']
    },
    {
      title: 'Metabolic Medicine',
      description: 'Advanced metabolic assessment and treatment to optimize energy, improve body composition, and address metabolic dysfunction at the root.',
      features: ['Metabolic testing', 'Nutrition guidance', 'Supplement protocols', 'Progress monitoring']
    },
    {
      title: 'GLP-1 & Weight Optimization',
      description: 'Medical weight loss program combining GLP-1 therapy, metabolic optimization, and behavioral coaching for sustainable results.',
      features: ['GLP-1 management', 'Weekly coaching', 'Metabolism optimization', 'Body composition tracking']
    },
    {
      title: 'MedSpa Services',
      description: 'Professional aesthetic services including skin optimization, injectables, and body treatments performed by licensed providers.',
      features: ['Facials & peels', 'Botox & fillers', 'Body treatments', 'Skincare protocols']
    },
    {
      title: 'Satellite Clinic Visits',
      description: 'Monthly in-person clinical visits at Spaah and Cabot locations for procedures, labs, and comprehensive assessments.'
      , features: ['In-person visits', 'Procedures', 'Lab draws', 'Clinical assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4" style={{ color: '#1D9E75' }}>Our Services</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Comprehensive hormone, metabolic, and primary care medicine designed for optimal health outcomes.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 rounded-lg p-8 hover:shadow-lg transition-shadow" style={{ borderColor: '#E2DDD4' }}>
                <h3 className="font-serif text-xl font-bold mb-3 text-emerald-900" style={{ color: '#0F6E56' }}>{service.title}</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#1D9E75' }}></span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="px-4 py-16 md:py-24 bg-emerald-50" style={{ backgroundColor: '#E1F5EE' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-emerald-900" style={{ color: '#0F6E56' }}>Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Virtual Primary Care',
                price: '$99',
                period: '/month',
                description: 'Unlimited primary care access via virtual appointments and messaging.'
              },
              {
                name: 'Hormone & Metabolic',
                price: '$149',
                period: '/month',
                description: 'Primary care plus hormone optimization and metabolic medicine protocols.'
              },
              {
                name: 'Elite GLP-1 Program',
                price: '$349',
                period: '/month',
                description: 'Complete medical weight loss with GLP-1, metabolic optimization, and weekly coaching.'
              }
            ].map((tier, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border-2" style={{ borderColor: '#E2DDD4' }}>
                <h3 className="font-serif text-2xl font-bold mb-2 text-emerald-900" style={{ color: '#1D9E75' }}>{tier.name}</h3>
                <div className="mb-6">
                  <span className="font-serif text-4xl font-bold text-emerald-900" style={{ color: '#0F6E56' }}>{tier.price}</span>
                  <span className="text-gray-600 text-sm ml-2">{tier.period}</span>
                </div>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{tier.description}</p>
                <a href="/quiz" className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white text-sm transition-colors" style={{ backgroundColor: '#1D9E75' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0F6E56'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1D9E75'}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-emerald-900" style={{ color: '#0F6E56' }}>Which membership is right for you?</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">Take our personalized quiz to match with the ideal membership tier for your health goals.</p>
          <a href="/quiz" className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-colors" style={{ backgroundColor: '#1D9E75' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0F6E56'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1D9E75'}>
            Take the Membership Quiz
          </a>
        </div>
      </section>
    </div>
  );
}