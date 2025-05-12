import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-10 flex gap-5 bg-gray-300'>
        <Link href='/' className='bg-blue-300 '>home</Link>
        <Link href='/login' className='bg-blue-300 '>login</Link>
        <Link href='/serverAction' className='bg-blue-300 '>serverAction</Link>
        <Link href='/serverAction2' className='bg-blue-300 '>serverAction2</Link>
        <Link href='/serverAction3' className='bg-blue-300 '>serverAction3</Link>
        <Link href='/serverAction4' className='bg-blue-300 '>useFormStatus</Link>
        <Link href='/serverAction5' className='bg-blue-300 '>useActionState</Link>

    </div>
  )
}

export default Header