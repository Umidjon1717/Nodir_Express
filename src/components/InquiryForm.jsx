import { useState } from "react";
import { company, mailto, formEndpoint } from "../data.js";

const FORMSPREE_READY = !formEndpoint.includes("YOUR_FORM_ID");

// Carrier / TCR-approved opt-in checkbox wording. Optional checkbox: visitors
// can submit the form without it — see the "Additional Options" note in the
// SMS Terms & Conditions.
const SMS_CONSENT_LABEL = (
  <>
    By checking this box, you agree to receive SMS messages from {company.name} related to
    conversational purposes. You may reply STOP to opt out at any time. Reply HELP to{" "}
    {company.phone} for assistance. Messages and data rates may apply. Message frequency will vary.
    Learn more on our <a href="#/privacy">privacy policy page</a> and{" "}
    <a href="#/sms-terms">Terms &amp; Conditions</a>.
  </>
);

const APPLICATION_FIELDS = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  {
    name: "driverType",
    label: "Driver type",
    type: "select",
    required: true,
    options: ["Solo", "Team", "Not sure yet"],
  },
  {
    name: "equipment",
    label: "Equipment",
    type: "select",
    required: true,
    options: ["Power Only (own tractor)", "Have my own van", "Need a truck / other"],
  },
  { name: "truckYear", label: "Tractor year", type: "text", required: false, placeholder: "2019 – 2026" },
  { name: "experience", label: "Years of CDL-A experience", type: "text", required: true },
  { name: "location", label: "Current city / state", type: "text", required: true },
  { name: "message", label: "Anything else we should know?", type: "textarea", required: false },
  {
    name: "consent",
    label: SMS_CONSENT_LABEL,
    type: "checkbox",
    required: false,
  },
];

