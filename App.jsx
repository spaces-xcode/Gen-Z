import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Users, Heart, GraduationCap, Briefcase, AlertTriangle } from 'lucide-react'
import './App.css'

// Import protest images
import protest1 from './assets/mmYLDY2xGPrz.jpg'
import protest2 from './assets/g7pjvLAutznG.jpg'
import protest3 from './assets/fkJkykQA7cZT.jpg'
import protest4 from './assets/YegSGIJWw3Z1.jpg'
import protest5 from './assets/tiljKbhvlZIO.jpg'
import protest6 from './assets/jl1J2qyOeDJ3.jpg'
import protest7 from './assets/OUXFbUn8q0vX.jpg'
import protest8 from './assets/F2xGgye4Emk1.jpg'

const protestImages = [protest1, protest2, protest3, protest4, protest5, protest6, protest7, protest8]

function App() {
  const { scrollYProgress } = useScroll()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Auto-scroll through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % protestImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center"
        style={{ opacity }}
      >
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {protestImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 0.4 : 0,
                scale: index === currentImageIndex ? 1.1 : 1
              }}
              transition={{ duration: 1.5 }}
            >
              <img 
                src={image} 
                alt={`Morocco protest ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl"
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            Morocco's Gen-Z Uprising
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Call for Justice and Reform
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Button 
              onClick={scrollToContent}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More <ChevronDown className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div id="content" className="relative z-10">
        {/* Voice of Generation Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black"
          style={{ y: y2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-red-400">The Voice of a Generation</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  Morocco is witnessing an unprecedented wave of youth-led protests that have captured international attention. 
                  For four consecutive days, hundreds of young Moroccans have taken to the streets across the nation, 
                  demanding fundamental changes to their country's social infrastructure and governance.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  These demonstrations, organized primarily through social media by groups such as <strong className="text-red-400">GenZ 212</strong> and 
                  the <strong className="text-red-400">Moroccan Youth Voice</strong>, represent a generational awakening that echoes similar movements across the globe.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={protest4} 
                  alt="Morocco Gen-Z protests"
                  className="rounded-lg shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-red-600 bg-opacity-20 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Demands Section */}
        <motion.section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-red-400">Core Demands</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The protesters' demands center on three fundamental pillars that form the foundation of any functioning society
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Healthcare */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-800 to-red-900 p-8 rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-16 h-16 text-red-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center text-red-300">Healthcare Reform</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Young Moroccans demand comprehensive healthcare reform, highlighting stark inadequacies in medical infrastructure.
                </p>
                <blockquote className="border-l-4 border-red-400 pl-4 italic text-red-200">
                  "At least the FIFA stadium will have a first aid kit! Our hospitals don't."
                </blockquote>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-800 to-red-900 p-8 rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <GraduationCap className="w-16 h-16 text-orange-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-300">Educational Excellence</h3>
                <p className="text-gray-200 leading-relaxed">
                  Calls for significant improvements to the educational system, including better funding for schools and universities, 
                  improved teacher training, and modernized curricula to prepare students for global competition.
                </p>
              </motion.div>

              {/* Employment */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-800 to-orange-900 p-8 rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <Briefcase className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center text-yellow-300">Employment Opportunities</h3>
                <p className="text-gray-200 leading-relaxed">
                  Demands for government policies that prioritize job creation, support for entrepreneurship, 
                  and economic development that benefits ordinary citizens rather than elite interests.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Security Forces Section */}
        <motion.section className="py-20 px-4 bg-gradient-to-r from-red-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-6 text-red-400">Security Force Response</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Human rights concerns over excessive force and arbitrary arrests
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={protest5} 
                  alt="Security forces and protesters"
                  className="rounded-lg shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-red-600 bg-opacity-30 rounded-lg"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-red-800 bg-opacity-50 p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-red-300">Documented Abuses</h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    The <strong>Moroccan Association for Human Rights (AMDH)</strong> has formally accused security forces 
                    of physically assaulting protesters and conducting arbitrary arrests without proper legal justification.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    Approximately <strong className="text-red-400">200 protesters</strong> have been arrested during the four days of demonstrations, 
                    with 37 young people remaining on bail pending investigations.
                  </p>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Specific Incidents</h3>
                  <p className="text-gray-200 leading-relaxed">
                    In the city of Oujda, a protester suffered injuries after being struck by a police vehicle, 
                    representing concerning patterns of excessive force against peaceful demonstrators.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Image Gallery Section */}
        <motion.section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-red-400">Voices from the Streets</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {protestImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img 
                    src={image} 
                    alt={`Morocco protest scene ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-600 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Global Movement Section */}
        <motion.section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Users className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-6 text-red-400">A Global Movement</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The Moroccan protests are part of a broader global phenomenon of youth-led political movements. 
                Similar demonstrations have recently occurred in Nepal, Indonesia, the Philippines, and Madagascar, 
                suggesting that young people worldwide are increasingly willing to challenge established political systems 
                that they perceive as failing to address their needs.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="py-20 px-4 bg-red-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">The Path Forward</h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The ongoing protests represent a critical moment in Morocco's political development. 
                The demands for better healthcare, education, and economic opportunities are fundamentally reasonable 
                and reflect basic expectations that citizens should have of their government.
              </p>
              <p className="text-lg text-gray-300 italic">
                "The coming days and weeks will be crucial in determining whether Morocco can find a path toward meaningful reform 
                that addresses the legitimate grievances of its young citizens while respecting their fundamental rights."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4">
              This report is based on information from multiple international news sources and human rights organizations 
              documenting the ongoing protests in Morocco as of October 1, 2025.
            </p>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
