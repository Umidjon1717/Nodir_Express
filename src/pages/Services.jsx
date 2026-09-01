import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import CTA from "../components/CTA.jsx";
import { services, specs } from "../data.js";

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Freight, trailers, and dispatch — handled">
        We keep owner-operators loaded with a mix of Amazon trailer pools, dedicated-style drop &amp;
        hook, and negotiated street freight. Here's what you can run with us.
      </PageHeader>

      <section className="section">
        <div className="wrap">
          <div className="svc-list">
            {services.map((s) => (
              <Reveal className="svc-row" id={s.slug} key={s.slug}>
                <div className="svc-row-head">
                  <h2>{s.title}</h2>
                  <p>{s.blurb}</p>
                </div>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Equipment</span>
            <h2>What it takes to run</h2>
            <p>Straightforward requirements. If your truck fits and your record is clean, we can move fast.</p>
          </div>
          <div className="specs">
            {specs.map((s) => (
              <div className="spec" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Not sure which freight fits your truck?" body="Tell us what you drive and where you're based — we'll map out the best mix for you." />
    </>
  );
}
