'use client'

import { getCookieClient } from '@/utils/clientCookie'
import { getCookie } from '@/utils/jsCookie'
import axiosApi from "@/core/interceptore/axiosApi";
import { useEffect, useState } from 'react';


const ClientDashboard = () => {
  const [data, setData] = useState<any>(null);

  const token = getCookie('token') // or const token = getCookieClient('token')

  const fetchData = async () => {
    const res = await axiosApi.get<any>('/SharePanel/GetProfileInfo')
    setData(res)
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