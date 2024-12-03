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
      className="inline-flex items-center bg-white rounded-full px-3 py-1 bg-opacity-40 hover:bg-opacity-100 transition-all"
    >
      <div className={`w-2 h-2 ${dotColor} rounded-full mr-2`} />
      <p className="text-sm font-medium whitespace-nowrap">{text}</p>
    </Link>
  )
}

