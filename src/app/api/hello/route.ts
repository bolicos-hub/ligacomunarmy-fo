// import { NextApiRequest, NextApiResponse } from 'next'

// export async function GET(_request: NextApiRequest, res: NextApiResponse) {
//   const data = {
//     data: 'Hello, Next.js!'
//   }

//   return res.status(200).json(data)
// }

 import { NextResponse } from 'next/server';

 export async function GET() {
   const data = {
     text: 'Hello, Next.js!'
   }

   return NextResponse.json({ data })
 }