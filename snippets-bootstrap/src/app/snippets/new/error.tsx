"use client"

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

export default function NewSnippetErrorPage({error}: ErrorPageProps) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>{error.message}</h2>
    </div>
  );
}