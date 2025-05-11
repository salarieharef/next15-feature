import { cookies } from "next/headers";
import { getCookie } from "@/utils/serverCookies";

const DPage = () => {
  const show = async (formData: FormData) => {
    "use server";

    const key = formData.get("key");
    const cookieValue = await getCookie(key as string);
    console.log("value = ", cookieValue);
  };
  return (
    <div>
      <h1> get cookie with external function </h1>
      <form action={show}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default DPage;
