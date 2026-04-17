function Checklist({ items }) {
    return (
        <ul className="space-y-2 text-sm">
            {items.map((item, i) => (
                <li key={i}>
                    <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" className="mt-1" aria-label={`Checklist item ${i + 1}`} />
                        <span>{item}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default Checklist;