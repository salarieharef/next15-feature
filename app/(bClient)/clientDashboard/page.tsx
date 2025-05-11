'use client'

import { getCookieClient } from '@/utils/clientCookie'
import { getCookie } from '@/utils/jsCookie'
import axios from 'axios';
import { useEffect, useState } from 'react';


const ClientDashboard = () => {
  const [data, setData] = useState<any>(null);

  const token = getCookie('token') // or const token = getCookieClient('token')

  const fetchData = async () => {
    const res = await axios.get('https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setData(res.data)
  }
  
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>{data?.phoneNumber}</h1>
      <h1>{data?.email}</h1>
    </div>
  )
}

export default ClientDashboard