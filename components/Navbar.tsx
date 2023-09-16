import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' flex justify-center m-4 bg-amber-400 rounded-full'>

        <div className=' space-x-12 > * + * text-white text-lg p-4 font-medium '>
            <Link href="/Buttons">Buttons</Link>
            <Link href='/'><span className='select-none hover:text-amber-900 text-xl font-semibold'>Almond UI</span></Link>
            <Link href="/Input">Input</Link>
        </div>
    </nav>
  )
}

export default Navbar