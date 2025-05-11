import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-5'>
        <Link href="/">Home</Link>
        <Link href="/course">Course</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/editInfo">EditInfo</Link>
    </div>
  )
}

export default Header