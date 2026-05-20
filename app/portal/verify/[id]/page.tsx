import Link from 'next/link'

interface VerifyPageProps {
  params: Promise<{ id: string }>
}

const mockBenefitsByPlan: Record<string, string[]> = {
  'Hormone Optimization': [
    'Unlimited virtual visits',
    'Comprehensive hormone testing',
    'BHRT and thyroid optimization',
    'Quarterly follow-ups included',
    'Personalized treatment plans',
  ],
  'GLP-1 Weight Loss': [
    'Monthly provider check-ins',
    'GLP-1 medication management',
    'Metabolic lab panel included',
    'Nutrition guidance',
    'Body composition tracking',
  ],
  'Essential Wellness': [
    'Quarterly provider visits',
    'Annual lab panel',
    'Telehealth access',
    'Care coordination',
  ],
}

const mockMembers: Record<string, {
  name: string
  plan: string
  status: string
  memberSince: string
}> = {
  'RH-2024-001': {
    name: 'Member Name',
    plan: 'Hormone Optimization',
    status: 'Active',
    memberSince: 'January 2025',
  },
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { id } = await params
  const isValidFormat = id.startsWith('RH-')
  const member = mockMembers[id] ?? (isValidFormat ? mockMembers['RH-2024-001'] : null)

  const verifiedAt = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left panel — green branding */}
      <div
        className="md:w-80 flex-shrink-0 flex flex-col justify-between p-10"
        style={{ background: 'linear-gradient(160deg, #0F6E56 0%, #1D9E75 100%)' }}
      >
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-white text-3xl font-semibold">
            Rooted Health
          </h1>
          <p className="text-white/70 text-sm leading-relaxed">
            Hormone and Metabolic Medicine, Conway AR
          </p>
        </div>

        <div className="space-y-2 mt-8 md:mt-0">
          <p className="text-white/50 text-xs uppercase tracking-widest">Staff Verification</p>
          <p className="text-white/80 text-sm">
            For in-office use only. Scan member QR codes to confirm active membership status.
          </p>
          <Link
            href="/staff"
            className="inline-block text-white/60 hover:text-white text-sm underline underline-offset-2 transition-colors"
          >
            Back to Staff Portal
          </Link>
        </div>
      </div>

      {/* Right panel — verification result */}
      <div className="flex-1 bg-[#F7F4EE] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">

          {member ? (
            <>
              {/* Status badge */}
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                  style={{ background: '#E1F5EE', color: '#0F6E56' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75] inline-block"></span>
                  ACTIVE MEMBER
                </span>
              </div>

              {/* Member details card */}
              <div className="bg-white rounded-2xl border border-[#E2DDD4] p-6 space-y-4">
                <div>
                  <p className="text-[#7A7870] text-xs uppercase tracking-wider">Member Name</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A] mt-0.5">
                    {member.name}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#7A7870]">Plan</p>
                    <p className="text-[#1E1D1A] font-medium">{member.plan}</p>
                  </div>
                  <div>
                    <p className="text-[#7A7870]">Status</p>
                    <p className="text-[#0F6E56] font-semibold">{member.status}</p>
                  </div>
                  <div>
                    <p className="text-[#7A7870]">Member Since</p>
                    <p className="text-[#1E1D1A] font-medium">{member.memberSince}</p>
                  </div>
                  <div>
                    <p className="text-[#7A7870]">Member ID</p>
                    <p className="text-[#1E1D1A] font-mono text-xs mt-0.5">{id}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="pt-3 border-t border-[#E2DDD4]">
                  <p className="text-[#7A7870] text-xs uppercase tracking-wider mb-2">Plan Includes</p>
                  <ul className="space-y-1.5">
                    {(mockBenefitsByPlan[member.plan] ?? []).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#1E1D1A]">
                        <span className="text-[#1D9E75] font-bold flex-shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timestamp */}
              <p className="text-[#7A7870] text-sm">
                Verified {verifiedAt}
              </p>

              {/* Staff note */}
              <div
                className="rounded-xl border px-4 py-3 text-xs text-[#7A7870] leading-relaxed"
                style={{ borderColor: '#E2DDD4', background: 'white' }}
              >
                This verification is for in-office use only. Not a substitute for clinical records.
              </div>
            </>
          ) : (
            <>
              {/* Not found state */}
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                  style={{ background: '#FEE2E2', color: '#B91C1C' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  MEMBER NOT FOUND
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-[#E2DDD4] p-6">
                <p className="text-[#1E1D1A] font-medium mb-2">ID: {id}</p>
                <p className="text-[#7A7870] text-sm">
                  This member ID could not be verified. Please ask the member to show their digital card
                  or contact the front desk.
                </p>
              </div>

              <p className="text-[#7A7870] text-sm">Checked {verifiedAt}</p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
