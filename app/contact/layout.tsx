import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Contact - Martincito Page',
  description: 'Esta es la pagina Contact',
}

export default function contactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>{children}</div>
  )
}