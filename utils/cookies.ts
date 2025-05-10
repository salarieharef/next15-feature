'use server'
 
import { cookies } from 'next/headers'
 
export async function setCookie(key: string, value: string) {
  const cookieStore = await cookies()
 
//   cookieStore.set(key, value)
  // or
//   cookieStore.set(key, value, { secure: true })
//   // or
  cookieStore.set({
    name: key,
    value: value,
    httpOnly: true,
    path: '/',
  })
}

export async function getCookie(key: string) {
  const cookieStore = await cookies()
  return cookieStore.get(key)?.value
}


export async function getAllCookies() {
  const cookieStore = await cookies()
  return cookieStore.getAll()
}

export async function deleteCookie(key: string) {
  const cookieStore = await cookies()
  cookieStore.delete(key)
}

export async function hasCookie(key: string) {
    const cookieStore = await cookies()
    return cookieStore.has(key)
  }