const CONTACT_FIELDS = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "message", label: "How can we help?", type: "textarea", required: true },
  {
    name: "consent",
    label: SMS_CONSENT_LABEL,
    type: "checkbox",
    required: false,
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InquiryForm({ variant = "application" }) {
  const fields = variant === "contact" ? CONTACT_FIELDS : APPLICATION_FIELDS;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto-fallback

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  };

  const validate = () => {
    const next = {};
    for (const f of fields) {
      const val = values[f.name];
      if (f.type === "checkbox") {
        if (f.required && !val) next[f.name] = "Required to continue.";
        continue;
      }
      if (f.required && (!val || !String(val).trim())) {
        next[f.name] = "This field is required.";
      } else if (f.type === "email" && val && !EMAIL_RE.test(val)) {
        next[f.name] = "Enter a valid email address.";
      }
    }
    return next;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = fields.find((f) => next[f.name]);
      if (first) document.getElementById("f-" + first.name)?.focus();
      return;
    }

    const subject =
      variant === "contact"
        ? `Website inquiry — ${values.name}`
        : `Driver application — ${values.name}`;
    const rows = fields
      .filter((f) => f.type !== "checkbox")
      .map((f) => [f.label, values[f.name] || "—"]);
    rows.push([
      "SMS consent",
      values.consent
        ? "Yes — checked the SMS consent box on the website form"
        : "No — SMS consent box left unchecked",
    ]);

    // No Formspree endpoint configured yet — fall back straight to mailto.
    if (!FORMSPREE_READY) {
      window.location.href = mailto(subject, rows);
      setStatus("mailto-fallback");
      return;
    }

    setStatus("sending");
    try {
      const payload = { _subject: subject, form: variant };
      fields.forEach((f) => {
        payload[f.name] = f.type === "checkbox" ? (values[f.name] ? "yes" : "no") : values[f.name] || "";
      });
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Formspree responded with " + res.status);
      setStatus("sent");
    } catch {
      // Network hiccup or misconfigured endpoint — don't lose the lead.
      window.location.href = mailto(subject, rows);
      setStatus("mailto-fallback");
    }
  };

  if (status === "sent" || status === "mailto-fallback") {
    return (
      <div className="form-success" role="status">
        <strong>Thanks, {values.name?.split(" ")[0] || "driver"} — your details are on the way.</strong>
        {status === "sent" ? (
          <p>
            Your submission went straight to our team. We reply within one business day — or call or
            text us now at <a href={company.phoneHref}>{company.phone}</a>.
          </p>
        ) : (
          <p>
            Your email app should have opened with everything filled in. If it didn't, call or text us
            at <a href={company.phoneHref}>{company.phone}</a> or email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> and we'll take it from there.
          </p>
        )}
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Submit another
        </button>
      </div>
    );
  }

  const optInPath = variant === "contact" ? "#/contact" : "#/drivers";

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      <div className="optin-how">
        <strong>How to opt in to text messages</strong>
        <p>
          This web form at{" "}
          <a href={optInPath}>nodirexpress.vercel.app/{optInPath}</a> is how you give consent to
          receive SMS from {company.name}. To opt in, enter your mobile number in the field below and
          check the SMS consent box before pressing{" "}
          {variant === "contact" ? "“Send message.”" : "“Submit application.”"} The consent box is
          optional and is not pre-checked — you can submit the form without it and you will not
          receive texts. You can also opt in by texting us first at{" "}
          <a href={company.smsHref}>{company.phone}</a>. Consent is not a condition of{" "}
          {variant === "contact" ? "any purchase" : "employment"}.
        </p>
      </div>
      {fields.map((f) => {
        const id = "f-" + f.name;
        const err = errors[f.name];
        if (f.type === "checkbox") {
          return (
            <label key={f.name} className={"field-check" + (err ? " has-error" : "")}>
              <input
                id={id}
                type="checkbox"
                checked={!!values[f.name]}
                onChange={(e) => set(f.name, e.target.checked)}
                aria-invalid={!!err}
              />
              <span>{f.label}</span>
              {err && <em className="field-error">{err}</em>}
            </label>
          );
        }
        return (
          <div key={f.name} className={"field" + (f.type === "textarea" ? " field-wide" : "") + (err ? " has-error" : "")}>
            <label htmlFor={id}>
              {f.label}
              {f.required && <span aria-hidden="true"> *</span>}
            </label>
            {f.type === "select" ? (
              <select
                id={id}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                aria-invalid={!!err}
              >
                <option value="" disabled>
                  Select…
                </option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                id={id}
                rows={4}
                value={values[f.name] || ""}
                placeholder={f.placeholder}
                onChange={(e) => set(f.name, e.target.value)}
                aria-invalid={!!err}
              />
            ) : (
              <input
                id={id}
                type={f.type}
                autoComplete={f.autoComplete}
                value={values[f.name] || ""}
                placeholder={f.placeholder}
                onChange={(e) => set(f.name, e.target.value)}
                aria-invalid={!!err}
              />
            )}
            {err && <em className="field-error">{err}</em>}
          </div>
        );
      })}

      <div className="form-foot">
        <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
          {status === "sending"
            ? "Sending…"
            : variant === "contact"
              ? "Send message"
              : "Submit application"}
        </button>
        <p className="form-fineprint sms-disclaimer">
          <strong>{company.name} SMS program.</strong> Message frequency may vary. Message and data
          rates may apply. Text STOP to opt out at any time; text HELP or visit{" "}
          <a href="#/">nodirexpress.vercel.app</a> for assistance. Phone numbers collected for SMS
          consent are not shared with third parties for marketing purposes. See our{" "}
          <a href="#/privacy">Privacy Policy</a> and <a href="#/sms-terms">Terms &amp; Conditions</a>.
        </p>
        <p className="form-fineprint">
          {FORMSPREE_READY
            ? "Your submission goes straight to our team. "
            : "Submitting opens your email app with the details filled in. "}
          We reply within one business day.
        </p>
      </div>
    </form>
  );
}
