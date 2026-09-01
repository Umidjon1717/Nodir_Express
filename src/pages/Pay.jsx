import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import EarningsCalculator from "../components/EarningsCalculator.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import { grossCards, deductions } from "../data.js";

export default function Pay() {
  return (
    <>
      <PageHeader eyebrow="Pay & Fees" title="Every number, on the table">
        No hidden line items. Here's what you can gross, what comes out each week, and a calculator to
        model your own take-home.
      </PageHeader>

      <section className="section">
        <div className="wrap">
          <div className="gross">
            {grossCards.map((c) => (
              <div className="gross-card" key={c.tag}>
                <div className="tag">{c.tag}</div>
                <div className="amt">
                  {c.amount}
                  <sup>+</sup>
                </div>
                <span className="per">{c.note}</span>
              </div>
            ))}
          </div>

          <div className="pay-cols">
            <div>
              <h3 className="mini-head">Weekly deductions</h3>
              <div className="ledger">
                {deductions.map((d) => (
                  <div className={"ledger-row" + (d.good ? " good" : "")} key={d.label}>
                    <span className="l">{d.label}</span>
                    <span className="r">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mini-head">What the dispatch fee covers</h3>
              <ul className="check-list">
                <li>Load sourcing and rate negotiation</li>
                <li>Booking, rate confirmations, and paperwork</li>
                <li>Check calls and broker follow-up</li>
                <li>Settlement support and weekly planning</li>
              </ul>
              <h3 className="mini-head" style={{ marginTop: 26 }}>
                Fuel discount
              </h3>
              <p className="muted-p">
                50% savings at participating truck stops through our fuel card program, applied
                directly on your settlement.
              </p>
            </div>
          </div>

          <p className="disclaimer">
            Gross ranges are estimates based on recent freight volume and driver availability. Actual
            earnings vary with hours worked, lanes, market rates, fuel, and tolls. Insurance is a
            pass-through of the carrier policy cost. This page is informational and not a guarantee of
            earnings.
          </p>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Calculator</span>
            <h2>Model your take-home</h2>
          </div>
          <EarningsCalculator />
        </div>
      </section>

      <Reveal as="section" className="section" id="faq">
        <div className="wrap narrow">
          <div className="sec-head">
            <span className="eyebrow">Questions</span>
            <h2>Pay &amp; fees, answered</h2>
          </div>
          <FAQ />
        </div>
      </Reveal>

      <CTA />
    </>
  );
}
