import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) =>{

  const protectedRoute = ['/home', '/my-posts', '/create-posts']
  
  if(!req.auth && protectedRoute.includes(req.nextUrl.pathname)){
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl.origin))
  }
  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}