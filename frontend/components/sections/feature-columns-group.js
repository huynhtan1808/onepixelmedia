import NextImage from "../elements/image"

const FeatureColumnsGroup = ({ data }) => {
  return (
    <div className="container grid md:grid-cols-3 gap-12 align-top py-12">
      {data.features.map((feature) => (
        <div className="text-lg text-center py-5" key={feature.id}>
          <div className="w-12 h-12 mx-auto">
            <NextImage media={feature.icon} />
          </div>
          <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureColumnsGroup
