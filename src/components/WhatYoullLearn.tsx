'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const learningItems = [
  {
    title: 'YouTube Strategy',
    description: 'Develop a winning content strategy tailored for SaaS companies.',
    icon: '📊'
  },
  {
    title: 'Video Optimization',
    description: 'Learn SEO techniques to maximize your video&apos;s reach and engagement.',
    icon: '🔍'
  },
  {
    title: 'Analytics & Growth',
    description: 'Understand YouTube analytics to drive channel growth and conversions.',
    icon: '📈'
  },
  {
    title: 'Audience Building',
    description: 'Build a loyal subscriber base that converts into paying customers.',
    icon: '🎯'
  },
]

export default function WhatYoullLearn() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What You&apos;ll Learn
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <motion.div 
                  className="mt-4 text-orange-500 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
