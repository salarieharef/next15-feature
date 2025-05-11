'use client'

import { setCookie } from '@/utils/nookiesClient'

const SetClient = () => {
  const handleSetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const formData = new FormData(e.target as HTMLFormElement)
    const key = (e.target as HTMLFormElement).key.value
    const value = (e.target as HTMLFormElement).value.value
    setCookie(key, value)
  }
  return (
    <div>
      <h1>Set Cookie in client with nookies</h1>
      <form onSubmit={handleSetCookie}>
        <input type="text" name="key" placeholder='key' />
        <input type="text" name="value" placeholder='value' />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  )
}

export default SetClient