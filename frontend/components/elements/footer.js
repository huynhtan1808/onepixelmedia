import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"

const Footer = ({ footer }) => {
  return (
    <footer className="pt-12 bg-default">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div className="opacity-60">{footer.logo && <NextImage width="120" height="55" media={footer.logo} />}</div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div key={footerColumn.id} className="mt-10 lg:mt-0 w-6/12 lg:w-auto">
              <p className="tracking-wide text-dark">{footerColumn.title}</p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li key={link.id} className="text-grey py-1 px-1 -mx-1 hover:text-gray-900">
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="text-sm bg-default py-6 text-gray-700">
        <div className="container">{footer.smallText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
