"use client";
import { setCookieClient } from "@/utils/clientCookie";
import axiosApi from "@/core/interceptore/axiosApi";
import { redirect } from "next/navigation";
import axios from "axios";

const ClientLogin = () => {
  const handleLogin = async (e:any) => {
    e.preventDefault()
    const phoneOrGmail = e.target.phoneOrGmail.value
    const password = e.target.password.value
    const rememberMe = e.target.rememberMe.checked

    const res :any = await axiosApi.post('/Sign/Login', {
      phoneOrGmail,
      password,
      rememberMe
    })

    console.log(res)

      if(res.token){
        setCookieClient('token', res.token)
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
