"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string , httpOnly: boolean = false) {
  const cookieStore = await cookies();

  cookieStore.set({
    name: key, // نام کوکی
    value: value, // مقدار کوکی
    httpOnly: httpOnly, // فقط سمت سرور قابل دسترسی است، امن‌تر (جلوگیری از XSS)
    path: "/", // مسیر معتبر کوکی. '/' یعنی در تمام مسیرها معتبر است
    // secure: true,                 // فقط روی HTTPS ارسال شود (در لوکال لازم نیست، اما در پروDUCTION باید true باشه)
    // sameSite: 'lax',              // کنترل ارسال کوکی در درخواست‌های cross-site. مقادیر: 'strict' | 'lax' | 'none'
    // maxAge: 60 * 60 * 24 * 7,     // مدت زمان اعتبار به ثانیه (اینجا یک هفته)
    // expires: new Date(Date.now() + 1000 * 60 * 60), // زمان انقضای دقیق (به جای maxAge)
    // domain: 'example.com',        // دامنه‌ای که کوکی روی آن معتبر است (اختیاری؛ اگر ندی دامنه فعلی در نظر گرفته میشه)
  });
}

export async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
}

export async function getAllCookies() {
  const cookieStore = await cookies();
  return cookieStore.getAll();
}

export async function deleteCookie(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}

export async function hasCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.has(key);
}
