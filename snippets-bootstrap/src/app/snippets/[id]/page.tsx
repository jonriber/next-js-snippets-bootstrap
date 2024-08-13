import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/actions";
interface SnippetProps {
    params: {
        id: string;
    }
}

export default async function Snippet(props: SnippetProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    });

    const deleteSnippetAction = deleteSnippet.bind(null, parseInt(props.params.id));

    if (!snippet) {
        notFound(); 
    }

    return (
        <>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button className="p-2 border rounded border-red-200 bg-red-200">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>
            </pre>
        </>
    );
}

export async function generateStaticParams(){
    const snippets = await db.snippet.findMany();

    return snippets.map((snippet) => {  
        return {
            id: snippet.id.toString()
        }
    });
}