import { useState } from "react";
import { company, mailto, formEndpoint } from "../data.js";

const FORMSPREE_READY = !formEndpoint.includes("YOUR_FORM_ID");

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
    label:
      "I agree to be contacted by Nodir Express Inc by phone, email, and SMS about driving opportunities. Message and data rates may apply. Reply STOP to opt out.",
    type: "checkbox",
    required: true,
  },
];

const CONTACT_FIELDS = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "message", label: "How can we help?", type: "textarea", required: true },
  {
    name: "consent",
    label:
      "I agree to be contacted by Nodir Express Inc about my inquiry. Message and data rates may apply. Reply STOP to opt out.",
    type: "checkbox",
    required: true,
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
    rows.push(["SMS / contact consent", "Yes — agreed on website form"]);

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

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
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
        <p className="form-fineprint">
          {FORMSPREE_READY
            ? "Your submission goes straight to our team. "
            : "Submitting opens your email app with the details filled in. "}
          We reply within one business day. See our <a href="#/sms-terms">SMS Terms</a> and{" "}
          <a href="#/privacy">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
}
