function CodeBlock({ children }) {
    return (
        <pre className="bg-black text-green-400 p-4 rounded-lg text-xs overflow-auto">
            <code aria-label="Code snippet" className="whitespace-pre">{children}</code>
        </pre>
    );
}

export default CodeBlock;