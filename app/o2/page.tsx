  'use client'

  import { deleteCookie, getAllCookies, getCookie } from '@/utils/jsCookie'

const O2Page = () => {
  const handleGetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = (e.target as HTMLFormElement).key.value;
    const value = getCookie(key);
    console.log(value);
  }
  const handleDeleteCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = (e.target as HTMLFormElement).key.value;
    deleteCookie(key);
  }

  const cookieList = getAllCookies()
  console.log(cookieList)
  return (
    <div>
      <h1>get cookie with js-cookie</h1>
      <form onSubmit={handleGetCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">get cookie</button>
      </form>

      <h1>delete cookie with js-cookie</h1>
      <form onSubmit={handleDeleteCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">delete cookie</button>
      </form>
    </div>
  )
}

export default O2Page