import NextImage from "../elements/image"

const Showcase = ({ data }) => {
  return (
    <div className="container grid md:grid-cols-2 gap-10 py-12">
      {data.projects.map((project) => (
        <div className="group hover12 text-center" key={project.id}>
          <div className="">
            <figure>
              <NextImage media={project.icon} />
            </figure>
          </div>
          <div className="opacity-0 group-hover:opacity-100 z-20 duration-300 text-white flex justify-center items-center">
            <h3 className="text-xl font-semibold absolute mb-32">{project.title}</h3>
            <a href={project.description} className="absolute mb-20">
              {project.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Showcase
