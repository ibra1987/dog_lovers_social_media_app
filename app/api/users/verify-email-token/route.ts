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
  const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

  const result = jwt.verify(token.token, secret, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
   
    if (err) {
       return {
        msg:err.message,
        isValid:false
       }
        

    } else if (decoded) {
      return  {
             isValid:true
      }
    } 

});



return new Response(JSON.stringify({
  result
}))


} catch (error) {
  new Response(JSON.stringify({
    token: false,
    message: 'There was an error. Failed to verify the token'
}));}

}
