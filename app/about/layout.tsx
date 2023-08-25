import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About - Martincito Page',
  description: 'Esta es la pagina About',
}

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>{children}</div>
  )
}