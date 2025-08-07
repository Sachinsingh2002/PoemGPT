import Link from "next/link"
 
interface HeaderButtonProps {
  text: string
  dotColor: string
  href: string
}

export default function HeaderButton({ text, dotColor, href }: HeaderButtonProps) {
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      className="group inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-105"
    >
      <div className={`w-2 h-2 ${dotColor} rounded-full mr-3 group-hover:scale-110 transition-transform duration-300`} />
      <span className="text-sm font-medium text-white/90 group-hover:text-white whitespace-nowrap">{text}</span>
    </Link>
  )
}

