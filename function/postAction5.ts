"use server";

export type Errors = {
  name?: string;
  age?: string;
};

export type FormState = {
    errors: Errors;
    message?: string; // اختیاری برای پیام‌های موفقیت
  };

  export async function handleAdd5(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name");
    const age = formData.get("age");
  
    const errors: Errors = {};
  
    if (!name) errors.name = 'enter the name';
    if (!age) errors.age = 'enter the age';
  
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
  
    try {
      const res = await fetch("https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });
  
      if (!res.ok) throw new Error('Failed to submit');
      
      return { errors: {}, message: 'Submission successful!' };
    } catch (error) {
      return { errors: { name: 'Failed to submit' } };
    }
  }