import NextImage from "../elements/image"

const Showcase = ({ data }) => {
  return (
    <div className="container grid md:grid-cols-2 gap-12 py-12">
      {data.projects.map((project) => (
        <div className="group hover12 text-center" key={project.id}>
          <div className="shadow-xl">
            <figure>
              <NextImage media={project.icon} />
            </figure>
          </div>
          <div className="opacity-50 group-hover:opacity-100 z-20 duration-300 text-black flex justify-center items-center">
            <h3 className="text-xl font-semibold absolute -mt-28 md:-mt-40">{project.title}</h3>
            <a rel="nofollow noreferrer" href={project.description} target="_blank" className="absolute -mt-16 md:-mt-20 hover:underline">
              {project.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Showcase
