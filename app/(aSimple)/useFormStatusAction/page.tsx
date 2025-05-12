"use client";

import { useFormStatus } from "react-dom";

function Submit() {
  const status = useFormStatus();
  console.log(status);
  return <button type="submit" disabled={status.pending} className="disabled:bg-red-500">Submit</button>;
}

const UseFormStatusPage = () => {

  const handleSubmit = async (formData: FormData) => {
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
    const ans = await res.json();
    console.log(ans);
  };

  return (
    <div>
      <h1>useFormStatus</h1>
      <form action={handleSubmit}>
        <input name="name" placeholder="name" />
        <input name="age" placeholder="age" />
        <Submit />
      </form>
    </div>
  );
};

export default UseFormStatusPage;
