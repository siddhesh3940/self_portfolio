import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siddhesh Vaishnav - AI/ML Engineer & Software Developer',
  description: 'Portfolio of Siddhesh Vaishnav - Aspiring AI/ML Engineer and Full-Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}