import PageHeader from "../components/PageHeader.jsx";
import { company } from "../data.js";

export default function SmsTerms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="SMS Terms & Conditions">
        Effective Date: September 10, 2026
      </PageHeader>

      <section className="section">
        <div className="wrap narrow legal">
          <p>
            <strong>Website:</strong> <a href="#/">https://nodirexpress.vercel.app/</a>
          </p>
          <ul>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <a href="#/privacy">https://nodirexpress.vercel.app/#/privacy</a>
            </li>
            <li>
              <strong>SMS Terms &amp; Conditions:</strong>{" "}
              <a href="#/sms-terms">https://nodirexpress.vercel.app/#/sms-terms</a>
            </li>
          </ul>

          <h2>SMS Consent Communication</h2>
          <p>
            The information (Phone Numbers) obtained as part of the SMS consent process will not be
            shared with third parties for marketing purposes.
          </p>

          <h2>Types of SMS Communications</h2>
          <p>
            If you have consented to receive text messages from {company.name}, you may receive
            messages related to the following:
          </p>
          <ul>
            <li>Conversation about dispatch, load assignments, and pickup or delivery coordination.</li>
            <li>Conversation about follow-up messages, check calls, and paperwork.</li>
            <li>Conversation about driver application and onboarding status.</li>
            <li>Conversation about account, settlement, and service updates.</li>
          </ul>
          <p>
            Example: &ldquo;Hello, this is {company.name}. Your load #12345 is ready for pickup at
            [Location] on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from{" "}
            {company.name} at any time.&rdquo;
          </p>

          <h2>Message Frequency</h2>
          <p>
            Message frequency may vary depending on the type of communication. For example, you may
            receive up to 5 SMS messages per week related to your loads, conversations, or account
            status.
          </p>

          <h2>Potential Fees for SMS Messaging</h2>
          <p>
            Please note that standard message and data rates may apply, depending on your
            carrier&apos;s pricing plan. These fees may vary if the message is sent domestically or
            internationally.
          </p>

          <h2>Opt-In Method</h2>
          <p>
            You may opt in to receive SMS messages from {company.name} in the following ways:
          </p>
          <ul>
            <li>
              By submitting an online form on our <a href="#/contact">Contact</a> page or{" "}
              <a href="#/drivers">Apply to Drive</a> page and checking the SMS consent box, which is
              not pre-checked.
            </li>
            <li>
              By sending a text message to us first at <a href={company.smsHref}>{company.phone}</a>.
            </li>
          </ul>

          <h2>Opt-Out Method</h2>
          <p>
            You can opt out of receiving SMS messages at any time. To do so, simply reply
            &ldquo;STOP&rdquo; to any SMS message you receive. Alternatively, you can contact us
            directly to request removal from our messaging list.
          </p>

          <h2>Help</h2>
          <p>
            If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get
            help directly from us at <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <h2>Additional Options</h2>
          <p>
            If you do not wish to receive SMS messages, you can choose not to check the SMS consent
            box on our forms.
          </p>

          <h2>Standard Messaging Disclosures</h2>
          <ul>
            <li>Message and data rates may apply.</li>
            <li>You can opt out at any time by texting &ldquo;STOP.&rdquo;</li>
            <li>
              For assistance, text &ldquo;HELP&rdquo; or visit our{" "}
              <a href="#/privacy">Privacy Policy</a> and{" "}
              <a href="#/sms-terms">Terms &amp; Conditions</a> pages.
            </li>
            <li>Message frequency may vary.</li>
          </ul>

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
