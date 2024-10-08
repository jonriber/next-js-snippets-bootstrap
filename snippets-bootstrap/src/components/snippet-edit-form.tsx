"use client"

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client"
import { useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
    const [code,setCode] = useState<string | undefined>(snippet.code);

    function handleEditorChange(value: string | undefined) {
        // console.log(value);
        setCode(value);
    }

    const editSnippetAction = editSnippet.bind(null, snippet.id, code);

    return (
        <>
            <Editor
                height={"40vh"}
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                options={{minimap: {enabled: false}}}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="p-2 border rounded">
                    Save
                </button>
            </form>
        </>
    )
}