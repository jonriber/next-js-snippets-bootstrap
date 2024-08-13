export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Github Repo <a href="https://github.com/jonriber/next-crud-snippets" className="underline">HERE</a></p>
          <p>&copy; {new Date().getFullYear()} Jonatas Ribeiro. All rights reserved.</p>
        </div>
      </footer>
    );
  }