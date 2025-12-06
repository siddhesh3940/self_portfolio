'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code } from 'lucide-react'

const projects = [
  {
    title: 'FreelanceHub CRM',
    description: 'AI-powered CRM platform for freelancers with intelligent client management, project tracking, automated invoice generation, Stripe payments, and real-time updates.',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'OpenAI API', 'Prisma', 'Tailwind CSS', 'Stripe', 'BullMQ', 'Redis'],
    github: 'https://github.com/siddhesh3940/freelancehub-crm',
    demo: 'https://freelancehub-crm.vercel.app',
    category: 'Full-Stack'
  },
  {
    title: 'AI Video/Image Enhancer',
    description: 'Advanced AI-powered application for enhancing video and image quality using deep learning techniques. Features real-time processing and multiple enhancement algorithms.',
    tech: ['Python', 'FastAPI', 'Next.js', 'PyTorch', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/siddheshvaishnav/ai-enhancer',
    demo: 'https://ai-enhancer-demo.vercel.app',
    category: 'AI/ML'
  },
  {
    title: 'Traffic Optimization System',
    description: 'Smart traffic management system using computer vision and machine learning to optimize traffic flow and reduce congestion in urban areas.',
    tech: ['Flask', 'MySQL', 'OpenCV', 'Python', 'Computer Vision', 'Machine Learning'],
    github: 'https://github.com/siddheshvaishnav/traffic-optimizer',
    demo: 'https://traffic-optimizer-demo.herokuapp.com',
    category: 'Computer Vision'
  },
  {
    title: 'Inventory Management System',
    description: 'Full-stack web application for comprehensive inventory management with real-time tracking, analytics, and automated reporting features.',
    tech: ['Django', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Chart.js'],
    github: 'https://github.com/siddheshvaishnav/inventory-management',
    demo: 'https://inventory-mgmt-demo.herokuapp.com',
    category: 'Full-Stack'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, computer vision, and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden shadow-lg h-[500px] flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
                  <Code className="text-white drop-shadow-lg" size={48} />
                </div>
                <div className="absolute top-4 right-4 floating-animation">
                  <span className="glass-effect text-white px-3 py-1 rounded-full text-sm font-medium glow-effect">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 relative flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-all floating-animation">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/siddhesh3940"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}