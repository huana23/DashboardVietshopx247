function Section({ title, children }) {
  return (
    <div className="bg-surface-container-low rounded-xl shadow p-5 lg:p-6">
      <h2 className="font-semibold text-base lg:text-lg mb-4 lg:mb-5 text-on-surface">{title}</h2>
      {children}
    </div>
  );
}

export default Section;
