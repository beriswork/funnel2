'use client'

import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function Enroll() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0.5, 1])

  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ scale, opacity }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your SaaS Company&apos;s YouTube Presence?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join our program and learn how to leverage YouTube to drive growth, increase brand awareness, and boost conversions for your SaaS business.
        </motion.p>
        <motion.button
          className="bg-white text-orange-500 px-8 py-4 rounded-full text-xl font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </section>
  )
}
