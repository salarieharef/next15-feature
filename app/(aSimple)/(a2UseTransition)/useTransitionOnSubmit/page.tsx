"use client";

import React, { useTransition, useState } from "react";

const UseTransitionOnSubmitPage = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const res = await fetch("https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            age: formData.get("age"),
          }),
        });

        const data = await res.json();
        console.log(data);
        setMessage("✅ اطلاعات با موفقیت ارسال شد!");
      } catch (error) {
        console.error(error);
        setMessage("❌ خطا در ارسال اطلاعات");
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">useTransition Example</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" className="block mb-2 p-1 border" />
        <input name="age" placeholder="age" className="block mb-2 p-1 border" />
        <button
          type="submit"
          disabled={isPending}
          className={`px-4 py-2 text-white ${
            isPending ? "bg-gray-400" : "bg-blue-500"
          }`}
        >
          {isPending ? "در حال ارسال..." : "ارسال"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default UseTransitionOnSubmitPage;
