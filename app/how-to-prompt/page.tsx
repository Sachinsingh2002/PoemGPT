import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/Footer"
import { ArrowLeft } from 'lucide-react'

export default function HowToPrompt() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-16 bg-gray-100">
      <header className="w-full max-w-3xl flex items-center justify-between mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl sm:text-4xl tracking-wide">How to Prompt</h1>
      </header>

      <main className="w-full max-w-3xl flex-grow">
        <Card className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
            <p>Our poem generator transforms your thoughts into beautiful verses. Here's how you can craft the perfect prompt:</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Choose a Theme</h3>
            <p>Decide on the theme of your poem. For instance, instead of "Write a poem," try "Write a poem about the beauty of autumn."</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Set the Mood</h3>
            <p>Describe the emotions or mood you'd like the poem to convey, such as "nostalgic," "romantic," or "uplifting."</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Specify the Style</h3>
            <p>If you prefer a specific poetic style, mention it. For example, "Write a haiku about a serene winter morning" or "Compose a free-verse poem on self-discovery."</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Add Details</h3>
            <p>Include vivid imagery or specific elements. For example, "Incorporate imagery of waves crashing on a rocky shore under a moonlit sky."</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Embrace Creativity</h3>
            <p>Encourage unique and imaginative expressions. For instance, "Write a whimsical poem about stars whispering secrets to the night."</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Prompts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>"Write a romantic poem inspired by the first bloom of spring."</li>
              <li>"Compose a reflective poem about the passage of time, using metaphors of rivers and trees."</li>
              <li>"Create a playful poem about a curious cat exploring an enchanted forest."</li>
            </ul>
          </section>
        </Card>
      </main>

      <Footer />
    </div>
  )
}