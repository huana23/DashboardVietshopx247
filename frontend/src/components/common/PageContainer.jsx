function PageContainer({ title, description }) {
  return (
    <div
      className="rounded-xl p-4 lg:p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      style={{
        background:
          "linear-gradient(90deg, var(--color-surface-container), var(--color-surface-container-high))",
        borderLeft: "4px solid var(--color-primary)",
      }}
    >
      <h1 className="text-xl lg:text-2xl font-bold text-on-surface flex items-center gap-3">
        <span
          className="inline-block rounded-full"
          style={{ width: 10, height: 10, background: "var(--color-primary)" }}
        />
        {title}
      </h1>
      <p className="mt-2 lg:mt-3 text-xs lg:text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default PageContainer;
