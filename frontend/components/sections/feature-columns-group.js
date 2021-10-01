import NextImage from "../elements/image"

const FeatureColumnsGroup = ({ data }) => {
  return (
    <div className="container grid md:grid-cols-3 gap-12 align-top py-12">
      {data.features.map((project) => (
        <div className="text-lg text-center py-5" key={project.id}>
          <div className="w-12 h-12 mx-auto">
            <NextImage media={project.icon} />
          </div>
          <h1 className="font-bold mt-4 mb-4">{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureColumnsGroup
