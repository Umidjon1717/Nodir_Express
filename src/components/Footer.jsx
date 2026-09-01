import { Link } from "../lib/router.jsx";
import { company } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <b>
            Nodir <span>Express</span> Inc
          </b>
          <p>
            Power Only &amp; Van freight dispatch for owner-operators and CDL drivers. Based in{" "}
            {company.city}, running the lower 48.
          </p>
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <Link to="/services">Services</Link>
          <Link to="/pay">Pay &amp; Fees</Link>
          <Link to="/about">About</Link>
          <Link to="/drivers">Apply to drive</Link>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={company.smsHref}>Text us</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>
            {company.addressLines[0]}
            <br />
            {company.addressLines[1]}
          </span>
        </div>

        <div className="foot-col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/sms-terms">SMS Terms</Link>
          <span className="mono">USDOT {company.usdot}</span>
          <span className="mono">MC {company.mc}</span>
        </div>
      </div>

      <div className="wrap foot-base">
        <span>
          © {year} {company.name}. All rights reserved.
        </span>
        <span className="mono">
          Text messaging consent is never shared with third parties.
        </span>
      </div>
    </footer>
  );
}
