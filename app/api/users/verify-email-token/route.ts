import tokenVerifier from "@/helpers/tokenVerifier";
import jwt, {  JwtPayload, VerifyErrors } from "jsonwebtoken";

export async function POST(request: Request) {
  const token  = await request.json() ;
  if (!token) {
    return new Response(
      JSON.stringify({
        token: false,
      }),
      { status: 400 }
    );
  }
try {

  const result = await tokenVerifier(token.token)

return new Response(JSON.stringify({
  result
}))


} catch (error) {
  new Response(JSON.stringify({
    token: false,
    message: 'There was an error. Failed to verify the token'
}));}

}
