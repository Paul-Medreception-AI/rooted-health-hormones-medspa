'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Answer {
  step: number
  value: string
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: "What's your main health goal?",
      options: [
        'Hormone Balance',
        'Weight Loss',
        'Primary Care',
        'Full Optimization'
      ]
    },
    {
      question: "Which symptoms bother you most?",
      options: [
        'Fatigue & Brain Fog',
        'Weight Gain & Metabolism',
        'Mood & Sleep',
        'Multiple Areas'
      ]
    },
    {
      question: "How important is in-person care vs virtual?",
      options: [
        'Fully Virtual',
        'Mix of Both',
        'Prefer In-Person'
      ]
    },
    {
      question: "What's your monthly budget?",
      options: [
        '$99-149/mo',
        '$150-299/mo',
        '$300+/mo'
      ]
    },
    {
      question: "How soon do you want to start?",
      options: [
        'ASAP',
        'Within a month',
        'Just exploring'
      ]
    }
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, { step: currentStep, value }]
    setAnswers(newAnswers)

    if (currentStep === 4) {
      setShowResult(true)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleStartOver = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResult(false)
  }

  const getRecommendation = () => {
    const answerValues = answers.map(a => a.value)
    
    const hasWeightLoss = answerValues.includes('Weight Loss') || answerValues.includes('Weight Gain & Metabolism')
    const hasHighBudget = answerValues.includes('$300+/mo')
    const hasMidBudget = answerValues.includes('$150-299/mo')
    const hasLowBudget = answerValues.includes('$99-149/mo')
    const hasHormone = answerValues.includes('Hormone Balance')
    const hasFatigue = answerValues.includes('Fatigue & Brain Fog')
    const hasMultiple = answerValues.includes('Multiple Areas')
    const isExploring = answerValues.includes('Just exploring')

    if (hasWeightLoss || hasHighBudget) {
      return {
        name: 'Elite GLP-1 Program',
        price: '$349/mo',
        benefits: [
          'Prescription GLP-1 medications (semaglutide or tirzepatide)',
          'Weekly provider check-ins and dose adjustments',
          'Comprehensive metabolic and hormone panel',
          'Personalized nutrition and lifestyle coaching',
          'Priority scheduling and 24/7 messaging access'
        ]
      }
    }

    if (hasHormone || hasFatigue || hasMultiple || hasMidBudget) {
      return {
        name: 'Hormone Optimization',
        price: '$149-199/mo',
        benefits: [
          'Comprehensive hormone testing and analysis',
          'Bioidentical hormone replacement therapy',
          'Monthly provider consultations',
          'Supplement protocols and nutritional guidance',
          'Ongoing monitoring and adjustments'
        ]
      }
    }

    return {
      name: 'Virtual DPC',
      price: '$99/mo',
      benefits: [
        'Unlimited virtual visits with LaDonna Walker NP',
        'Same-day or next-day appointments',
        'Direct messaging access to your provider',
        'Prescription management and refills',
        'Preventive care and wellness guidance'
      ]
    }
  }

  const recommendation = showResult ? getRecommendation() : null

  const progressPercentage = ((currentStep + 1) / 5) * 100

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <div className="bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold mb-4">
            Find Your Perfect Membership
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-xl opacity-90">
            Answer 5 quick questions to get a personalized recommendation
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mt-12 mb-20">
        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="w-full bg-[#E2DDD4] h-2 rounded-full mb-8">
              <div
                className="bg-[#1D9E75] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-[#7A7870] text-sm font-[family-name:var(--font-dm-sans)]">
                Step {currentStep + 1} of 5
              </p>
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="text-[#7A7870] text-sm underline cursor-pointer font-[family-name:var(--font-dm-sans)] hover:text-[#1E1D1A]"
                >
                  Back
                </button>
              )}
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1E1D1A] mb-8">
              {questions[currentStep].question}
            </h2>

            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full border-2 border-[#E2DDD4] rounded-xl p-4 text-left text-[#1E1D1A] hover:border-[#1D9E75] hover:bg-[#E1F5EE] transition-all font-[family-name:var(--font-dm-sans)]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1E1D1A] mb-2">
                Your Recommended Plan
              </h2>
              <p className="text-[#7A7870] font-[family-name:var(--font-dm-sans)]">
                Based on your answers, we recommend:
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E1F5EE] to-white border-2 border-[#1D9E75] rounded-xl p-8 mb-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1E1D1A] mb-2">
                {recommendation?.name}
              </h3>
              <p className="text-[#1D9E75] font-bold text-2xl mb-6 font-[family-name:var(--font-dm-sans)]">
                {recommendation?.price}
              </p>

              <ul className="space-y-3 mb-8">
                {recommendation?.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#1E1D1A] font-[family-name:var(--font-dm-sans)]"
                  >
                    <svg
                      className="w-6 h-6 text-[#1D9E75] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="/contact"
                  className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center font-[family-name:var(--font-dm-sans)]"
                >
                  Book a Free Consultation
                </a>
                <Link
                  href="/memberships"
                  className="border-2 border-[#1D9E75] text-[#1D9E75] hover:bg-[#E1F5EE] px-8 py-4 rounded-lg font-semibold transition-colors inline-block w-full text-center font-[family-name:var(--font-dm-sans)]"
                >
                  See All Plans
                </Link>
              </div>
            </div>

            <button
              onClick={handleStartOver}
              className="text-[#7A7870] text-sm underline cursor-pointer mx-auto block hover:text-[#1E1D1A] font-[family-name:var(--font-dm-sans)]"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  )
}