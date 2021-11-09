import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import Link from "next/link"
import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center tracking-wide font-medium text-base md:text-sm border rounded-lg",
        // Full-size button
        {
          "px-10 py-4": compact === false,
        },
        // Compact button
        {
          "px-5 py-2.5": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-primary bg-gradient-to-r from-1 via-2 via-3 to-black text-white": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "bg-secondary text-primary border-primary hover:bg-primary hover:text-secondary": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-primary text-white border-primary transition-all transform hover:-translate-y-0.5": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-primary bg-secondary border-secondary hover:transition duration-150 ease-in-out transform hover:-translate-y-0.5": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent button={button} appearance={appearance} compact={compact} />
    </CustomLink>
  )
}

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf(["dark", "white-outline", "white", "dark-outline"]),
  compact: PropTypes.bool,
}

export default ButtonLink
