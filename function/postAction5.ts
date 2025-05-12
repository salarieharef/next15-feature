"use server";

export type Errors = {
  name?: string;
  age?: string;
};

export type FormState = {
  errors: Errors;
  message?: string; // پیام موفقیت
  serverError?: string; // خطای سرور
  isSuccess?: boolean; // وضعیت موفقیت
};

export async function handleAdd5(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name");
  const age = formData.get("age");

  const errors: Errors = {};

  if (!name) errors.name = "enter the name";
  if (!age) errors.age = "enter the age";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const res = await fetch(
      "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "خطا در ارسال داده");
    }

    return {
      errors: {},
      isSuccess: true,
      message: "داده با موفقیت ذخیره شد!",
    };
  } catch (error) {
    return {
      errors: {},
      isSuccess: false,
      serverError: error instanceof Error ? error.message : "خطای ناشناخته",
    };
  }
}
