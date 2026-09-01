import { Link } from "../lib/router.jsx";
import Reveal from "../components/Reveal.jsx";
import EarningsCalculator from "../components/EarningsCalculator.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import { company, heroStats, services, points, faqs } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <span className="eyebrow">Owner-operators &amp; CDL-A drivers</span>
          <h1>
            Keep the wheels turning with a <em>dispatch team</em> that keeps you loaded
          </h1>
          <p className="lede">
            {company.name} runs Power Only and Van freight out of {company.city} — steady Amazon and
            street loads, drop &amp; hook when it's available, a 50% fuel discount, and a flat, honest
            fee structure. No forced dedicated lanes.
          </p>
          <div className="hero-actions">
            <Link to="/drivers" className="btn btn-solid">
              Apply to drive
            </Link>
            <Link to="/pay" className="btn btn-ghost">
              See the numbers
            </Link>
          </div>

          <div className="stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">
                  {s.v}
                  <small>{s.plus}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What we move</span>
            <h2>Freight built around your truck</h2>
            <p>
              A blend of dedicated-style pools and hand-picked street freight so your week stays full
              and your revenue stays predictable.
            </p>
          </div>
          <div className="card-grid">
            {services.slice(0, 6).map((s) => (
              <Link to={`/services#${s.slug}`} className="svc-card" key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="svc-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="section band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Run the math</span>
            <h2>What a week could look like</h2>
            <p>
              Slide to your expected gross. We'll show the dispatch fee, the fixed weekly items, and
              what's left before your own fuel and truck costs.
            </p>
          </div>
          <EarningsCalculator />
        </div>
      </section>

      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why carriers stay</span>
            <h2>How we work</h2>
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
      </Reveal>

      <Reveal as="section" className="section">
        <div className="wrap narrow">
          <div className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h2>Common questions</h2>
          </div>
          <FAQ items={faqs.slice(0, 4)} />
          <p className="section-link">
            <Link to="/pay#faq">All pay &amp; fee questions →</Link>
          </p>
        </div>
      </Reveal>

      <CTA />
    </>
  );
}
