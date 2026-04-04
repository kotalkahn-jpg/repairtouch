type HeadingProps = {
  children: React.ReactNode
  level?: "h1" | "h2" | "h3"
  className?: string
}

export default function Heading({
  children,
  level = "h2",
  className = ""
}: HeadingProps) {
  const Tag = level

  return (
    <Tag
      className={`
        font-semibold
        ${
          level === "h1"
            ? "text-4xl md:text-5xl text-slate-900"
            : level === "h2"
            ? "text-3xl md:text-4xl text-blue-600"
            : "text-xl text-slate-900"
        }
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}