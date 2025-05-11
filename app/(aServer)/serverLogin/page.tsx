import React from 'react'

const ServerLogin = () => {
  const handleLogin = async (formData: FormData) => {
    "use server"
    const phoneOrGmail = formData.get('phoneOrGmail')
    const password = formData.get('password')
    const rememberMe = formData.get('rememberMe')

    fetch('https://classapi.sepehracademy.ir/api/Sign/Login', {
      method: 'POST',
      body: JSON.stringify({
        phoneOrGmail,
        password,
        rememberMe
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
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