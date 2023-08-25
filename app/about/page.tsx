import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <p>ABOUT PAGE</p>
      <p className='text-4xl font-semibold bg-blue-500 rounded p-2'>
        ir a <Link href="/">Home</Link>
      </p>
      <p className='text-4xl font-semibold bg-yellow-500 rounded p-2'>
        ir a <Link href="/contact">Contact</Link>
      </p>
      <p>Estas en app/about/page.tsx</p>

    </main>
  )
}

export default AboutPage