'use client'

import { useState } from 'react'
import Link from 'next/link'
import MemberCard from '../components/MemberCard'

const mockMember = {
  id: 'RH-2024-001',
  name: 'Member Name',
  plan: 'Hormone Optimization',
  planPrice: '$149/mo',
  status: 'Active',
  memberSince: 'January 2025',
  benefits: [
    'Unlimited virtual visits',
    'Comprehensive hormone testing',
    'BHRT and thyroid optimization',
    'Quarterly follow-ups included',
    'Personalized treatment plans',
  ],
}

export default function PortalPage() {
  // Replace with real Supabase auth session when live
  const [isLoggedIn] = useState(true)

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F4EE] px-4">
        <div className="text-center space-y-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#1E1D1A]">
            Member Portal
          </h1>
          <p className="text-[#7A7870]">Please sign in to access your member dashboard.</p>
          <Link
            href="/signin"
            className="inline-block bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-10">

        {/* Welcome header */}
        <div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#1E1D1A]">
            Welcome back, {mockMember.name}
          </h1>
          <p className="text-[#7A7870] mt-1">Your Rooted Health member dashboard</p>
        </div>

        {/* Member card */}
        <MemberCard
          memberId={mockMember.id}
          name={mockMember.name}
          plan={mockMember.plan}
          status={mockMember.status}
          memberSince={mockMember.memberSince}
        />

        {/* Membership details */}
        <div className="bg-white rounded-2xl border border-[#E2DDD4] p-6 space-y-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A]">
            Membership Details
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#7A7870]">Plan</p>
              <p className="text-[#1E1D1A] font-medium">{mockMember.plan}</p>
            </div>
            <div>
              <p className="text-[#7A7870]">Price</p>
              <p className="text-[#1E1D1A] font-medium">{mockMember.planPrice}</p>
            </div>
            <div>
              <p className="text-[#7A7870]">Status</p>
              <span className="inline-flex items-center gap-1.5 text-[#0F6E56] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1D9E75] inline-block"></span>
                {mockMember.status}
              </span>
            </div>
            <div>
              <p className="text-[#7A7870]">Member Since</p>
              <p className="text-[#1E1D1A] font-medium">{mockMember.memberSince}</p>
            </div>
          </div>

          {/* Benefits list */}
          <div className="pt-2 border-t border-[#E2DDD4]">
            <p className="text-[#7A7870] text-sm mb-3">Plan Benefits</p>
            <ul className="space-y-2">
              {mockMember.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-[#1E1D1A]">
                  <span className="text-[#1D9E75] font-bold flex-shrink-0">&#10003;</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-3">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A]">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-white border border-[#E2DDD4] hover:border-[#1D9E75] hover:bg-[#E1F5EE] rounded-xl p-5 text-center transition-colors group"
            >
              <span className="text-2xl">&#128197;</span>
              <span className="text-sm font-semibold text-[#1E1D1A] group-hover:text-[#0F6E56]">
                Book Appointment
              </span>
            </a>
            <Link
              href="/contact"
              className="flex flex-col items-center gap-2 bg-white border border-[#E2DDD4] hover:border-[#1D9E75] hover:bg-[#E1F5EE] rounded-xl p-5 text-center transition-colors group"
            >
              <span className="text-2xl">&#128172;</span>
              <span className="text-sm font-semibold text-[#1E1D1A] group-hover:text-[#0F6E56]">
                Contact Provider
              </span>
            </Link>
            <Link
              href="/memberships"
              className="flex flex-col items-center gap-2 bg-white border border-[#E2DDD4] hover:border-[#1D9E75] hover:bg-[#E1F5EE] rounded-xl p-5 text-center transition-colors group"
            >
              <span className="text-2xl">&#10024;</span>
              <span className="text-sm font-semibold text-[#1E1D1A] group-hover:text-[#0F6E56]">
                View Benefits
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
