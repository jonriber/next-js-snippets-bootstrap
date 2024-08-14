
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) =>{
    return (
      <Link 
        className="d-flex justify-content-between p-2 border rounded"
        href={`/snippets/${snippet.id}`}
        key={snippet.id}>
        <h3>{snippet.title}</h3>
        <h3 className="border p-2 rounded bg-primary">View</h3>
      </Link>
        )
  })


  return (
    <>
      <div className="d-flex m-2 justify-content-between align-items-center">
      <h1 className="text-xl font-weight-bold">Snippets</h1>
      <Link className="border p-2 rounded bg-primary" href="/snippets/new">Create a new Snippet</Link>
      </div>
      <div className="d-flex flex-column gap-2">
      {renderedSnippets}
      </div>
    </>
    );
}
