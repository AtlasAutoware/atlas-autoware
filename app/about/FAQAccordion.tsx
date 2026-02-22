'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Atlas Autoware?',
    answer:
      'Atlas Autoware is the premier high school-led self-driving car team in the United States. Based out of TJHSST in Alexandria, VA, we push the boundaries of autonomous vehicle technology and inspire the next generation of innovators.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We work with cutting-edge AI and robotics technologies, including convolutional neural networks (CNNs), reinforcement learning, computer vision, and novel graph-theory algorithms — all applied to real autonomous racing hardware.',
  },
  {
    question: 'How can I get involved?',
    answer:
      "We're always looking for passionate high school students. If you're interested in robotics, AI, or autonomous vehicles, reach out through our contact email. We also welcome mentors and sponsors who want to support our mission.",
  },
  {
    question: 'What competitions do you participate in?',
    answer:
      "We're proud to be the first and only high school team to compete in the F1 Tenth competition, racing head-to-head with university teams from around the world. We also participate in various robotics and AI challenges throughout the year.",
  },
  {
    question: 'How do you contribute to education and community?',
    answer:
      'We organise workshops, provide educational resources, and run outreach programs to inspire others about robotics and AI. Team members also mentor younger students and participate in STEM advocacy initiatives.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
      >
        <span className="font-semibold text-white leading-snug" style={{ fontFamily: 'var(--font-space)' }}>
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-red-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/[0.06]">
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  )
}

export function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
