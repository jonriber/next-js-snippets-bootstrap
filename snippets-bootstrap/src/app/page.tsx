
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) =>{
    return (
      <Link 
        className="flex justify-between p-2 border rounded"
        href={`/snippets/${snippet.id}`}
        key={snippet.id}>
        <h3>{snippet.title}</h3>
        <h3 className="border p-2 rounded bg-blue-100">View</h3>
      </Link>
    )
  })


  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="border p-2 rounded bg-blue-100" href="/snippets/new">Create a new Snippet</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </>
  );
}
