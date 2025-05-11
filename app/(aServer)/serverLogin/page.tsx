import { setCookie } from '@/utils/serverCookies'
import { redirect } from 'next/navigation'
import React from 'react'

const ServerLogin = () => {
  const handleLogin = async (formData: FormData) => {
    "use server"
    const phoneOrGmail = formData.get('phoneOrGmail')
    const password = formData.get('password')
    const rememberMe = formData.get('rememberMe') === 'on' ? true : false

    const res = await fetch('https://classapi.sepehracademy.ir/api/Sign/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneOrGmail,
        password,
        rememberMe
      })
    })
    const data = await res.json()
    if(data.token){
      await setCookie('token', data.token)
      redirect('/serverDashboard')
    }
  }
  return (
    <div>
      <form action={handleLogin}>
        <input type="text" name='phoneOrGmail' placeholder='phoneOrGmail' />
        <input type="password" name='password' placeholder='password' />
        <label htmlFor="rememberMe">rememberMe</label>
        <input type="checkbox" id='rememberMe' name='rememberMe' placeholder='rememberMe' />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default ServerLogin