import Link from "next/link";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <p>HOME PAGE</p>

      <p className='text-4xl font-semibold bg-red-500 rounded p-2'>
        ir a <Link href="/about">About</Link>
      </p>
      <p className='text-4xl font-semibold bg-yellow-500 rounded p-2'>
        ir a <Link href="/contact">Contact</Link>
      </p>
      <p>Estas en /app/page.tsx</p>

    </main>
  )
}
