"use client";

import { setCookie } from "@/utils/jsCookie";

const OPage = () => {
  const handleSetCookie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = (e.target as HTMLFormElement).key.value;
    const value = (e.target as HTMLFormElement).value.value;
    setCookie(key, value);
  };
  return (
    <div>
      <h1>set cookie  with js-cookie</h1>
      <form onSubmit={handleSetCookie}>
        <input type="text" name="key" placeholder="key" />
        <input type="text" name="value" placeholder="value" />
        <button type="submit">set cookie</button>
      </form>
    </div>
  );
};

export default OPage;
