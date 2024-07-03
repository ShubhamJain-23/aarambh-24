import Link from 'next/link';
import React from 'react'

function Workshops() {
  return (

        <main className='text-center'>
        <div className='mx-[1rem] md:mx-[5rem] lg:mx-[5rem] my-8 mb-[5rem] md:my-[10rem] text-center align-center'>
        
          <h1 className='text-3xl font-bold'>This page is currently in Development.</h1>
          <p className='text-xl my-2'>Visit US back later until we build some amazing stuff for you.</p>
          <p className='text-xl'>Go back to the <Link href="/" className='text-footerpink font-bold hover:text-darkcyan'>Home Page.</Link></p>
        </div>
      </main>
  )
}

export default Workshops;