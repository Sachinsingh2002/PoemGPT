// import Replicate from "replicate"
// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   const replicate = new Replicate({
//     auth: process.env.REPLICATE_API_TOKEN,
//   })

//   try {
//     const { prompt } = await req.json()
//     const output = await replicate.run(
//       "replicate/llama70b-v2-chat:e951f18578850b652510200860fc4ea62b3b16fac280f83ff32282f87bbd2e48",
//       {
//         input: {
//           prompt: `
//           User: Can you write a poem about ${prompt}\n
//           Assistant: `,
//         },
//       }
//     )
//     return NextResponse.json({ poem: output })
//   } catch (error) {
//     console.error("AI poem generation failed:", error)
//     return NextResponse.json({ error: "AI poem generation failed" }, { status: 500 })
//   }
// }



import Replicate from "replicate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Validate that the environment variable is set
  if (!process.env.REPLICATE_API_TOKEN) {
    console.error("REPLICATE_API_TOKEN is not set in the environment variables.");
    return NextResponse.json(
      { error: "Server misconfiguration: REPLICATE_API_TOKEN is missing." },
      { status: 500 }
    );
  }

  // Initialize Replicate with the token
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  try {
    // Extract and validate the prompt from the request body
    const body = await req.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid request: 'prompt' must be a non-empty string." },
        { status: 400 }
      );
    }

    // Call the Replicate model
    const output = await replicate.run(
      "replicate/llama70b-v2-chat:e951f18578850b652510200860fc4ea62b3b16fac280f83ff32282f87bbd2e48",
      {
        input: {
          prompt: `
            User: Can you write a poem about ${prompt}\n
            Assistant: `,
        },
      }
    );

    // Respond with the generated poem
    return NextResponse.json({ poem: output });
  } catch (error) {
    console.error("AI poem generation failed:", error);
    return NextResponse.json(
      { error: "AI poem generation failed. Please try again later." },
      { status: 500 }
    );
  }
}
