import PageHeader from "../components/PageHeader.jsx";
import { company } from "../data.js";

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy">
        Last updated September 1, 2026
      </PageHeader>

      <section className="section">
        <div className="wrap narrow legal">
          <p>
            {company.name} ("we," "us," or "our") operates this website. This policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you give us.</strong> Your name, phone number, email address, driver
              and equipment details, current location, and any message content you submit through our
              application or contact forms, or by calling, texting, or emailing us.
            </li>
            <li>
              <strong>Usage information.</strong> Basic technical data such as browser type, device
              type, and pages viewed, used to keep the site working and improve it.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your inquiry and evaluate driver applications.</li>
            <li>To contact you by phone, email, and SMS about freight, onboarding, and dispatch.</li>
            <li>To operate, maintain, and improve our website and services.</li>
            <li>To comply with legal, tax, safety, and DOT recordkeeping obligations.</li>
          </ul>

          <h2>SMS / text messaging</h2>
          <p>
            When you provide your mobile number and agree to be contacted, we may send you
            application updates, dispatch and load communications, and account-related messages.
            Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to
            opt out at any time and <strong>HELP</strong> for help. Consent to receive SMS is not a
            condition of employment or of any purchase.
          </p>
          <p>
            <strong>
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes. Information sharing with subcontractors in support services, such
              as customer service, is permitted. All other use case categories exclude text messaging
              originator opt-in data and consent; this information will not be shared with any third
              parties.
            </strong>
          </p>

          <h2>How we share information</h2>
          <p>We do not sell your personal information. We share it only:</p>
          <ul>
            <li>
              With service providers who help us operate (for example, phone/SMS providers, email,
              hosting, and settlement processing), under confidentiality obligations.
            </li>
            <li>
              With brokers, shippers, and insurers as needed to book and run freight you are assigned.
            </li>
            <li>When required by law, subpoena, or to protect our rights and safety.</li>
          </ul>

          <h2>Data retention</h2>
          <p>
            We keep your information for as long as needed to provide our services and to meet legal
            and regulatory requirements, then delete or de-identify it.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>Opt out of SMS by replying STOP; opt out of email using the unsubscribe link.</li>
            <li>
              Request access to, correction of, or deletion of your information by contacting us at{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </li>
          </ul>

          <h2>Contact us</h2>
          <p>
            {company.name}
            <br />
            {company.addressLines[0]}
            <br />
            {company.addressLines[1]}
            <br />
            <a href={company.phoneHref}>{company.phone}</a> ·{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
