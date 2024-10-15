'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechSaaS',
    image: 'https://via.placeholder.com/100',
    quote: 'This program transformed our YouTube strategy. We\'ve seen a 300% increase in subscribers and a significant boost in product sign-ups.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, CloudSolutions',
    image: 'https://via.placeholder.com/100',
    quote: 'The insights we gained were invaluable. Our YouTube channel is now our top source of qualified leads.',
  },
  {
    name:  'Mike Johnson',
    role: 'Founder, DataPro',
    image: 'https://via.placeholder.com/100',
    quote: 'I was skeptical at first, but the results speak for themselves. Our YouTube presence has become a game-changer for our SaaS business.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Students Are Saying
        </motion.h2>
        <div className="relative h-96">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full mb-6 border-4 border-orange-500"
              />
              <p className="text-2xl italic mb-6 max-w-3xl">
                "{testimonials[currentIndex].quote}"
              </p>
              <h3 className="font-semibold text-xl">{testimonials[currentIndex].name}</h3>
              <p className="text-orange-500">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                currentIndex === index ? 'bg-orange-500' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}