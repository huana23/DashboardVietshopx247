function EmergencyCard({ icon, title, label, tone, children }) {
  const toneClass =
    tone === "error"
      ? "text-error border-error/20"
      : tone === "primary"
        ? "text-primary border-primary/20"
        : "text-tertiary border-tertiary/20";

  return (
    <article
      className={`h-full flex flex-col rounded-xl border bg-surface-container-low p-4 lg:p-6 ${toneClass}`}
    >
      <div className="mb-4 lg:mb-6 flex items-center gap-2">
        <span
          className={`material-symbols-outlined text-base lg:text-lg ${toneClass.split(" ")[0]}`}
        >
          {icon}
        </span>
        <h2 className="font-headline text-base lg:text-lg font-bold text-on-surface">{title}</h2>
      </div>
      <p
        className={`mb-4 lg:mb-6 text-xs font-bold uppercase tracking-widest ${toneClass.split(" ")[0]}`}
      >
        {label}
      </p>
      <div className="flex-1 flex flex-col gap-3">{children}</div>
    </article>
  );
}

function EmergencySectionGrid({ procedures, contacts, guidelines }) {
  const safeProcedures = Array.isArray(procedures) ? procedures : [];
  const safeContacts = Array.isArray(contacts) ? contacts : [];
  const safeGuidelines = Array.isArray(guidelines) ? guidelines : [];

  return (
    <section className="w-full h-full grid grid-cols-1 gap-6 xl:grid-cols-3 auto-rows-fr">
      <EmergencyCard
        icon="emergency"
        title="Thủ tục khẩn cấp"
        label="Quy trình ứng cứu thông tin"
        tone="error"
      >
        <div className="space-y-3">
          {safeProcedures.length ? (
            safeProcedures.map((step, index) => (
              <div key={step.title} className="flex items-start gap-3">
                <span className="flex h-6 lg:h-7 w-6 lg:w-7 items-center justify-center rounded bg-error/20 text-xs font-black text-error flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xs lg:text-sm font-bold text-on-surface">{step.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-on-surface-variant">
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
        title="Liên hệ khẩn cấp"
        label="Số điện thoại liên hệ"
        tone="primary"
      >
        <div className="divide-y divide-outline-variant/10 space-y-0">
          {safeContacts.length ? (
            safeContacts.map((contact) => (
              <div key={contact.name} className="flex items-center justify-between py-3 lg:py-4">
                <div>
                  <p className="text-xs lg:text-sm font-bold text-on-surface">{contact.name}</p>
                  <p className="text-xs text-on-surface-variant">{contact.role}</p>
                </div>
                <p className="font-mono text-xs lg:text-sm font-bold tracking-tighter text-primary">
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
        title="Hướng dẫn sự cố"
        label="Hướng dẫn xử lý"
        tone="tertiary"
      >
        <div className="space-y-2 lg:space-y-3">
          {safeGuidelines.length ? (
            safeGuidelines.map((item) => (
              <div
                key={item.title}
                className="rounded border border-outline-variant/10 bg-surface-container p-2.5 lg:p-3 transition-colors hover:border-tertiary/30"
              >
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm lg:text-base text-tertiary">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold uppercase text-on-surface">{item.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-on-surface-variant">
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
