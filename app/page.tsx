'use client'  

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import HeaderButton from "@/components/HeaderButton"
import Footer from "@/components/Footer"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [poem, setPoem] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generatePoem = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/poem-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })
      const data = await response.json()
      setPoem(data.poem.join("\n")) // Join the array of strings into a single string
    } catch (error) {
      console.error("Failed to generate poem:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-16 bg-gray-100">
      <header className="w-full max-w-3xl space-y-3 text-center">
        <h1 className="text-3xl sm:text-4xl tracking-wide">PoemGPT</h1>
        <p className="text-lg sm:text-xl text-zinc-500/80 font-serif italic pb-1">
        Unleash your imagination, one verse at a time ~ create poetry that speaks your soul.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <HeaderButton text="how to prompt" dotColor="bg-blue-400" href="/how-to-prompt" />
          <HeaderButton text="source code" dotColor="bg-lime-500" href="https://github.com/Sachinsingh2002/PoemGPT" />
          <HeaderButton text="bugs log" dotColor="bg-rose-400" href="" />
        </div>
      </header>

      <main className="w-full max-w-3xl mt-8 flex-grow">
        <Card className="p-6">
          <Textarea 
            placeholder="generate a poem about..."
            className="min-h-[100px] resize-none border-0 focus-visible:ring-0 text-lg p-0 mb-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button 
              className="bg-gray-200 text-gray-900 hover:bg-gray-300"
              onClick={() => {
                setPrompt("");
                setPoem("");
              }}
            >
              Clear
            </Button>
            <Button 
              className="bg-gray-200 text-gray-900 hover:bg-gray-300"
              onClick={generatePoem}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Poem'}
            </Button>
          </div>
          {isLoading && (
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
            </div>
          )}
          {poem && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Generated Poem:</h3>
              <div className="bg-white p-4 rounded-md shadow-sm">
                {poem.split('\n').map((line, index) => (
                  <p key={index} className="mb-2">
                    {line.trim() || <br />}
                  </p>
                ))}
              </div>
            </div>
          )}
        </Card>
      </main>

      <Footer />
    </div>
  )
}

