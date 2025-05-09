import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { publicRoutes, privateRoutes, authRoutes } from '../core/config/routes'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  console.log('Middleware - Path:', pathname);
  console.log('Middleware - Token:', token);

  if (publicRoutes.includes(pathname)) {
    console.log('Public route - allowing access');
    return NextResponse.next()
  }

  if (authRoutes.includes(pathname) && token) {
    console.log('Auth route with token - redirecting to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (privateRoutes.includes(pathname)) {
    if (!token) {
      console.log('Private route without token - redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url))
    }
    console.log('Private route with token - allowing access');
    return NextResponse.next()
  }

  console.log('Unknown route - redirecting to home');
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 