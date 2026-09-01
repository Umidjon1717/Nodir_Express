import PageHeader from "../components/PageHeader.jsx";
import InquiryForm from "../components/InquiryForm.jsx";
import { company } from "../data.js";

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to dispatch">
        Questions about freight, pay, or getting set up? Reach us any day of the week.
      </PageHeader>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-card">
            <h2 className="mini-head">Send a message</h2>
            <InquiryForm variant="contact" />
          </div>

          <aside className="info">
            <dl>
              <dt>Phone</dt>
              <dd>
                <a href={company.phoneHref}>{company.phone}</a>
              </dd>
              <dt>Text / SMS</dt>
              <dd>
                <a href={company.smsHref}>{company.phone}</a>
              </dd>
              <dt>Email</dt>
              <dd className="mono">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
              <dt>Address</dt>
              <dd>
                {company.addressLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < company.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </dd>
              <dt>Hours</dt>
              <dd>{company.hours}</dd>
              <dt>USDOT / MC</dt>
              <dd className="mono">
                {company.usdot} / {company.mc}
              </dd>
            </dl>

            <p className="consent-note">
              By calling or texting {company.phone} you agree to receive calls and SMS from{" "}
              {company.name} related to your inquiry. Message frequency varies. Message and data rates
              may apply. Reply STOP to opt out or HELP for help. See our{" "}
              <a href="#/sms-terms">SMS Terms</a> and <a href="#/privacy">Privacy Policy</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
