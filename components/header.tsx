import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex gap-5 bg-gray-300'>
        <Link href='/' className='bg-blue-300 '>home</Link>
        <div className=' bg-green-400 '>
          <h2>server component</h2>
          <div className='flex gap-0.5'>
            <Link href='/aSet' className='bg-blue-300 px-1  py-1 rounded-2xl'>set</Link>
            <Link href='/bSetFunction' className='bg-blue-300 px-1 py-1 rounded-2xl'>setFunction</Link>
            <Link href='/cGet' className='bg-blue-300 px-1 py-1 rounded-2xl'>get</Link>
            <Link href='/dGetFunction' className='bg-blue-300 px-1 py-1 rounded-2xl'>getFunction</Link>
            <Link href='/eGetAll' className='bg-blue-300 px-1 py-1 rounded-2xl'>getAll</Link>
            <Link href='/fDelete' className='bg-blue-300 px-1 py-1 rounded-2xl'>delete</Link>
            <Link href='/gListAndDelete' className='bg-blue-300 px-1 py-1 rounded-2xl'>list&delete</Link>
            <Link href='/hCheck' className='bg-blue-300 px-1 py-1 rounded-2xl'>check</Link>

          </div>
        </div>
        <div  className=' bg-orange-400'>
          <h2>client component</h2>
          <div className='flex gap-1'>
            <Link href='/iSet' className='bg-blue-300 px-1 py-1 rounded-2xl'>set</Link>
            <Link href='/jSetFunction' className='bg-blue-300 px-1 py-1 rounded-2xl'>setFunction</Link>
            <Link href='/kSimpleGet' className='bg-blue-300 px-1 py-1 rounded-2xl'>simpleGet</Link>
            <Link href='/lGet' className='bg-blue-300 px-1 py-1 rounded-2xl'>get</Link>
            <Link href='/mDelete' className='bg-blue-300 px-1 py-1 rounded-2xl'>delete</Link>
            <Link href='/nGetAll' className='bg-blue-300 px-1 py-1 rounded-2xl'>getAll</Link>
          </div>
        </div>

        <div  className=' bg-fuchsia-400'>
          <h2>js-cookie(just client)</h2>
          <div className='flex gap-1'>
            <Link href='/o1Set' className='bg-blue-300 px-1 py-1 rounded-2xl'>set</Link>
            <Link href='/o2GetAndDelete' className='bg-blue-300 px-1 py-1 rounded-2xl'>getAndDelete</Link>
          </div>
        </div>

        <div  className=' bg-yellow-400'>
          <h2>nookies</h2>
          <div className='flex gap-1'>
            <Link href='/p1SetServer' className='bg-blue-300 px-1 py-1 rounded-2xl'>setServer</Link>
            <Link href='/p2GetAndDeleteServer' className='bg-blue-300 px-1 py-1 rounded-2xl'>getAndDeleteServer</Link>
            <Link href='/p3SetClient' className='bg-blue-300 px-1 py-1 rounded-2xl'>setClient</Link>
            <Link href='/p4GetAndDeleteClient' className='bg-blue-300 px-1 py-1 rounded-2xl'>getAndDeleteClient</Link>
          </div>
        </div>


    </div>
  )
}

export default Header