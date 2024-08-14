"use client"

import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

export default function NewSnippetPage() {

  const [formState,action] = useFormState(createSnippet,{message: ""})

return (
    <form action={action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="form-group">
                <div className="row">
                    <label className="col-sm-2 col-form-label" htmlFor="title">
                        Title
                    </label>
                    <div className="col-sm-10">
                        <input 
                            id="title"
                            className="form-control" 
                            name="title" 
                        />
                    </div>
                </div>

                <div className="row">
                    <label className="col-sm-2 col-form-label" htmlFor="code">
                        Code
                    </label>
                    <div className="col-sm-10">
                        <textarea 
                            id="code"
                            className="form-control" 
                            name="code" 
                        />
                    </div>
                </div>
                {formState.message ? <div className="my-2 p-2 bg-danger text-white">{formState.message}</div> : null}
                <button type="submit" className="btn btn-primary">Create Snippet</button>
            </div>
    </form>
);
}