import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex gap-5 bg-gray-300'>
        <Link href='/' className='bg-blue-300 '>home</Link>
        <div className=' bg-green-400 '>
          <h2>server component</h2>
          <div className='flex gap-0.5'>
            <Link href='/serverLogin' className='bg-blue-300 px-1  py-1 rounded-2xl'>serverLogin</Link>
            <Link href='/serverDashboard' className='bg-blue-300 px-1  py-1 rounded-2xl'>serverDashboard</Link>
          </div>
        </div>
    </div>
  )
}

export default Header