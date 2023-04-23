// import { NextApiRequest, NextApiResponse } from 'next'

// export default (_: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ text: 'Hello' })
// }


export async function GET(_request: Request) {
  return new Response('Hello, Next.js!')
}
