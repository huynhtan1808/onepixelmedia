import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import Loader from "./loader"

const Button = ({ button, appearance, compact = false, handleClick, loading = false, type }) => {
  return (
    <button link={button} onClick={handleClick} type={type}>
      <div
        className={classNames(
          // Common classes
          "flex w-full focus:outline-none justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-2xl",
          // Full-size button
          {
            "px-8 py-3": compact === false,
          },
          // Compact button
          {
            "px-6 py-2": compact === true,
          },
          // Specific to when the button is fully dark
          {
            "bg-primary text-white border-none": appearance === "dark",
          },
          // Specific to when the button is dark outlines
          {
            "text-primary border-primary": appearance === "dark-outline",
          },
          // Specific to when the button is fully white
          {
            "bg-white text-primary border-primary": appearance === "white",
          },
          // Specific to when the button is white outlines
          {
            "text-white border-white": appearance === "white-outline",
          }
        )}
      >
        {loading && <Loader />}
        {button.text}
      </div>
    </button>
  )
}

Button.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf(["dark", "white-outline", "white", "dark-outline"]),
  compact: PropTypes.bool,
}

export default Button
