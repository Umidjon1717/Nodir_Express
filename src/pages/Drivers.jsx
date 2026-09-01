import PageHeader from "../components/PageHeader.jsx";
import InquiryForm from "../components/InquiryForm.jsx";
import { requirements, heroStats } from "../data.js";

export default function Drivers() {
  return (
    <>
      <PageHeader eyebrow="Drivers" title="Apply to drive with Nodir Express">
        Fill this out and your email app opens with everything ready to send. We reply within one
        business day.
      </PageHeader>

      <section className="section">
        <div className="wrap apply-grid">
          <div className="apply-form">
            <InquiryForm variant="application" />
          </div>

          <aside className="apply-side">
            <div className="side-card">
              <h3>What you'll need</h3>
              <ul className="check-list">
                {requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="side-card side-card-dark">
              <h3>Weekly potential</h3>
              <dl className="side-stats">
                {heroStats.map((s) => (
                  <div key={s.k}>
                    <dt>{s.k}</dt>
                    <dd className="mono">
                      {s.v}
                      {s.plus}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="side-note">Estimates — see the Pay page for the full breakdown.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
