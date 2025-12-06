'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL', level: 75 }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: Brain,
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'Flask', level: 85 },
      { name: 'PyTorch', level: 75 },
      { name: 'Next.js', level: 80 },
      { name: 'TensorFlow', level: 70 }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'OpenCV', level: 75 },
      { name: 'Docker', level: 65 },
      { name: 'AWS', level: 60 }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'SQLite', level: 85 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect p-6 rounded-2xl shadow-lg hover:glow-effect transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg glow-effect floating-animation">
                  <category.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full glow-effect"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Quick Skills Overview
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(category => 
              category.skills.map((skill, index) => (
                <motion.div
                  key={`${category.title}-${skill.name}`}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all glow-effect hover:pulse-glow"
                >
                  {skill.name}
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 glass-effect rounded-xl shadow-lg hover:glow-effect transition-all duration-300 floating-animation">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Programming Languages</div>
          </div>
          
          <div className="text-center p-6 glass-effect rounded-xl shadow-lg hover:glow-effect transition-all duration-300 floating-animation">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Frameworks & Libraries</div>
          </div>
          
          <div className="text-center p-6 glass-effect rounded-xl shadow-lg hover:glow-effect transition-all duration-300 floating-animation">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Tools & Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}