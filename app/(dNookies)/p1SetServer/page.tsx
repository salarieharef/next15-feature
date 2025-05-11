import { setCookie } from "@/utils/nookiesServer";

const SetServer = () => {
  const addCookie = async (formData: FormData) => {
    "use server";

    const key = formData.get("key")?.toString() as string;
    const value = formData.get("value")?.toString() as string;

    setCookie({ res: undefined, req: undefined }, key, value)
  };

  return (
    <div>
      <h1>dont work</h1>
      <form action={addCookie}>
        <input type="text" name="key" placeholder="key" />
        <input type="text" name="value" placeholder="value" />
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default SetServer;
