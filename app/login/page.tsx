import { fetchApi } from "@/core/interceptore/fetchApi";
import { setCookie } from "@/core/cookie/cookies";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


const Login = () => {
  const handleLogin = async (formData: FormData) => {
    "use server";

    try {
      const obj = {
        phoneOrGmail: formData.get("phoneOrGmail"), // 09100611077
        password: formData.get("password"), // 1
        rememberMe: formData.get("rememberMe") === "on" ? true : false,
      };
      
      const res:any = await fetchApi.post("/Sign/Login", obj);
      console.log('Login Response:', res);

      if(res.token){
        console.log('Setting token:', res.token);
        await setCookie("token", res.token);
        console.log('Token set successfully');
        redirect('/dashboard');
      }
    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <div>
      <form action={handleLogin}>
        <input type="text" name="phoneOrGmail" />
        <input type="text" name="password" />
        <label htmlFor="d1">rememberMe</label>
        <input id="d1" type="checkbox" name="rememberMe" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
