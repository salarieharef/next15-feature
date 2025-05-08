import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-10 flex gap-5 bg-gray-300'>
        <Link href='/' className='bg-blue-300 '>home</Link>
        <Link href='/login' className='bg-blue-300 '>login</Link>
        <Link href='/serverAction' className='bg-blue-300 '>serverAction</Link>
    </div>
  )
}

export default Header