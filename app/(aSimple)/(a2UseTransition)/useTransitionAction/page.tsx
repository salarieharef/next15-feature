"use client";

import React, { useState, useTransition } from "react";

const FormWithTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData)  => {


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
        console.log("✅ ارسال شد:", data);
        setMessage("اطلاعات با موفقیت ارسال شد");
      } catch (err) {
        setMessage("❌ خطا در ارسال");
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-2 p-4 border mt-4">
      <h2 className="text-lg font-bold"> useTransition + action</h2>
      <input name="name" placeholder="name" className="border p-1 block" />
      <input name="age" placeholder="age" className="border p-1 block" />
      <button
        type="submit"
        disabled={isPending}
        className={`px-4 py-2 text-white ${
          isPending ? "bg-gray-400" : "bg-green-600"
        }`}
      >
        {isPending ? "در حال ارسال..." : "ارسال"}
      </button>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default FormWithTransition;
