import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Ensure this theme suits your app
import remarkGfm from "remark-gfm"; // Optional: for GitHub Flavored Markdown

export default function MarkdownViewer({ content }) {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                // className="flex flex-col gap-3"
                remarkPlugins={[remarkGfm]} // For GFM support (tables, strikethrough, etc.)
                rehypePlugins={[rehypeHighlight]} // For code highlighting
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}