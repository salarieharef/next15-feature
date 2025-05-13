"use client";

import React, { useActionState, startTransition } from "react";

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

const UseActionStateOnSubmitPage = () => {
  const [state, action] = useActionState(handleSubmit, {
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">useActionState + onSubmit + transition</h1>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="name" className="block mb-2 p-1 border" />
        <input name="age" placeholder="age" className="block mb-2 p-1 border" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {state.message && <p className="mt-4">{state.message}</p>}
    </div>
  );
};

export default UseActionStateOnSubmitPage;
