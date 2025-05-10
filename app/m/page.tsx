'use client'

import { deleteCookieClient } from '@/utils/clientCookie'
const MPage = () => {
    const handleDeleteCookie = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const key = (e.target as HTMLFormElement).key.value
        deleteCookieClient(key)
    }
  return (
    <div>
        <h1>delete cookie in client component</h1>
        <form onSubmit={handleDeleteCookie}>
            <input type="text" name="key" placeholder='key' />
            <button type="submit">delete cookie</button>
        </form>
    </div>
  )
}

export default MPage