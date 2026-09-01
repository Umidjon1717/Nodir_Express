# Nodir Express Inc — Website

Frontend-only marketing site for **Nodir Express Inc** (Power Only / Van freight dispatch).
Built with **React 18 + Vite**, no backend, no framework router (a small built-in hash router — see
[`src/lib/router.jsx`](src/lib/router.jsx)) so it deploys as static files anywhere.

- USDOT 4373364 · MC 1713252
- 522 Auburn Grove Dr, Morrow, OH 45152
- (513) 725-3616 · nodirexpress@gmail.com

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Deploy (get a public URL for the RingCentral review)

The build output in `dist/` is plain static files — hash-based routing means every page works with
zero server config. Any of these work:

| Host | How |
| --- | --- |
| **Vercel** | Import the folder / repo at vercel.com — framework auto-detected as Vite. |
| **Netlify** | Drag the `dist/` folder onto app.netlify.com/drop, or connect the repo (build command `npm run build`, publish dir `dist`). |
| **GitHub Pages** | Push repo, enable Pages, deploy `dist/` (the Vite `base: "./"` in `vite.config.js` keeps asset paths relative). |
| **Cloudflare Pages** | Connect repo, build command `npm run build`, output dir `dist`. |

A hosted preview of this exact design is also published as a Claude Artifact — that link can be
submitted to RingCentral right away while a permanent domain is set up.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services preview, live earnings calculator, why-us, FAQ preview |
| `/services` | Every freight type (Power Only, Dry Van, Drop & Hook, Amazon, Street, Team) + equipment specs |
| `/pay` | Weekly gross ranges, full fee ledger, earnings calculator, pay FAQ |
| `/drivers` | Driver application form + requirements checklist |
| `/about` | Company story, credentials, safety & compliance |
| `/contact` | Contact form, phone/SMS/email, address, hours |
| `/privacy` | Privacy Policy (includes SMS/A2P data-sharing language) |
| `/sms-terms` | SMS program terms (opt-in, opt-out, message frequency) |

## Functionality

- **Live earnings calculator** — drag weekly gross, toggle Solo/Team, see the dispatch fee, fixed
  weekly fees, and net update instantly (`src/components/EarningsCalculator.jsx`).
- **Driver application & contact forms** — client-side validation, then opens the visitor's email
  app pre-filled with everything they entered (`src/components/InquiryForm.jsx`).
- **FAQ accordion**, **light/dark/system theme toggle** (persisted), **mobile nav drawer**,
  **scroll-reveal sections**, **back-to-top button**.
- Every page updates `document.title`; in-page anchors (e.g. `/services#power-only`) scroll smoothly.

## Editing content

All company details, pay figures, fees, services, requirements, and FAQ copy live in
[`src/data.js`](src/data.js). Change values there and every page updates. Add your RingCentral
number's `tel:`/`sms:` links there too.

## Structure

```
index.html               Vite entry, loads Google Fonts
src/
  main.jsx                React root
  App.jsx                 route table + page titles + anchor scrolling
  index.css               design tokens + all styles (light + dark themes)
  data.js                 all editable copy and numbers
  lib/
    router.jsx             tiny hash router (Link, useRoute, navigate)
    useTheme.js             light/dark/system theme hook
  components/
    Header.jsx  Footer.jsx  Layout.jsx  Reveal.jsx  BackToTop.jsx
    ThemeToggle.jsx  PageHeader.jsx  CTA.jsx  FAQ.jsx
    EarningsCalculator.jsx  InquiryForm.jsx
  pages/
    Home.jsx  Services.jsx  Pay.jsx  Drivers.jsx  About.jsx
    Contact.jsx  Privacy.jsx  SmsTerms.jsx  NotFound.jsx
public/favicon.svg
```
