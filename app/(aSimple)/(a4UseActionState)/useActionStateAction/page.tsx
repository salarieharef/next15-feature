"use client";

import { useActionState } from "react";

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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          age: formData.get("age"),
        }),
      }
    );

    const data = await res.json();
    return { message: "اطلاعات با موفقیت ارسال شد!" };
  } catch (error) {
    return { message: "ارسال با خطا مواجه شد!" };
  }
};

export default function UseActionStateActionPage() {
  const [state, formAction] = useActionState(handleSubmit, {
    message: "",
  });

  return (
    <div>
      <h1>useActionState + action</h1>
      <form action={formAction}>
        <input name="name" placeholder="name" className="block mb-2" />
        <input name="age" placeholder="age" className="block mb-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {state.message && <p className="mt-4">{state.message}</p>}
    </div>
  );
}
