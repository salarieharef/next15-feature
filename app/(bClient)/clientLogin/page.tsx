"use client";
import { setCookieClient } from "@/utils/clientCookie";
import axios from "axios";
import { redirect } from "next/navigation";

const ClientLogin = () => {
  const handleLogin = async (e:any) => {
    e.preventDefault()
    const phoneOrGmail = e.target.phoneOrGmail.value
    const password = e.target.password.value
    const rememberMe = e.target.rememberMe.checked

    const res = await axios.post('https://classapi.sepehracademy.ir/api/Sign/Login', {
      phoneOrGmail,
      password,
      rememberMe
    })

    console.log(res.data)

    if(res.data.token){
      setCookieClient('token', res.data.token)
      redirect('/clientDashboard')
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="phoneOrGmail" placeholder="phoneOrGmail" />
        <input type="password" name="password" placeholder="password" />
        <label htmlFor="rememberMe">rememberMe</label>
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          placeholder="rememberMe"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default ClientLogin;
