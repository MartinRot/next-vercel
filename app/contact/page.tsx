import Link from 'next/link'

const contactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

        <p>CONTACT PAGE</p>
        <p className='text-4xl font-semibold bg-blue-500 rounded p-2'>
            ir a <Link href="/">Home</Link>
        </p>
        <p className='text-4xl font-semibold bg-red-500 rounded p-2'>
            ir a <Link href="/about">About</Link>
        </p>
        <p>Estas en app/contact/page.tsx</p>
    </main>
  )
}

export default contactPage