import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouTube Management for SaaS Companies',
  description: 'Master the art of YouTube marketing and drive explosive growth for your SaaS business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Yellowtail&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}