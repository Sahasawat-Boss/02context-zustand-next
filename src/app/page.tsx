import Link from "next/link"
import DisplayData from "./components/DisplayData"

const HomePage = () => {
  return (
    <main className="p-4">
      <div>
        <h1 className='text-3xl'>Crafting Digital Experiences</h1>
        <p>From concept to code, we transform your vision into engaging, responsive, and powerful web solutions.</p>
      </div>

      <section className='flex my-4 gap-4'>
        <Link href={'/about'} className='bg-white text-black py-1 px-4 rounded-full'>Start Project</Link>
        <Link href={'/about'} className='bg-black text-white py-1 px-4 border rounded-full'>Learn More</Link >
      </section>

      <figure>
        <img src="https://graphio.co.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.7999c522.webp&w=1920&q=75" alt="Hero-Image"
          className='scale-80' />
      </figure>

      <div className="h-96 overflow-auto">
        <h1 className='text-3xl'>Show Data</h1>

        <DisplayData />
      </div>
    </main>
  )
}

export default HomePage