import { Link } from "../lib/router.jsx";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="wrap narrow">
        <span className="eyebrow">404</span>
        <h1>This road doesn't go through</h1>
        <p>The page you're looking for was moved or never existed.</p>
        <Link to="/" className="btn btn-solid">
          Back to home
        </Link>
      </div>
    </section>
  );
}
