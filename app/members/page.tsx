import { Navbar } from '../../components/Navbar'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Vrishak Vemuri",
    role: "Co-President",
    image: "/vrishakvemuri.jpg",
    department: "Leadership"
  },
  {
    name: "Eshan Iyer",
    role: "Co-President",
    image: "/eshaniyer.webp",
    department: "Leadership"
  },
  {
    name: "Aarav Maram",
    role: "Treasurer and Engineering Lead",
    image: "/aaravmaram.jpg",
    department: "Engineering"
  },
  {
    name: "Michael Yaroschuk",
    role: "Computer Science Lead",
    image: "/michealyaroschuk.jpg",
    department: "Technology"
  },
  {
    name: "Shayaan Doodekula",
    role: "Web Master",
    image: "/logo.png",
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
              <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <Image src="/logo.png" alt="Atlas Autoware Logo" width={30} height={30} />
                  <p className="text-sm md:text-base">&copy; 2024 AtlasAutoware - A 501(c)(3) Non-Profit Organization. All rights reserved</p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/Facebook_Logo_Primary.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="https://x.com/AtlasAutoware/following" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo-white.png" alt="Twitter" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/atlasautoware/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Instagram_Glyph_Gradient.png" alt="Instagram" width={24} height={24} />
                  </a>
                </div>
              </div>
            </footer>
    </div>
  )
}

