import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4" style={{ color: '#1D9E75' }}>About LaDonna</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">Provider Philosophy & Clinical Expertise</p>
        </div>
      </section>

      {/* Provider Image & Bio */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-gray-200 rounded-lg flex items-center justify-center border-2" style={{ borderColor: '#E2DDD4' }}>
              <span className="text-gray-400 text-sm">Provider Photo</span>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 text-emerald-900" style={{ color: '#0F6E56' }}>Clinical Background</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>LaDonna brings over [X] years of clinical experience in hormone optimization, metabolic medicine, and primary care. Her practice philosophy centers on direct patient relationships and evidence-based treatment protocols designed for real results—not insurance bureaucracy.</p>
              <p>She specializes in thyroid disorders, HRT, metabolic syndrome, weight optimization, and GLP-1 therapy management. Her approach combines functional medicine principles with conventional clinical rigor.</p>
              <p>LaDonna is board-certified in [Specialty] and holds memberships in [Organizations]. She is committed to continuing education in cutting-edge metabolic and hormone protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-emerald-50 px-4 py-16 md:py-24" style={{ backgroundColor: '#E1F5EE' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-emerald-900" style={{ color: '#0F6E56' }}>Credentials & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E2DDD4' }}>
              <h3 className="font-semibold text-emerald-900 mb-3" style={{ color: '#1D9E75' }}>Education</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Medical Degree: [University]</li>
                <li>• Residency: [Program]</li>
                <li>• Board Certification: [Specialty]</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E2DDD4' }}>
              <h3 className="font-semibold text-emerald-900 mb-3" style={{ color: '#1D9E75' }}>Specializations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Hormone Replacement Therapy</li>
                <li>• Metabolic Medicine</li>
                <li>• GLP-1 Therapy & Weight Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-emerald-900" style={{ color: '#0F6E56' }}>Why Direct Primary Care?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Insurance-driven medicine fragments care and prioritizes billing cycles over patient outcomes. LaDonna founded Rooted Health to reclaim the doctor-patient relationship through direct membership.</p>
            <p>This model eliminates insurance gatekeeping, reduces appointment wait times, and allows for personalized, unhurried clinical attention. Your membership covers unlimited messaging, extended visits, and coordinated hormone and metabolic protocols.</p>
            <p>Every treatment decision is driven by clinical evidence and your health goals—not insurance approval timelines.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-emerald-50" style={{ backgroundColor: '#E1F5EE' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-emerald-900" style={{ color: '#0F6E56' }}>Ready to Experience Direct Care Medicine?</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">Take our membership quiz to find the right membership tier for your health goals.</p>
          <a href="/quiz" className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-colors" style={{ backgroundColor: '#1D9E75' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0F6E56'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1D9E75'}>
            Take the Membership Quiz
          </a>
        </div>
      </section>
    </div>
  );
}