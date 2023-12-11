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
            <h1>@/search/[searchSlug]</h1>
            <div>
                {data.slice(7, 12).map((e, index) => (
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

export async function generateStaticParams() {
    return [
        { searchSlug: "test1" },
        { searchSlug: "test2" },
        { searchSlug: "test3" },
        { searchSlug: "test4" },
    ];
}
