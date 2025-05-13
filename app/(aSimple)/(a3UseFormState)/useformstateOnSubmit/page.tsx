"use client";

import React from "react";
import { useFormState } from "react-dom";

type State = {
  message: string;
};

const handleSubmit = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  try {
    const res = await fetch(
      "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          age: formData.get("age"),
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    return { message: "ارسال با موفقیت انجام شد!" };
  } catch (error) {
    console.error(error);
    return { message: "خطا در ارسال اطلاعات" };
  }
};

const UseformstateOnSubmitPage = () => {
  const [state, formAction] = useFormState(handleSubmit, {
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formAction(formData); // دستی ارسال می‌کنیم چون دیتا بصورت فرم دیتا باید بره واسش
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">useFormState + onSubmit</h1>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="name" className="block mb-2 p-1 border" />
        <input name="age" placeholder="age" className="block mb-2 p-1 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {state.message && <p className="mt-4">{state.message}</p>}
    </div>
  );
};

export default UseformstateOnSubmitPage;
