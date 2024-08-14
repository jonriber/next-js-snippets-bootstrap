import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <p>Github Repo <a href="https://github.com/jonriber/next-crud-snippets" className="text-white underline">HERE</a></p>
                <p>&copy; {new Date().getFullYear()} Jonatas Ribeiro. All rights reserved.</p>
            </div>
        </footer>
    );
}