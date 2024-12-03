export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mt-8 flex justify-between text-sm text-zinc-500/80">
      <p>v.0.0.1</p>
      <p>
        by{" "}
        <a 
          href="https://sachinsingh2002.vercel.app/" 
          target="_blank" 
          className="hover:text-zinc-500 underline"
        >
          sachin singh
        </a>
      </p>
    </footer>
  )
}

