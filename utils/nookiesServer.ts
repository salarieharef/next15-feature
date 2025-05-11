// utils/nookiesHelper.ts
import nookies from 'nookies'
import { IncomingMessage, ServerResponse } from 'http'

type Ctx = {
  req?: IncomingMessage
  res?: ServerResponse
}

// ست کردن کوکی
export const setCookie = (ctx: Ctx, key: string, value: string, options = {}) => {
  nookies.set(ctx, key, value, {
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 30 روز
    httpOnly: true,
    sameSite: 'lax',
    ...options,
  })
}

// خواندن کوکی‌ها
export const getCookies = (ctx: Ctx) => {
  return nookies.get(ctx)
}

// حذف کوکی
export const deleteCookie = (ctx: Ctx, key: string) => {
  nookies.destroy(ctx, key, { path: '/' })
}
