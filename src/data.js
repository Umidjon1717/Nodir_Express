// Single source of truth for company + offer details.
// Update values here and the whole site follows.

export const company = {
  name: "Nodir Express Inc",
  shortName: "Nodir Express",
  usdot: "4373364",
  mc: "1713252",
  email: "nodirexpress@gmail.com",
  phone: "(513) 725-3616",
  phoneHref: "tel:+15137253616",
  smsHref: "sms:+15137253616",
  addressLines: ["522 Auburn Grove Dr", "Morrow, OH 45152"],
  city: "Morrow, Ohio",
  hours: "Dispatch support 7 days a week",
  founded: "2024",
};

// Sign up free at https://formspree.io, create a form, and paste its endpoint
// here (looks like "https://formspree.io/f/abcdwxyz"). Until you do, forms
// fall back to opening the visitor's own email app instead.
export const formEndpoint = "https://formspree.io/f/mzebrpko";

export const mailto = (subject, fields) => {
  const body = fields
    ? fields.map(([k, v]) => `${k}: ${v}`).join("\n")
    : "";
  const q = [
    `subject=${encodeURIComponent(subject)}`,
    body ? `body=${encodeURIComponent(body)}` : "",
  ]
    .filter(Boolean)
    .join("&");
  return `mailto:${company.email}?${q}`;
};

export const quickMailto = mailto("Driver inquiry — Nodir Express Inc", [
  ["Name", ""],
  ["Driver type (solo/team)", ""],
  ["Truck year", ""],
  ["Equipment (Power Only/Van)", ""],
  ["CDL # / years experience", ""],
  ["Best phone to reach you", ""],
]);

export const heroStats = [
  { k: "Solo / week", v: "$10k–$13k", plus: "+" },
  { k: "Team / week", v: "$14k–$18k", plus: "+" },
  { k: "Dispatch fee", v: "12", plus: "%" },
  { k: "Fuel discount", v: "50", plus: "%" },
];

export const specs = [
  { k: "Equipment", v: "Power Only / Van" },
  { k: "Truck year", v: "2019 – 2026" },
  { k: "Loads", v: "Amazon + street loads" },
  { k: "Drop & hook", v: "Available" },
  { k: "Dedicated lanes", v: "No — you stay flexible" },
  { k: "Fuel discount", v: "50% at the pump" },
];

export const services = [
  {
    slug: "power-only",
    title: "Power Only",
    blurb:
      "Bring the tractor, we supply the freight and the trailers. Ideal for owner-operators who want to skip trailer maintenance and keep utilization high.",
    points: [
      "Pre-loaded and drop trailers where available",
      "Amazon and retail trailer pools",
      "Fast trailer swaps, less downtime",
    ],
  },
  {
    slug: "dry-van",
    title: "Dry Van",
    blurb:
      "Standard 53' dry van freight across regional and OTR lanes. Consistent weekly miles with a balanced mix of shippers.",
    points: [
      "53' van loads, no-touch freight",
      "Regional and over-the-road options",
      "Live load / live unload and drop options",
    ],
  },
  {
    slug: "drop-and-hook",
    title: "Drop & Hook",
    blurb:
      "Pre-loaded trailers ready when you arrive. Hook, sign, and roll — minimal dock time so your clock works for you.",
    points: [
      "Trailers staged and ready",
      "Less detention, more driving hours",
      "Great for high-cycle dedicated pools",
    ],
  },
  {
    slug: "amazon-freight",
    title: "Amazon Freight",
    blurb:
      "Access to Amazon Relay loads and facility-to-facility runs. Predictable appointment windows and steady volume.",
    points: [
      "Amazon Relay trailer pool",
      "Scheduled appointment freight",
      "Consistent lanes between fulfillment centers",
    ],
  },
  {
    slug: "street-loads",
    title: "Street Loads",
    blurb:
      "Brokered spot and contract freight sourced by our dispatch team to fill gaps and chase the best-paying lanes.",
    points: [
      "Rate-negotiated by experienced dispatchers",
      "Backhaul and headhaul planning",
      "Keeps the truck loaded between dedicated freight",
    ],
  },
  {
    slug: "team-operations",
    title: "Team Operations",
    blurb:
      "Purpose-built for two-driver operations. Keep the truck moving around the clock and gross accordingly.",
    points: [
      "Priority on long, high-mile lanes",
      "Team-rate freight and expedited loads",
      "$14,000–$18,000+ weekly gross potential",
    ],
  },
];

