// app/(aServer)/serverLogin/actions/formAction.ts
"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { fetchApi } from "@/core/interceptore/fetchApi";
import { setCookie } from "@/utils/serverCookies";

const userSchema = z.object({
  phoneOrGmail: z.string().min(2, "شماره یا ایمیل باید حداقل ۲ کاراکتر باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  rememberMe: z.boolean().optional(),
});

export async function loginAction(prevState: any, formData: FormData) {
  const phoneOrGmail = formData.get("phoneOrGmail");
  const password = formData.get("password");
  const rememberMe = formData.get("rememberMe") === "on";

  const parsed = userSchema.safeParse({ phoneOrGmail, password, rememberMe });

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

    return { success: false, errors: { general: ["ورود ناموفق بود"] } };
  } catch {
    return { success: false, errors: { general: ["خطا در ارتباط با سرور"] } };
  }
}
