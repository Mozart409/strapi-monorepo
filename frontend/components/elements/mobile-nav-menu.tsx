import PropTypes from 'prop-types'
import { useLockBodyScroll } from 'utils/hooks'
import { getButtonAppearance } from 'utils/button'
import ButtonLink from './button-link'
import NextImage from './image'
import CustomLink from './custom-link'

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="overflow-y-scroll fixed top-0 left-0 z-10 py-6 pb-6 w-screen h-screen bg-white border-b-2 border-gray-200 sm:py-2">
      <div className="container grid grid-cols-3 grid-flow-row justify-between items-center">
        {/* Top section */}
        <div></div>
        {/* Company logo */}
        <div className="justify-self-center">
          {navbar.logo ? (
            <CustomImage
              media={navbar?.logo}
              className="object-contain w-auto h-auto"
              width={128}
              height={64}
            />
          ) : (
            <CustomImage
              media={navbar?.mobileLogo}
              className="object-contain w-auto h-auto"
              width={128}
              height={64}
            />
          )}
        </div>
        {/* Close button */}
        <div className="justify-self-end">
          <button onClick={closeSelf} className="py-1 px-1">
            <div className="w-auto h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col justify-end mx-auto w-9/12">
          <ul className="flex flex-col gap-6 items-baseline mb-10 text-xl list-none">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="flex flex-row justify-between items-center py-6 hover:text-gray-900">
                    <span>{navLink?.text}</span>

                    <div className="w-auto h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          {navbar.button ? (
            <ButtonLink
              button={navbar.button}
              appearance={getButtonAppearance(navbar.button.type, 'light')}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default MobileNavMenu
