import { NextRequest, NextResponse } from "next/server"

const authRoutes = ['/login']
const privateRoutes = ['/dashboard', '/editInfo']
const isLoggedIn = true

export default function middleware(req: NextRequest) {
    // console.log('middleware')
  const pathname = req.nextUrl.pathname
  console.log(pathname)

//   const isLoggedIn = req.cookies.get('isLoggedIn')
  if (privateRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  else if (authRoutes.includes(pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}
