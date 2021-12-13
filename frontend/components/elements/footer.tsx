import NextImage from './image'
import CustomLink from './custom-link'
type FooterProps = {
  footer?: {
    logo: any
    columns?: {
      id: string | number
      title: string
      links?: any[]
    }[]
    smallText: string
  }
}
const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <footer className="pt-12 bg-gray-100">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
        </div>
        <nav className="flex flex-row flex-wrap items-start mb-10 lg:gap-20 lg:justify-end">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 w-6/12 lg:mt-0 lg:w-auto"
            >
              <p className="font-semibold tracking-wide uppercase">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="py-1 px-1 -mx-1 text-gray-700 hover:text-gray-900"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="py-6 text-sm text-gray-700 bg-gray-200">
        <div className="container">{footer.smallText}</div>
      </div>
    </footer>
  )
}
export default Footer
