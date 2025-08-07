export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-white/60 font-inter text-center">
      <div className="flex items-center gap-4">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          v.1.0.0
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span>Crafted with</span>
        <span className="text-red-400">♥</span>
        <span>by</span>
        <a 
          href="https://sachinsingh2002.vercel.app/" 
          target="_blank" 
          className="hover:text-white underline decoration-purple-400 underline-offset-2 transition-colors duration-300"
        >
          Sachin Singh
        </a>
      </div>
    </footer>
  )
}

