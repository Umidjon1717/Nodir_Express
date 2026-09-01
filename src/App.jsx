import { useEffect } from "react";
import { useRoute } from "./lib/router.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Pay from "./pages/Pay.jsx";
import Drivers from "./pages/Drivers.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import SmsTerms from "./pages/SmsTerms.jsx";
import NotFound from "./pages/NotFound.jsx";

const ROUTES = {
  "/": Home,
  "/services": Services,
  "/pay": Pay,
  "/drivers": Drivers,
  "/about": About,
  "/contact": Contact,
  "/privacy": Privacy,
  "/sms-terms": SmsTerms,
};

const TITLES = {
  "/": "Nodir Express Inc — Power Only & Van Freight Dispatch",
  "/services": "Services — Nodir Express Inc",
  "/pay": "Pay & Fees — Nodir Express Inc",
  "/drivers": "Apply to Drive — Nodir Express Inc",
  "/about": "About — Nodir Express Inc",
  "/contact": "Contact — Nodir Express Inc",
  "/privacy": "Privacy Policy — Nodir Express Inc",
  "/sms-terms": "SMS Terms — Nodir Express Inc",
};

export default function App() {
  const route = useRoute();
  const [path, anchor] = route.split("#");
  const Page = ROUTES[path] || NotFound;

  useEffect(() => {
    document.title = TITLES[path] || "Nodir Express Inc";
  }, [path]);

  // On navigation: jump to an in-page anchor (e.g. /services#power-only) if one
  // was given, otherwise reset to the top of the page.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
        );
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path, anchor]);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
