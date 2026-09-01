import { Link } from "../lib/router.jsx";
import { company } from "../data.js";

export default function CTA({
  title = "Ready to keep your truck loaded?",
  body = "Tell us your equipment and where you want to run. We'll come back with a plan for your week.",
}) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          <Link to="/drivers" className="btn btn-solid">
            Apply now
          </Link>
          <a className="btn btn-ghost-invert" href={company.phoneHref}>
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
