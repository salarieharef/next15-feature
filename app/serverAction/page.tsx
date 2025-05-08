import { revalidatePath } from "next/cache";
import React from "react";

type UserType = {
  id: number;
  name: string;
  age: number;
};

const ServerAction = async () => {
  const res = await fetch(
    "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user",
    { cache: "no-store" }
  );
  const users: UserType[] = await res.json();

  const handleAdd = async (formData: FormData) => {
    "use server";
    const res = await fetch(
      "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          afe: formData.get("age"),
        }),
      }
    );

    const ans = await res.json(); // second  way to convert to json
    console.log(ans);

    // console.log(formData.get('name'));
    // const obj= {
    //     name: formData.get('name'),
    //     desc: formData.get('desc')
    // }

    // const res = await axios.post('https://66e301e5494df9a478e3f4f6.mockapi.io/test/test' , obj)

    // console.log(res);

    // if (!res.ok) {
    //     throw new Error('Failed to add user');
    // }

    revalidatePath("/login");
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {users?.map((item) => {
          return (
            <div key={item.id} className="w-1/12 border-2 p-4">
              <h1>{item.name}</h1>
              <h1>{item.age}</h1>
            </div>
          );
        })}
      </div>

      <form action={handleAdd}>
        <input name="name" placeholder="name" />
        <input name="age" placeholder="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServerAction;
