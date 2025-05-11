import { setCookie } from "@/utils/serverCookies";


const BPage = () => {
    const addCookie = async (formData: FormData) => {
        "use server";

        const key = formData.get('key')
        const value = formData.get('value')
        await setCookie(key as string, value as string)
      };
  return (
    <div>
        <h1>set cookie with external function</h1>
      <form action={addCookie}>
        <input type="text" name="key" placeholder="key" />
        <input type="text" name="value" placeholder="value" />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default BPage;
