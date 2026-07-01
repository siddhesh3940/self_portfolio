'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a')
    link.href = '/Siddhesh_Vaishnav_Resume1.pdf'
    link.download = 'Siddhesh_Vaishnav_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-900 dark:text-white">Siddhesh</span>
              <br />
              <span className="gradient-text">Vaishnav</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Aspiring AI/ML Engineer & Software Developer
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building intelligent systems and creating innovative solutions 
              through machine learning, artificial intelligence, and full-stack development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all glow-effect hover:pulse-glow"
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all glass-effect hover:glow-effect"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 glass-effect text-gray-700 dark:text-gray-300 hover:glow-effect px-6 py-3 rounded-lg font-medium transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/siddhesh-vaishnav-257960300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/siddhesh3940"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Siddhesh Vaishnav"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ArrowDown className="mx-auto text-gray-400 glow-effect" size={24} />
        </motion.div>
      </div>
    </section>
  )
}
