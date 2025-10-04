'use client'

import { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Atlas Autoware?",
    answer: "Atlas Autoware is the premier high school-led self-driving car team in the United States. Based out of TJHSST in Alexandria, VA, we're pushing the boundaries of autonomous vehicle technology and inspiring the next generation of innovators."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with cutting-edge technologies in robotics and AI, including machine learning techniques like Convolutional Neural Networks (CNNs) and reinforcement learning. We also develop novel algorithms spanning from computer vision to graph theory."
  },
  {
    question: "How can I get involved?",
    answer: "We're always looking for passionate high school students to join our team! If you're interested in robotics, AI, or autonomous vehicles, reach out to us through our contact form. We also welcome mentors and sponsors who want to support our mission."
  },
  {
    question: "What competitions do you participate in?",
    answer: "We're proud to be the first and only high school team to compete in the F1 Tenth competition, where we go head-to-head with university teams from around the world. We also participate in various robotics and AI challenges throughout the year."
  },
  {
    question: "How do you contribute to education and community engagement?",
    answer: "We organize workshops, provide educational resources, and run outreach programs to inspire and educate others about robotics and AI. Our team members also mentor younger students and participate in STEM advocacy initiatives."
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-accent">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-primary">{question}</span>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
      </button>
      {isOpen && (
        <div className="pb-4 ">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">About Atlas Autoware</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image 
                src="/team-photo.jpg" 
                alt="Atlas Autoware Team" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg">
                Atlas Autoware is revolutionizing the world of autonomous vehicles, one innovation at a time. As the first and only high school-led team to compete in F1 Tenth, we're not just building self-driving cars - we're shaping the future of transportation and inspiring the next generation of engineers and innovators.
              </p>
              <p className="text-lg ">
                Our mission goes beyond technology. We're committed to education, community engagement, and pushing the boundaries of what young minds can achieve in the fields of robotics and AI.
              </p>
            </div>
          </div>

          <div className="mb-16 bg-secondary bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary">Why We Formed Atlas Autoware</h2>
            <p className="text-lg  mb-4">
              Atlas Autoware was born out of a shared passion for pushing the boundaries of autonomous vehicle technology. As high school students at Thomas Jefferson High School for Science and Technology, we recognized a gap in the field: while university teams were making strides in autonomous racing, there was no representation from high school students.
            </p>
            <p className="text-lg  mb-4">
              We formed Atlas Autoware with three main goals:
            </p>
            <ol className="list-decimal list-inside text-lg  mb-4 space-y-2">
              <li>To prove that high school students are capable of competing at the highest levels of autonomous vehicle development</li>
              <li>To inspire and educate our peers about the exciting possibilities in robotics and AI</li>
              <li>To contribute meaningful innovations to the field of autonomous vehicles</li>
            </ol>
            <p className="text-lg ">
              By forming Atlas Autoware, we've created a platform for high school students to gain hands-on experience with cutting-edge technology, collaborate with industry professionals, and make a real impact in the world of autonomous vehicles.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-primary">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image src="/logo.png" alt="Atlas Autoware Logo" width={30} height={30} />
            <p className="text-sm md:text-base">&copy; 2024 AtlasAutoware - A 501(c)(3) Non-Profit Organization. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

