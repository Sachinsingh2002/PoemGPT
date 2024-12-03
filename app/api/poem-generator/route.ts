import Replicate from "replicate"
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  })

  try {
    const { prompt } = await req.json()
    const output = await replicate.run(
      "replicate/llama70b-v2-chat:e951f18578850b652510200860fc4ea62b3b16fac280f83ff32282f87bbd2e48",
      {
        input: {
          prompt: `
          User: Can you write a poem about ${prompt}\n
          Assistant: `,
        },
      }
    )
    return NextResponse.json({ poem: output })
  } catch (error) {
    console.error("AI poem generation failed:", error)
    return NextResponse.json({ error: "AI poem generation failed" }, { status: 500 })
  }
}

