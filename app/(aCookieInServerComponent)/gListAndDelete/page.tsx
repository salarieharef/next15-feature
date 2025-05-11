import { deleteCookie, getAllCookies } from "@/utils/serverCookies";

const GPage = async () => {
  const cookies = await getAllCookies();

  const removeCookie = async (formData: FormData) => {
    "use server";
    const key = formData.get("key");
    if (key) {
      await deleteCookie(key as string);
    }
  };

  return (
    <div>
      <h1> delete cookie from list with external function</h1>
      <div className="flex flex-wrap gap-2 ">
        {cookies.map((cookie) => (
          <div key={cookie.name} className=" w-1/5 h-20 bg-gray-300">
            <p>key = {cookie.name}</p>
            <p>value = {cookie.value}</p>
            <form action={removeCookie}>
              <input type="hidden" name="key" value={cookie.name} />
              <button className="bg-red-300 px-3 py-1 rounded-2xl" type="submit">delete </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPage;
