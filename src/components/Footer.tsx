'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socialIcons = [
  { Icon: FaFacebook, href: 'https://facebook.com' },
  { Icon: FaTwitter, href: 'https://twitter.com' },
  { Icon: FaInstagram, href: 'https://instagram.com' },
  { Icon: FaLinkedin, href: 'https://linkedin.com' },
  { Icon: FaYoutube, href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <div className="flex justify-center space-x-6">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#F97316' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-3xl" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
          <p>&copy; 2023 YouTube Management for SaaS. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}