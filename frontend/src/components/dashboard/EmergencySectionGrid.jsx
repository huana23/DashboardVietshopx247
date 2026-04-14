function EmergencyCard({ icon, title, label, tone, children }) {
  const toneClass =
    tone === "error"
      ? "text-error border-error/20"
      : tone === "primary"
        ? "text-primary border-primary/20"
        : "text-tertiary border-tertiary/20";

  return (
    <article className={`rounded-xl border bg-surface-container-low p-6 ${toneClass}`}>
      <div className="mb-6 flex items-center gap-3">
        <span className={`material-symbols-outlined ${toneClass.split(" ")[0]}`}>{icon}</span>
        <h2 className="font-headline text-lg font-bold text-on-surface">{title}</h2>
      </div>
      <p
        className={`mb-4 text-[10px] font-bold uppercase tracking-widest ${toneClass.split(" ")[0]}`}
      >
        {label}
      </p>
      {children}
    </article>
  );
}

function EmergencySectionGrid({ procedures, contacts, guidelines }) {
  const safeProcedures = Array.isArray(procedures) ? procedures : [];
  const safeContacts = Array.isArray(contacts) ? contacts : [];
  const safeGuidelines = Array.isArray(guidelines) ? guidelines : [];

  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <EmergencyCard
        icon="emergency"
        title="Emergency Procedures"
        label="Quy trình ứng cứu thông tin"
        tone="error"
      >
        <div className="space-y-4">
          {safeProcedures.length ? (
            safeProcedures.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-error/20 text-xs font-black text-error">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-on-surface-variant">No emergency procedures configured.</p>
          )}
        </div>
      </EmergencyCard>

      <EmergencyCard
        icon="contact_phone"
        title="Emergency Contacts"
        label="Số điện thoại liên hệ"
        tone="primary"
      >
        <div className="divide-y divide-outline-variant/10">
          {safeContacts.length ? (
            safeContacts.map((contact) => (
              <div key={contact.name} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-bold text-on-surface">{contact.name}</p>
                  <p className="text-[10px] text-on-surface-variant">{contact.role}</p>
                </div>
                <p className="font-mono text-sm font-bold tracking-tighter text-primary">
                  {contact.phone}
                </p>
              </div>
            ))
          ) : (
            <p className="py-3 text-xs text-on-surface-variant">No emergency contacts available.</p>
          )}
        </div>
      </EmergencyCard>

      <EmergencyCard
        icon="assignment_late"
        title="Incident Guidelines"
        label="Hướng dẫn xử lý"
        tone="tertiary"
      >
        <div className="space-y-3">
          {safeGuidelines.length ? (
            safeGuidelines.map((item) => (
              <div
                key={item.title}
                className="rounded border border-outline-variant/10 bg-surface-container p-3 transition-colors hover:border-tertiary/30"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-tertiary">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold uppercase text-on-surface">{item.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-on-surface-variant">No incident guidelines available.</p>
          )}
        </div>
      </EmergencyCard>
    </section>
  );
}

export default EmergencySectionGrid;
