import { setCookie } from "@/utils/serverCookies";
import { cookies } from "next/headers";

const APage = async () => {
  const addCookie = async (formData: FormData) => {
    "use server";

    const cookieStore = await cookies();
    const key = formData.get("key") 
    const value = formData.get("value")
    cookieStore.set(key as string, value as string);
  };

  return (
    <div>
      <h1>simple setCookie</h1>
      <form action={addCookie}>
        <input type="text" name="key" placeholder="key" />
        <input type="text" name="value" placeholder="value" />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default APage;
