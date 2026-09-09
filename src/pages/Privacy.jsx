import PageHeader from "../components/PageHeader.jsx";
import { company } from "../data.js";

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy">
        Effective Date: September 10, 2026
      </PageHeader>

      <section className="section">
        <div className="wrap narrow legal">
          <p>
            <strong>Website URL:</strong>{" "}
            <a href="#/">https://nodirexpress.vercel.app/</a>
          </p>
          <p>
            At {company.shortName}, we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains how we collect, use,
            and safeguard your personal data when you visit our website or interact with our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you fill out forms
            on our website, contact us, or register for our services. This information may include:
          </p>
          <ul>
            <li>
              <strong>Contact Information:</strong> Full name, email address, phone number, and
              physical mailing address.
            </li>
            <li>
              <strong>Account &amp; Service Details:</strong> Service requests, inquiries, driver and
              equipment details, and communication history.
            </li>
            <li>
              <strong>Technical &amp; Usage Data:</strong> Information collected automatically when
              you visit our site, including IP address, browser type, device information, and browsing
              analytics.
            </li>
          </ul>

          <h2>2. How Personal Information Is Used</h2>
          <p>
            We use the personal information collected for legitimate business purposes, including:
          </p>
          <ul>
            <li>Providing, operating, and maintaining our services and website.</li>
            <li>Processing requests, transactions, and sending operational updates.</li>
            <li>
              Communicating with you via email, phone calls, or SMS regarding your inquiry, account,
              or service status.
            </li>
            <li>Improving website performance, user experience, and customer service.</li>
            <li>Meeting legal, regulatory, and compliance requirements.</li>
          </ul>

          <h2>3. Disclosure &amp; Sharing of Personal Information</h2>
          <p>
            We do not sell, rent, or trade your personal information. We may share your personal data
            only under the following limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with trusted third-party
              service providers (such as web hosting partners, data analytics providers, or payment
              processors) who assist us in operating our website and conducting our business, strictly
              under confidentiality agreements.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required by law,
              court order, or governmental regulations, or to protect the rights, property, and safety
              of {company.shortName} and our users.
            </li>
          </ul>

          <h2>4. SMS &amp; Mobile Information Privacy (Carrier Compliance)</h2>
          <p>
            <strong>
              No mobile information will be shared with third parties/affiliates for
              marketing/promotional purposes.
            </strong>
          </p>
          <ul>
            <li>
              <strong>SMS Consent Non-Sharing Clause:</strong> All the above categories exclude text
              messaging originator opt-in data and consent; this information will not be shared with
              any third parties or affiliates under any circumstances.
            </li>
            <li>
              <strong>SMS Opt-In / Consent:</strong> Text messaging opt-in data and user consent are
              kept strictly confidential and are used solely to deliver requested text communications
              to you.
            </li>
          </ul>
          <p>
            <strong>SMS consent is not shared with third parties or affiliates.</strong>
          </p>

          <h2>5. How to Opt-Out of SMS Communications</h2>
          <p>
            If you have opted in to receive SMS messages from {company.shortName}, you may opt out at
            any time by replying <strong>STOP</strong> to any text message you receive from us. You
            may also reply <strong>HELP</strong> for support or contact us directly using the contact
            details below.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to
            protect your personal information against unauthorized access, alteration, disclosure, or
            destruction. However, please note that no transmission over the Internet or electronic
            storage method is 100% secure.
          </p>

          <h2>7. Accessing and Updating Your Information</h2>
          <p>
            You have the right to request access to, correction of, or deletion of the personal
            information we hold about you. To submit a request, please contact us at the contact
            information provided below.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will
            be effective immediately upon posting the updated policy on our website at{" "}
            <a href="#/">https://nodirexpress.vercel.app/</a>.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have questions or concerns regarding this Privacy Policy, please contact us:</p>
          <ul>
            <li>
              <strong>Website:</strong> <a href="#/">https://nodirexpress.vercel.app/</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <strong>Address:</strong> {company.addressLines[0]}, {company.addressLines[1]}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
