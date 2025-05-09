import { fetchApi } from '@/core/interceptore/fetchApi'
import React from 'react'

const DashboardPage =async () => {

    const res:any = await fetchApi.get("/SharePanel/GetProfileInfo")
    console.log(res)

  return (
    <div>
        {res?.email}
        <br />
        {res?.phoneNumber}
    </div>
  )
}

export default DashboardPage