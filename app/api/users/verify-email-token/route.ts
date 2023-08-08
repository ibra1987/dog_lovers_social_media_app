import jwt, {  VerifyErrors } from "jsonwebtoken";

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
  const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";
  jwt.verify(token.token, secret, (err: VerifyErrors | null, decoded: object | undefined) => {
    let response: Response;

    if (err) {
        response = new Response(JSON.stringify({
            token: false,
            message: err.message
        }));
    } else if (decoded) {
        response = new Response(JSON.stringify({
            token: true
        }));
    } else {
        response = new Response(JSON.stringify({
            token: false,
            message: 'Token verification failed'
        }));
    }

    return response;
});

}
