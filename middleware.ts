import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import tokenVerifier from './helpers/tokenVerifier'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
   const tokenCookie = request.cookies.get('accessToken')
   if(!tokenCookie){
    return NextResponse.json({
        success:false,
        errors:['unauthorized action']
      })
   }

   const tokenValidationToken = await tokenVerifier(tokenCookie.value)
  
   if(!tokenValidationToken?.success){
    
    return NextResponse.json(tokenValidationToken)
   }

   return NextResponse.next()
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/posts/:path*'],
}