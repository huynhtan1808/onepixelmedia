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
            <h1 className="text-xl font-semibold absolute -mt-24 md:-mt-32">{project.title}</h1>
            <a rel="nofollow noreferrer" href={project.description} target="_blank" className="absolute -mt-12 md:-mt-16 hover:underline">
              {project.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Showcase
