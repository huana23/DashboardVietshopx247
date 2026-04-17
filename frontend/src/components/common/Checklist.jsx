function Checklist({ items }) {
  return (
    <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
      {items.map((item, i) => (
        <li key={i}>
          <label className="flex items-start gap-2 lg:gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" aria-label={`Checklist item ${i + 1}`} />
            <span className="leading-relaxed">{item}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default Checklist;
