import { getAllCookies } from '@/utils/cookies';
import React from 'react'

const EPage = async () => {
    const cookies = await getAllCookies();
    console.log(cookies);
  return (
    <div>
        <h1>get all cookies</h1>
        <div className='flex flex-wrap gap-2 '>
            {cookies.map((cookie) => (
                <div key={cookie.name} className=' w-1/5 h-20 bg-gray-300'>
                    <p>key = {cookie.name}</p>
                    <p>value = {cookie.value}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default EPage;
