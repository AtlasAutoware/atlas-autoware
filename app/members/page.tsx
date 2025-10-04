import { Navbar } from '../../components/Navbar'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Vrishak Vemuri",
    role: "Co-President",
    image: "/assets/img/team/officers/459212774_534453352273716_5818706977539410234_n.jpg",
    department: "Leadership"
  },
  {
    name: "Eshan Iyer",
    role: "Co-President",
    image: "/assets/img/team/officers/IMG_1311.webp",
    department: "Leadership"
  },
  {
    name: "Logan Bradley",
    role: "Secretary",
    image: "/assets/img/team/officers/IMG_1308.webp",
    department: "Leadership"
  },
  {
    name: "Aarav Maram",
    role: "Treasurer and Engineering Lead",
    image: "/assets/img/team/officers/IMG_1315.jpg",
    department: "Engineering"
  },
  {
    name: "Michael Yaroschuk",
    role: "Web Master",
    image: "/assets/img/team/officers/458374250_1519871045589682_7325685962597737582_n.jpg",
    department: "Technology"
  },
  {
    name: "Parasmai Salunkhe",
    role: "CS Lead",
    image: "/assets/img/team/Parasmai.webp",
    department: "Technology"
  }
]

const departments = ["Leadership", "Engineering", "Technology"]

export default function Members() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-16 text-primary">Our Team</h1>
          
          
          {departments.map((department) => (
            <div key={department} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">{department}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers
                  .filter((member) => member.department === department)
                  .map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={400} 
                        height={400} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-primary">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-primary text-white py-8">
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

