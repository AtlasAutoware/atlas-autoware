import { Navbar } from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const sponsorshipLevels = [
  {
    name: "Platinum",
    amount: "$10,000+",
    benefits: [
      "Large logo on team vehicle",
      "Prominent website placement",
      "Social media shoutouts",
      "VIP invitations to team events",
      "Exclusive team merchandise",
      "All Gold level benefits"
    ]
  },
  {
    name: "Gold",
    amount: "$5,000 - $9,999",
    benefits: [
      "Medium logo on team vehicle",
      "Website recognition",
      "Team photo and thank you plaque",
      "All Silver level benefits"
    ]
  },
  {
    name: "Silver",
    amount: "$1,000 - $4,999",
    benefits: [
      "Small logo on team vehicle",
      "Website mention",
      "Team updates and newsletters"
    ]
  },
  {
    name: "Bronze",
    amount: "Up to $999",
    benefits: [
      "Website mention",
      "Team updates and newsletters"
    ]
  }
]

export default function Sponsorship() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-16 text-navy">Sponsorship Opportunities</h1>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-navy">Why Sponsor Atlas Autoware?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy">Support Innovation</h3>
                <p className="text-slate-600">Your sponsorship directly contributes to the development of cutting-edge autonomous vehicle technology, pushing the boundaries of what's possible in the field.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy">Inspire Future Engineers</h3>
                <p className="text-slate-600">By supporting our team, you're helping to inspire and educate the next generation of engineers, programmers, and innovators in the autonomous vehicle industry.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy">Brand Visibility</h3>
                <p className="text-slate-600">Gain exposure for your brand through our competitions, events, and online presence, reaching a tech-savvy and forward-thinking audience.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy">Community Impact</h3>
                <p className="text-slate-600">Your support enables us to engage with the community through workshops, demonstrations, and outreach programs, promoting STEM education and awareness.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-navy">Sponsorship Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsorshipLevels.map((level, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-2 text-navy">{level.name}</h3>
                  <p className="text-xl font-semibold mb-4 text-red-600">{level.amount}</p>
                  <ul className="list-disc list-inside text-slate-600">
                    {level.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-navy">Become a Sponsor Today</h2>
            <p className="text-lg mb-8 text-slate-600">Join us in shaping the future of autonomous vehicles and supporting the next generation of innovators.</p>
            <Button asChild variant="secondary" size="sm">
              <a href="mailto:contact@atlasautoware.org">Become a Sponsor</a>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Atlas Autoware Logo" width={30} height={30} />
            <p>&copy; 2024 AtlasAutoware - A 501(c)(3) Non-Profit Organization. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

