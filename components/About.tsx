'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate computer engineering student with a deep interest in artificial intelligence, 
            machine learning, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>BE Computer Engineering</strong><br />
                    Vidyavardhini&apos;s College of Engineering and Technology (VCET), Mumbai<br />
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Target className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Career Goals</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Aspiring to become a leading AI/ML engineer, focusing on developing intelligent systems 
                    that solve real-world problems and contribute to technological advancement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Heart className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Interests</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Beyond technology, I&apos;m passionate about music and singing. I&apos;ve won several competitions 
                    including Runner-up at Aurangabad Idol and Winner at Zeal College Festival.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Personal Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My journey in technology began with a curiosity about how intelligent systems work. 
                This led me to pursue computer engineering with a specialization in AI and ML.
              </p>
              <p>
                Through my internship at SmartED Innovations and various projects, I&apos;ve gained 
                hands-on experience in developing AI-powered applications, from image enhancement 
                systems to traffic optimization solutions.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technological 
                advancements. My goal is to bridge the gap between theoretical knowledge and 
                practical applications in the field of artificial intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}