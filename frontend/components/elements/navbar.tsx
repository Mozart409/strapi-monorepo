import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getButtonAppearance } from 'utils/button'
import MobileNavMenu from './mobile-nav-menu'
import ButtonLink from './button-link'
import NextImage from './image'
import CustomLink from './custom-link'
import LocaleSwitch from '../locale-switch'
import classNames from 'classnames'

interface INavbar {
  navbar: {
    id: number
    links: {
      id: number
      url: string
      title: string
      text: string
      newTab: boolean
      links: {
        id: number
        url: string
        title: string
        text: string
        newTab: boolean
      }[]
    }[]
    button: {
      id: number
      url: string
      newTab: boolean
      text: string
      type: string
    }
    logo: IMedia
    mobileLogo: IMedia
  }
  pageContext: {
    locale: string
    locales: string[]
    defaultLocale: string
    slug: string
    localizations: []
    localizedPaths: [
      {
        locale: string
        href: string
      }
    ]
  }
}

const Navbar = ({ navbar, pageContext }: INavbar) => {
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
            {/* <ul className="hidden flex-row gap-4 items-baseline ml-10 list-none md:flex">
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink}>
                    <div className="py-1 px-2 hover:text-gray-900">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul> */}

            <ul className="hidden flex-row gap-4 items-baseline ml-10 list-none md:flex">
              {navbar.links.map((menuLink) => (
                <Menu
                  key={menuLink.id}
                  as="div"
                  className="relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500">
                      <Link href={menuLink.url} passHref>
                        <a title={menuLink.title}>{menuLink.text}</a>
                      </Link>
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {menuLink.links.map((item) => (
                          <Menu.Item key={item.id}>
                            {({ active }) => (
                              <Link href={item.url}>
                                <a
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm hover:bg-gray-100'
                                  )}
                                >
                                  {item.text}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
                  className="w-8 h-8"
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

export default Navbar
