import { hasCookie } from '@/utils/cookies'
import React from 'react'

const HPage = () => {
    
    const hasCookieCheck = async (formData:FormData) => {   
        "use server"
        const key = formData.get("key")
        const isCookie = await hasCookie(key as string)
        console.log("isCookie = ",isCookie)
    }

  return (
    <div>
        <h1>check exist cookie with has</h1>
        <form action={hasCookieCheck}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">check Cookie</button>
      </form>
    </div>
  )
}

export default HPage;
