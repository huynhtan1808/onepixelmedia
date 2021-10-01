import PropTypes from "prop-types"
import { MdClose, MdChevronRight } from "react-icons/md"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { useLockBodyScroll } from "utils/hooks"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "./button-link"
import NextImage from "./image"
import CustomLink from "./custom-link"

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-default z-10 pb-6">
      <div className="container h-full flex flex-col justify-start">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Company logo */}
          <NextImage width="120" height="33" media={navbar.logo} />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-5 mt-12">
          <ul className="flex flex-col list-none gap-5 items-baseline text-xl mb-10">
            {navbar.links.map((navLink) => (
              <li key={navLink.id} onClick={closeSelf} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="hover:text-gray-900 py-6 flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <ButtonLink button={navbar.button} appearance={getButtonAppearance(navbar.button.type, "light")} />
          </div>
        </div>
      </div>
    </div>
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
