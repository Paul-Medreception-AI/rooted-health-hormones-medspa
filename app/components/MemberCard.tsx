'use client'

import { QRCodeSVG } from 'qrcode.react'

interface MemberCardProps {
  memberId: string
  name: string
  plan: string
  status: string
  memberSince: string
}

export default function MemberCard({ memberId, name, plan, status, memberSince }: MemberCardProps) {
  const verifyUrl = `https://rootedhealthmember.com/verify/${memberId}`

  return (
    <div className="w-full max-w-sm mx-auto space-y-3">
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #0F6E56 0%, #1D9E75 100%)',
          aspectRatio: '1.6 / 1',
          padding: '24px',
        }}
      >
        {/* Top row */}
        <div className="flex justify-between items-start mb-4">
          <span className="font-[family-name:var(--font-cormorant)] text-white text-xl font-semibold tracking-wide">
            Rooted Health
          </span>
          <span
            className="text-xs font-bold tracking-widest px-2 py-1 rounded"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', letterSpacing: '0.12em' }}
          >
            MEMBER
          </span>
        </div>

        {/* Member name and plan */}
        <div className="mb-4">
          <p className="font-[family-name:var(--font-cormorant)] text-white text-2xl font-medium leading-tight">
            {name}
          </p>
          <p className="text-white/70 text-sm mt-0.5">{plan}</p>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end absolute bottom-5 left-6 right-6">
          <div className="space-y-1">
            <p className="text-white/60 font-mono text-xs">{memberId}</p>
            <p className="text-white/60 text-xs">Since {memberSince}</p>
            {status === 'Active' && (
              <span
                className="inline-block text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', letterSpacing: '0.08em' }}
              >
                ACTIVE
              </span>
            )}
          </div>

          {/* QR code */}
          <div className="bg-white rounded-lg p-1.5">
            <QRCodeSVG
              value={verifyUrl}
              size={64}
              fgColor="#0F6E56"
              bgColor="#ffffff"
              level="M"
            />
          </div>
        </div>
      </div>

      {/* Below card text and actions */}
      <p className="text-center text-xs text-[#7A7870]">
        Show this card at checkout for member pricing
      </p>

      <div className="flex gap-3 justify-center">
        <button
          type="button"
          className="px-4 py-2 rounded-lg text-sm font-medium border border-[#E2DDD4] text-[#1E1D1A] hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors"
          onClick={() => {
            // Download logic wired when Supabase is live
            alert('Download coming soon')
          }}
        >
          Download Card
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg text-sm font-medium border border-[#E2DDD4] text-[#1E1D1A] hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'My Rooted Health Member Card', url: verifyUrl })
            } else {
              navigator.clipboard.writeText(verifyUrl)
              alert('Link copied to clipboard')
            }
          }}
        >
          Share
        </button>
      </div>
    </div>
  )
}
