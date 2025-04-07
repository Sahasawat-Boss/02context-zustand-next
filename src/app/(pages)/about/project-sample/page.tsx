"use client"

import Link from "next/link"
import { useState } from "react"

const ProjectSample = () => {

    const [count, setCount] = useState(50);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);


    return (
        <main className="p-4"> 
            <div>
                <h1 className='text-3xl'>Project Sample Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cupiditate qui fugiat numquam repellat nemo fuga, nulla culpa ab adipisci, voluptates omnis exercitationem labore eaque necessitatibus et reiciendis harum. Quia.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cupiditate qui fugiat numquam repellat nemo fuga, nulla culpa ab adipisci, voluptates omnis exercitationem labore eaque necessitatibus et reiciendis harum. Quia.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cupiditate qui fugiat numquam repellat nemo fuga, nulla culpa ab adipisci, voluptates omnis exercitationem labore eaque necessitatibus et reiciendis harum. Quia.</p>
            </div>

            <section className='flex my-4 gap-4'>
                <Link href={'/about'} className='bg-white text-black py-1 px-4 rounded-full'>About</Link>
            </section>

            <section>
                <button onClick={countUp} className="border rounded-full px-2">Count +</button>
                <button onClick={countDown} className="border rounded-full px-2">Count -</button>
                <p>Count: {count}</p>
            </section>

            <figure>
                <img src="https://graphio.co.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevelopment-feature-2.091a38ac.png&w=640&q=75" alt="About-Image"
                    className='scale-80' />
            </figure>
        </main>
    )
}

export default ProjectSample