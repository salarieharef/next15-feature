import { getCookies, deleteCookie } from "@/utils/nookiesServer";

const GetAndDeleteServer = () => {
  const handleGetCookie = async (formData: FormData) => {
    "use server";

    const key = formData.get("key")?.toString() || "";
  };


  const handleDeleteCookie = async (formData: FormData) => {
    "use server";

    const key = formData.get("key")?.toString() || "";
  };
  return (
    <div>

      <h1>dont work</h1>
      <form action={handleGetCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">get cookie</button>
      </form>

      <h1>dont work</h1>
      <form action={handleDeleteCookie}>
        <input type="text" name="key" placeholder="key" />
        <button type="submit">delete cookie</button>
      </form>
    </div>
  );
};

export default GetAndDeleteServer;
