'use client'

import { useEffect, useState } from 'react'
import { deleteCookieClient } from '@/utils/clientCookie'

interface Cookie {
  key: string;
  value: string;
}

const ZPage = () => {
  const [cookies, setCookies] = useState<Cookie[]>([]);

  useEffect(() => {
    const cookieList = document.cookie.split(';').map(cookie => {
      const [key, value] = cookie.trim().split('=');
      return { key, value };
    });
    setCookies(cookieList);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">cookies list in client component</h1>
      <div className="grid gap-4">
        {cookies.map((cookie, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold">key: {cookie.key}</p>
            <p>value: {cookie.value}</p>
            <button onClick={() => deleteCookieClient(cookie.key)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ZPage