export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header">
      <div className="wrap">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {children && <p className="page-header-lede">{children}</p>}
      </div>
    </section>
  );
}
