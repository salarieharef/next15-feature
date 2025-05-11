"use server";

import { revalidatePath } from "next/cache";

export const handleAdd = async (formData: FormData) => {
    
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

    revalidatePath("/serverAction3");  // not working in client component
    
  };