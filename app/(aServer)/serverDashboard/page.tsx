import { fetchApi } from '@/core/interceptore/fetchApi'

const ServerDashboard = async () => {

  const data = await fetchApi.get<any>('/SharePanel/GetProfileInfo')
  
  console.log(data)

  return (
    <div>
      <h1>{data?.phoneNumber}</h1>
      <h1>{data?.email}</h1>
    </div>
  )
}

export default ServerDashboard