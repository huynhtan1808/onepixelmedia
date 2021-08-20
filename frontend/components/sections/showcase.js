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
          <div className="opacity-0 group-hover:opacity-100 z-20 duration-300 text-white flex justify-center items-center">
            <h3 className="text-xl font-semibold absolute mb-40 md:mb-32">{project.title}</h3>
            <a rel="nofollow noreferrer" href={project.description} target="_blank" className="absolute mb-28 md:mb-20">
              {project.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Showcase
