import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"
import Markdown from "react-markdown"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-6 py-10">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-center md:justify-between md:items-center gap-6 py-10",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full lg:w-6/12 lg:pr-6 text-lg text-center">
            <h2 className="title">{feature.title}</h2>
            <Markdown className="my-6 leading-loose text-md">{feature.description}</Markdown>
            <CustomLink link={feature.link}>
              <div className="text-blue-600 with-arrow hover:underline">{feature.link.text}</div>
            </CustomLink>
          </div>
          {/* Media section */}
          <div className="w-full sm:9/12 lg:w-6/12 max-h-full">
            {/* Images */}
            {feature.media.mime.startsWith("image") && (
              <div className="w-full h-auto filter drop-shadow-xl">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
            {feature.media.mime.startsWith("video") && <Video media={feature.media} className="w-full h-auto mx-auto" autoPlay controls={false} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup
