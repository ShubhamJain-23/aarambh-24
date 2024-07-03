import React from 'react'
import Link from 'next/link'
export default function Custom404() {
  return (
      <main className='text-center'>
        <div className='mx-[1rem] md:mx-[5rem] lg:mx-[5rem] my-8 mb-[5rem] md:my-[10rem] text-center align-center'>
        
          <h1 className='text-3xl font-bold'>Page Not Found</h1>
          <p className='text-xl'>We could not find the page you were looking for.</p>
          <p className='text-xl'>Go back to the <Link href="/" className='text-footerpink font-bold hover:text-darkcyan'>Home Page.</Link></p>
        </div>
      </main>

  )
}
