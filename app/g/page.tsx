import { deleteCookie, getAllCookies } from "@/utils/cookies";

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
      <h1> remove cookie from list with external function</h1>
      <div className="flex flex-wrap gap-2 ">
        {cookies.map((cookie) => (
          <div key={cookie.name} className=" w-1/5 h-20 bg-gray-300">
            <p>key = {cookie.name}</p>
            <p>value = {cookie.value}</p>
            <form action={removeCookie}>
              <input type="hidden" name="key" value={cookie.name} />
              <button type="submit">remove Cookie</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPage;
