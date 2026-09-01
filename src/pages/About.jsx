import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import CTA from "../components/CTA.jsx";
import { company, points } from "../data.js";

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="A dispatch team that runs like an owner-operator">
        {company.name} is a {company.city}-based motor carrier and dispatch operation. We know the
        margins because we run on them too.
      </PageHeader>

      <section className="section">
        <div className="wrap narrow prose">
          <p>
            {company.name} was founded to give owner-operators a straightforward alternative to
            mega-carrier lease programs and revolving-door dispatch services. We put drivers on a
            steady blend of Amazon trailer-pool freight and hand-negotiated street loads, keep the
            fee structure flat and visible, and plan the week ahead instead of scrambling load to
            load.
          </p>
          <p>
            Based in {company.city}, we support drivers across the lower 48 with over-the-road and
            extended regional freight. Our dispatchers negotiate
            every street rate, handle the paperwork and check calls, and keep your truck moving so
            your revenue stays predictable.
          </p>

          <div className="cred-row">
            <div>
              <span className="k">USDOT</span>
              <span className="v mono">{company.usdot}</span>
            </div>
            <div>
              <span className="k">MC</span>
              <span className="v mono">{company.mc}</span>
            </div>
            <div>
              <span className="k">Based in</span>
              <span className="v">{company.city}</span>
            </div>
            <div>
              <span className="k">Coverage</span>
              <span className="v">Lower 48</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How we operate</span>
            <h2>What you can count on</h2>
          </div>
          <div className="points">
            {points.map((p, i) => (
              <div className="point" key={p.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="section">
        <div className="wrap narrow prose">
          <h2 className="mini-head">Safety &amp; compliance</h2>
          <p>
            We expect ELD-compliant operation, current DOT medical certification, and adherence to
            hours-of-service rules on every load. Clean MVR and DOT records keep insurance costs down
            for everyone in the fleet — and keep you on the road.
          </p>
        </div>
      </Reveal>

      <CTA />
    </>
  );
}
