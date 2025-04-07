export default async function DisplayData() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <div>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        {post.title}
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

// type BlogPost = {
//     id: number;
//     title: string;
//     content?: string; // Optional, in case you want more later
// };

// export default async function DisplayData() {
//     try {
//         const data = await fetch('https://api.vercel.app/blog');

//         if (!data.ok) {
//             throw new Error('Failed to fetch posts');
//         }

//         const posts: BlogPost[] = await data.json();

//         return (
//             <ul className="p-6 space-y-4">
//                 {posts.map((post) => (
//                     <li key={post.id} className="border p-4 rounded">
//                         {post.title}
//                     </li>
//                 ))}
//             </ul>
//         );
//     } catch (error) {
//         return (
//             <div className="p-6 text-red-600">
//                 ❌ Error loading blog posts.
//             </div>
//         );
//     }
// }
