import { setCookie } from '@/utils/serverCookies'
import { redirect } from 'next/navigation'
import { fetchApi } from '@/core/interceptore/fetchApi'


const ServerLogin = () => {
  const handleLogin = async (formData: FormData) => {
    "use server"

    // const phoneOrGmail = formData.get('phoneOrGmail')
    // const password = formData.get('password')
    // const rememberMe = formData.get('rememberMe') === 'on' ? true : false

    // const res = await fetchApi.post<any>('/Sign/Login', {
    //   phoneOrGmail,
    //   password,
    //   rememberMe
    // })
    
    // if(res.token){
    //   await setCookie('token', res.token)
    //   redirect('/serverDashboard')
    // }


  }
  return (
    <div>
      <form action={handleLogin}>
        <input type="text" name='phoneOrGmail' placeholder='phoneOrGmail' />
        <input type="password" name='password' placeholder='password' />
        <label htmlFor="rememberMe">rememberMe</label>
        <input type="checkbox" id='rememberMe' name='rememberMe' placeholder='rememberMe' />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default ServerLogin