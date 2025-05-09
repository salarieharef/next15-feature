import { cookies } from "next/headers";

const COOKIE_OPTIONS = {
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

export const setCookie = async (key: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, COOKIE_OPTIONS);
};

export const getCookie = async (key: string) => {
  const cookieStore = await cookies();
  if (cookieStore.get(key)) {
    return cookieStore.get(key)?.value;
  }
  return null;
};

export const removeCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};

export const clearAllCookies = async () => {
  const cookieStore = await cookies();
  const cookiesList = cookieStore.getAll();

  for (const cookie of cookiesList) {
    cookieStore.delete(cookie.name);
  }
};

