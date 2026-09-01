import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
