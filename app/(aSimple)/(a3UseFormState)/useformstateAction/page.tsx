"use client";

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
    // console.log(data);
    return { message: "اطلاعات با موفقیت ارسال شد!" };
  } catch (error) {
    // console.error(error);
    return { message: "ارسال با خطا مواجه شد!" };
  }
};

export default function OnlyUseFormStateExample() {
  const [state, formAction] = useFormState(handleSubmit, {
    message: "",
  });

  console.log(state)

  return (
    <div>
      <h1>useFormState + action</h1>
      <form action={formAction}>
        <input name="name" placeholder="name" className="block mb-2" />
        <input name="age" placeholder="age" className="block mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {state.message && <p className="mt-4">{state.message}</p>}
    </div>
  );
}
