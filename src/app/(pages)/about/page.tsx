import Link from "next/link"

const About = () => {
    return (
        <main className="p-4">
            <div>
                <h1 className='text-3xl'>About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cupiditate qui fugiat numquam repellat nemo fuga, nulla culpa ab adipisci, voluptates omnis exercitationem labore eaque necessitatibus et reiciendis harum. Quia.</p>
            </div>

            <section className='flex my-4 gap-4'>
                <Link href={'/'} className='bg-white text-black py-1 px-4 rounded-full'>Home</Link>
                <Link href={'/about/project-sample'} className='bg-white text-black py-1 px-4 rounded-full'>Project Sample</Link>
            </section>

            <figure>
                <img src="https://graphio.co.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdropright-app-right.c917acd5.jpg&w=1080&q=75" alt="About-Image"
                    className='scale-80' />
            </figure>
        </main>
    )
}

export default About