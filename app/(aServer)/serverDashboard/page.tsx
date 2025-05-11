import { getCookie } from '@/utils/serverCookies'
import React from 'react'

const ServerDashboard = async () => {
  const token = await getCookie('token')

  const res = await fetch('https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await res.json()
  console.log(data)

  return (
    <div>
      <h1>{data?.phoneNumber}</h1>
      <h1>{data?.email}</h1>
    </div>
  )
}

export default ServerDashboard