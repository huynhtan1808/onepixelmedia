import Image from "../elements/image"

const HeadBanner = ({ data }) => {
  return (
    <main className="bg-white pt-24 text-center text-primary">
      <div className="container max-w-5xl">
        <p className="uppercase tracking-wide font-semibold">{data.label}</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-5 leading-normal">{data.title}</h1>
        <p className="text-lg md:text-xl">{data.description}</p>
      </div>
    </main>
  )
}

export default HeadBanner
