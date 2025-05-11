// app/serverLogin/page.tsx
import { z } from "zod";
import { setCookie } from "@/utils/serverCookies";
import { redirect } from "next/navigation";
import { fetchApi } from "@/core/interceptore/fetchApi";
import { useFormState } from "react-dom";

const userSchema = z.object({
  phoneOrGmail: z.string().min(2, "شماره یا ایمیل باید حداقل ۲ کاراکتر باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  rememberMe: z.boolean().optional(),
});

// ✅ اکشن سروری (درون کامپوننت)
const handleLogin = async (_prevState: any, formData: FormData) => {
  "use server";

  const phoneOrGmail = formData.get("phoneOrGmail");
  const password = formData.get("password");
  const rememberMe = formData.get("rememberMe") === "on";

  const parsed = userSchema.safeParse({
    phoneOrGmail,
    password,
    rememberMe,
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetchApi.post<any>("/Sign/Login", parsed.data);

    if (res.token) {
      await setCookie("token", res.token);
      redirect("/serverDashboard");
    }

    return { success: false, errors: { phoneOrGmail: ["ورود ناموفق بود"] } };
  } catch (error) {
    return {
      success: false,
      errors: { phoneOrGmail: ["خطا در ارتباط با سرور"] },
    };
  }
};

const initialState = { success: false, errors: {} as Record<string, string[]> };

const ServerLogin = () => {
  const [state, formAction] = useFormState(handleLogin, initialState);

  return (
    <form action={formAction} className="space-y-4 max-w-sm mx-auto mt-10">
      <div>
        <input type="text" name="phoneOrGmail" placeholder="ایمیل یا شماره" className="border p-2 w-full" />
        {state.errors?.phoneOrGmail && (
          <p className="text-red-500 text-sm">{state.errors.phoneOrGmail[0]}</p>
        )}
      </div>

      <div>
        <input type="password" name="password" placeholder="رمز عبور" className="border p-2 w-full" />
        {state.errors?.password && (
          <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="rememberMe" name="rememberMe" />
        <label htmlFor="rememberMe">مرا به خاطر بسپار</label>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        ورود
      </button>
    </form>
  );
};

export default ServerLogin;
