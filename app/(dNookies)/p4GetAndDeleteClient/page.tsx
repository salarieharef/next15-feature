'use client'

import { deleteCookie, getCookie } from '@/utils/nookiesClient'

const GetAndDeleteClient = () => {
  const handleGetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const key = (e.target as HTMLFormElement).key.value
    const value = getCookie(key)
    console.log(value)
  }
  const handleDeleteCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const key = (e.target as HTMLFormElement).key.value
    deleteCookie(key)
  }
  return (
    <div>
          <div>
      <h1>get cookie with nookies in client</h1>
      <form onSubmit={handleGetCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">get cookie</button>
      </form>

      <h1>delete cookie with nookies in client</h1>
      <form onSubmit={handleDeleteCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">delete cookie</button>
      </form>
    </div>
    </div>
  )
}

export default GetAndDeleteClient