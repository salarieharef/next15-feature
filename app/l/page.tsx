'use client'

import { getCookieClient, setCookieClient } from '@/utils/clientCookie'
const LPage = () => {
    const handleGetCookie = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const key = (e.target as HTMLFormElement).key.value
        const value = getCookieClient(key)
        console.log(value)
    }
  return (
    <div>
        <h1>get cookie in client component</h1>
        <form onSubmit={handleGetCookie}>
            <input type="text" name="key" placeholder='key' />
            <button type="submit">get cookie</button>
        </form>
    </div>
  )
}

export default LPage