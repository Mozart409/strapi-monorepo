import Link from 'next/link'

interface IProps {
  link: ILink
  children: JSX.Element | JSX.Element[]
}

const CustomLink = ({ link, children }: IProps) => {
  const isInternalLink = link?.url?.startsWith('/')

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link.url}>
        <a alt={link?.alt} title={link?.title}>
          {children}
        </a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        alt={link?.alt}
      >
        {children}
      </a>
    )
  }

  return (
    <a href={link.url} target="_self" title={link?.title}>
      {children}
    </a>
  )
}

export default CustomLink
