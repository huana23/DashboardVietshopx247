function PageContainer({ title, description }) {
  return (
    <section className="p-6 md:p-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
    </section>
  );
}

export default PageContainer;
