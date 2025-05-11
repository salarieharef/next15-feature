'use client'

import {setCookieClient} from '@/utils/clientCookie'

const JPage = () => {
  const handleSetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = (e.target as HTMLFormElement).key.value;
    const value = (e.target as HTMLFormElement).value.value;
    setCookieClient(key, value);
  }
  return (
    <div>
      <h1>set cookie in client with external function</h1>
      <form onSubmit={handleSetCookie}>
        <input type="text" name="key" placeholder='key' />
        <input type="text" name="value" placeholder='value' />
        <button type="submit">set cookie</button>
      </form>
    </div>
  )
}

export default JPage