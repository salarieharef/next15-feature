import { deleteCookie } from "@/utils/serverCookies";
import React from "react";

const FPage = () => {
  const removeCookie = async (formData: FormData) => {
    "use server";
    const key = formData.get("key");
    await deleteCookie(key as string);
  };
  return (
    <div>
      <h1> delete cookie with external function </h1>
      <form action={removeCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">remove Cookie</button>
      </form>
    </div>
  );
};

export default FPage;
