import { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getButtonAppearance } from 'utils/button'
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from 'utils/types'
import MobileNavMenu from './mobile-nav-menu'
import ButtonLink from './button-link'
import NextImage from './image'
import CustomLink from './custom-link'
import LocaleSwitch from '../locale-switch'

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="py-6 border-b-2 border-gray-200 sm:py-2">
        <div className="container flex flex-row justify-between items-center">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <a className="w-32 h-8">
                <NextImage width="120" height="33" media={navbar.logo} />
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="hidden flex-row gap-4 items-baseline ml-10 list-none md:flex">
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  {/* <CustomLink link={navLink} locale={router.locale}>
                    <div className="py-1 px-2 hover:text-gray-900">
                      {navLink.text}
                    </div>
                  </CustomLink> */}
                  <CustomLink link={navLink}>
                    <div className="py-1 px-2 hover:text-gray-900">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            {/* Locale Switch Mobile */}
            {pageContext.localizedPaths && (
              <div className="md:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="block p-1 md:hidden"
            >
              <div className="w-auto h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            {/* CTA button on desktop */}
            {navbar.button && (
              <div className="hidden md:block">
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance(navbar.button.type, 'light')}
                  compact
                />
              </div>
            )}
            {/* Locale Switch Desktop */}
            {pageContext.localizedPaths && (
              <div className="hidden md:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
}

export default Navbar
