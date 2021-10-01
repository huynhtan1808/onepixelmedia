import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  return (
    <main className="container max-w-3xl text-center flex flex-col md:flex-row items-center justify-between py-12">
      {/* Left column for content */}
      <div className="flex-1">
        {/* Hero section label */}
        <h1 className="uppercase tracking-wide font-semibold">{data.label}</h1>
        {/* Big title */}
        <h2 className="text-gradient hero text-6xl md:text-9xl mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h2>
        {/* Description paragraph */}
        <h2 className="text-xl mb-6">{data.description}</h2>
        {/* Buttons row */}
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {data.buttons.map((button) => (
            <ButtonLink button={button} appearance={getButtonAppearance(button.type, "light")} key={button.id} />
          ))}
        </div>
        {/* Small rich text */}
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <Markdown>{data.smallTextWithLink}</Markdown>
        </div>
      </div>
      {/* Right column for the image 
      <div className="flex-shrink-0 w-full md:w-6/12 mt-6 md:mt-0">
        <NextImage media={data.picture} />
      </div>
      */}
    </main>
  )
}

export default Hero
