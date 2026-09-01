import PageHeader from "../components/PageHeader.jsx";
import { company } from "../data.js";

export default function SmsTerms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="SMS Terms & Conditions">
        Last updated September 1, 2026
      </PageHeader>

      <section className="section">
        <div className="wrap narrow legal">
          <h2>Program description</h2>
          <p>
            {company.name} sends SMS/text messages to drivers and applicants who have provided their
            mobile number and consented to be contacted. Messages relate to driver applications and
            onboarding, load and dispatch coordination, check calls, paperwork, settlement, and other
            account and service notifications.
          </p>

          <h2>How you opt in</h2>
          <p>
            You opt in by submitting your mobile number and checking the consent box on our
            application or contact form, or by texting us first at{" "}
            <a href={company.smsHref}>{company.phone}</a>. Consent to receive SMS is not a condition
            of employment, engagement, or any purchase.
          </p>

          <h2>Message frequency</h2>
          <p>
            Message frequency varies based on your application status and dispatch activity. During
            active dispatch you may receive multiple messages per day.
          </p>

          <h2>Fees</h2>
          <p>Message and data rates may apply, depending on your mobile carrier and plan.</p>

          <h2>Opting out</h2>
          <p>
            Reply <strong>STOP</strong> to any message to unsubscribe. You will receive one
            confirmation message and then no further texts unless you opt in again. Reply{" "}
            <strong>HELP</strong> for assistance, or contact us using the details below.
          </p>

          <h2>Supported carriers</h2>
          <p>
            Carriers are not liable for delayed or undelivered messages. Message delivery is subject
            to effective transmission by your mobile carrier and is not guaranteed.
          </p>

          <h2>Privacy</h2>
          <p>
            Your mobile number and opt-in consent are never shared with third parties or affiliates
            for marketing purposes. See our <a href="#/privacy">Privacy Policy</a> for full details.
          </p>

          <h2>Contact</h2>
          <p>
            {company.name}
            <br />
            {company.addressLines[0]}, {company.addressLines[1]}
            <br />
            <a href={company.phoneHref}>{company.phone}</a> ·{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
