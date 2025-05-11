import { cookies } from "next/headers";
import React from "react";

const CPage = () => {
  const show = async (formData: FormData) => {
    "use server";

    const cookieStore = await cookies();

    const key = formData.get("key");
    const cookieValue = cookieStore.get(key as string);
    console.log( 'value = ' , cookieValue?.value);
  };
  return (
    <div>
      <h1>simple get cookie</h1>
      <form action={show}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default CPage;
