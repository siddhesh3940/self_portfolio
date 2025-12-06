'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'AI Intern',
    company: 'SmartED Innovations',
    duration: 'Jul 2025 - Sep 2025',
    location: 'Remote',
    description: [
      'Developed AI-powered educational tools and learning management systems',
      'Implemented machine learning algorithms for personalized learning experiences',
      'Collaborated with cross-functional teams to deliver innovative EdTech solutions',
      'Gained expertise in Python, TensorFlow, and educational technology platforms'
    ],
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'EdTech', 'Data Analysis']
  }
]

const achievements = [
  {
    title: 'Oracle Certified - OCI Data Science',
    year: '2025',
    description: 'Certified in Oracle Cloud Infrastructure Data Science services and best practices'
  },
  {
    title: 'Oracle Certified - AI Foundations',
    year: '2025',
    description: 'Demonstrated proficiency in artificial intelligence fundamentals and applications'
  },
  {
    title: 'Runner-up - Aurangabad Idol',
    year: '2024',
    description: 'Secured second position in prestigious singing competition'
  },
  {
    title: 'Winner - Zeal College Festival',
    year: '2024',
    description: 'First place in college-level singing competition'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experience and notable achievements in technology and beyond
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3"
          >
            <Briefcase className="text-blue-600" size={28} />
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Certifications & Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}