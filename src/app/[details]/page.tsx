export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const revalidate = 604800; // 1 week

export default async function page() {
    const data: Post[] = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());

    return (
        <div>
            <h1>@/[details]</h1>
            <div>
                {data.slice(0, 6).map((e, index) => (
                    <div key={index}>
                        <p>ID: {e.id}</p>
                        <p>title: {e.title}</p>
                        <p>txt: {e.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
