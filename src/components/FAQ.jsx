import { useState } from "react";
import { faqs } from "../data.js";

export default function FAQ({ items = faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={"faq-item" + (isOpen ? " is-open" : "")} key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <i className="faq-mark" aria-hidden="true">
                {isOpen ? "–" : "+"}
              </i>
            </button>
            <div className="faq-a" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
