import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex  bg-gray-300'>
            <Link href='/' className='bg-amber-600 p-1' >home</Link>

        <div className='bg-[aqua]'>
          <h1>simple</h1>
          <div className='flex gap-1'>
            <Link href='/useFormStatusAction' className='bg-orange-200 p-1 text-sm' >useFormStatusAction</Link>
            <Link href='/useFormStatusOnSubmit' className='bg-orange-200 p-1 text-sm' >useFormStatusOnSubmit</Link>

            <Link href='/useTransitionAction' className='bg-yellow-300 p-1 text-sm' >useTransitionAction</Link>
            <Link href='/useTransitionOnSubmit' className='bg-yellow-300 p-1 text-sm' >useTransitionOnSubmit</Link>
           
           
            <Link href='/useformstateAction' className='bg-green-200 p-1 text-sm' >useformstateAction</Link>
            <Link href='/useformstateOnSubmit' className='bg-green-200 p-1 text-sm' >useformstateOnSubmit</Link>

            <Link href='/useActionStateAction' className='bg-red-200 p-1 text-sm' >useActionStateAction</Link>
            <Link href='/useActionStateOnSubmit' className='bg-red-200 p-1 text-sm' >useActionStateOnSubmit</Link>

            {/* <Link href='/noStartTransition' className='bg-blue-400 p-1 text-sm' >noStartTransition</Link>
            <Link href='/withStartTransition' className='bg-blue-400 p-1 text-sm' >withStartTransition</Link> */}
            <Link href='/startTransition' className='bg-blue-400 p-1 text-sm' >startTransition</Link>

          </div>

          
   
        </div>

{/*         
        <Link href='/' className='bg-blue-300 '>home</Link>
        <Link href='/login' className='bg-blue-300 '>login</Link>
        <Link href='/serverAction' className='bg-blue-300 '>serverAction</Link>
        <Link href='/serverAction2' className='bg-blue-300 '>serverAction2</Link>
        <Link href='/serverAction3' className='bg-blue-300 '>serverAction3</Link>
        <Link href='/serverAction4' className='bg-blue-300 '>useFormStatus</Link>
        <Link href='/serverAction5' className='bg-blue-300 '>useActionState</Link>
        <Link href='/serverAction6' className='bg-blue-300 '>useFormState</Link> */}


    </div>
  )
}

export default Header