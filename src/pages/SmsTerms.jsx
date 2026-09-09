import PageHeader from "../components/PageHeader.jsx";
import { company } from "../data.js";

export default function SmsTerms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="SMS Terms & Conditions (Terms of Service)">
        Effective Date: September 10, 2026
      </PageHeader>

      <section className="section">
        <div className="wrap narrow legal">
          <p>
            <strong>Website:</strong> <a href="#/">https://nodirexpress.vercel.app/</a>
          </p>
          <p>
            <strong>Direct Policy Links:</strong>
          </p>
          <ul>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <a href="#/privacy">https://nodirexpress.vercel.app/#/privacy</a>
            </li>
            <li>
              <strong>SMS Terms of Service:</strong>{" "}
              <a href="#/sms-terms">https://nodirexpress.vercel.app/#/sms-terms</a>
            </li>
          </ul>

          <h2>1. Overview &amp; Consent</h2>
          <p>
            By opting in to receive text messages from {company.shortName}, you agree to these SMS
            Terms &amp; Conditions. You may opt in by submitting your contact details and checking the
            SMS consent box on our web forms at <a href="#/">https://nodirexpress.vercel.app/</a>.
          </p>

          <h2>2. Types of Messages You May Receive</h2>
          <p>
            When you opt in to receive SMS messages from {company.shortName}, you can expect to
            receive transaction- and customer service-related communications, including:
          </p>
          <ul>
            <li>
              <strong>Load Alerts &amp; Status Updates:</strong> Dispatch notifications, load
              confirmations, and check-call updates.
            </li>
            <li>
              <strong>Appointment &amp; Onboarding Reminders:</strong> Scheduling updates, pickup and
              delivery window confirmations, and status alerts.
            </li>
            <li>
              <strong>Account Notifications:</strong> Security verifications, operational messages,
              paperwork and settlement updates, and customer support responses.
            </li>
          </ul>

          <h2>3. Message Frequency</h2>
          <p>
            <strong>Messaging frequency may vary</strong> depending on your interactions with our
            services, active loads, and account activity.
          </p>

          <h2>4. Cost Notice</h2>
          <p>
            <strong>Message and data rates may apply</strong> to any text messages sent or received
            as part of this program, according to your mobile carrier&apos;s plan rates.
          </p>

          <h2>5. Opt-Out Instructions (How to Unsubscribe)</h2>
          <p>
            You can cancel the SMS service at any time. <strong>To opt out at any time, text STOP.</strong>
          </p>
          <p>
            Upon texting <strong>STOP</strong>, you will receive a final confirmation message stating
            that you have been unsubscribed. After this, you will no longer receive text messages from
            {" "}
            {company.shortName} unless you opt back in.
          </p>

          <h2>6. Support Instructions</h2>
          <p>If you need help or experience issues with the messaging service:</p>
          <ul>
            <li>
              <strong>For assistance, text HELP</strong> or visit our website at{" "}
              <a href="#/">https://nodirexpress.vercel.app/</a>.
            </li>
            <li>
              You can also contact our support team directly via email at{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> or by phone at{" "}
              <a href={company.phoneHref}>{company.phone}</a>.
            </li>
          </ul>

          <h2>7. Privacy &amp; SMS Data Protection</h2>
          <p>
            Your opt-in consent and phone number will not be sold, rented, or shared with third
            parties or affiliates for marketing purposes. For complete details on how your personal
            data is collected and used, please visit our <strong>Privacy Policy</strong> at{" "}
            <a href="#/privacy">https://nodirexpress.vercel.app/#/privacy</a>.
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