export const grossCards = [
  { tag: "Solo driver", amount: "$10,000–$13,000", note: "Estimated gross per week" },
  { tag: "Team drivers", amount: "$14,000–$18,000", note: "Estimated gross per week" },
];

// Weekly deductions used by the earnings calculator and the Pay page.
export const feeModel = {
  dispatchPct: 0.12,
  weeklyFlat: [
    { label: "Admin fee", value: 100 },
    { label: "IFTA", value: 50 },
    { label: "Insurance", value: 450 },
  ],
  fuelDiscountPct: 0.5,
};

export const deductions = [
  { label: "Dispatch fee", value: "12% of gross" },
  { label: "Admin fee", value: "$100 / week" },
  { label: "IFTA", value: "$50 / week" },
  { label: "Insurance", value: "$450 / week" },
  { label: "Fuel discount", value: "50% savings", good: true },
];

export const points = [
  {
    title: "Consistent freight",
    body: "A steady mix of Amazon and street loads so your truck isn't sitting. We plan ahead, not load-to-load.",
  },
  {
    title: "Drop & hook when it counts",
    body: "Pre-loaded trailers where they're offered — less time at the dock, more time driving.",
  },
  {
    title: "No forced dedicated lanes",
    body: "You're not locked into one lane or one shipper. Dispatch works around where you want to run.",
  },
  {
    title: "Flat, honest fees",
    body: "12% dispatch plus fixed weekly items — admin, IFTA, insurance. You see the full breakdown before you sign.",
  },
  {
    title: "50% fuel savings",
    body: "Fuel discount program cuts one of your biggest costs at the pump, week in and week out.",
  },
  {
    title: "Solo or team",
    body: "Set up for both. Teams keep the truck moving around the clock and gross accordingly.",
  },
];

export const requirements = [
  "Valid Class A CDL",
  "Tractor model year 2019 – 2026",
  "Own or lease a tractor (Power Only) — or run our van freight",
  "Clean-enough MVR and DOT record",
  "ELD-compliant and DOT medical current",
  "Ready to run OTR or extended regional",
];

export const faqs = [
  {
    q: "How much can I actually take home?",
    a: "Solo drivers gross $10,000–$13,000+ and teams $14,000–$18,000+ in a strong week. After the 12% dispatch fee and $600 in weekly flat items (admin, IFTA, insurance) — and before your own fuel, truck payment, and maintenance — that leaves a healthy net. Use the earnings calculator on the Pay page to model your own numbers.",
  },
  {
    q: "What does the 12% dispatch fee cover?",
    a: "Load sourcing and rate negotiation, booking, paperwork and rate confirmations, check calls, broker follow-up, and settlement support. You drive; we keep the truck planned and loaded.",
  },
  {
    q: "Do I need my own trailer?",
    a: "Not for Power Only — we provide trailers through Amazon and retail pools. If you have your own van you can run our brokered van freight as well.",
  },
  {
    q: "Are the lanes dedicated?",
    a: "No. You're not locked into one lane or shipper. Dispatch builds your week around where you want to run and where the freight pays best.",
  },
  {
    q: "How does the 50% fuel discount work?",
    a: "Through our fuel card program at participating truck stops. The discount shows on your settlement, cutting one of your largest operating costs every week.",
  },
  {
    q: "How and when do I get paid?",
    a: "Weekly settlements. Submit your paperwork and signed rate confirmations and your pay processes on the regular weekly cycle.",
  },
  {
    q: "What paperwork do I need to get started?",
    a: "CDL, DOT medical card, SSN or EIN, proof of tractor ownership or lease, and current insurance information. We'll walk you through onboarding once you apply.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pay", label: "Pay & Fees" },
  { to: "/drivers", label: "Drivers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
