function CodeBlock({ children }) {
  return (
    <pre className="bg-black text-green-400 p-4 lg:p-6 rounded-lg text-xs lg:text-sm overflow-auto">
      <code aria-label="Code snippet" className="whitespace-pre font-mono">
        {children}
      </code>
    </pre>
  );
}

export default CodeBlock;
