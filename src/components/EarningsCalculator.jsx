import { useMemo, useState } from "react";
import { feeModel } from "../data.js";

const money = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const PRESETS = {
  solo: { min: 6000, max: 16000, start: 11500 },
  team: { min: 10000, max: 22000, start: 16000 },
};

export default function EarningsCalculator() {
  const [type, setType] = useState("solo");
  const [gross, setGross] = useState(PRESETS.solo.start);

  const p = PRESETS[type];

  const rows = useMemo(() => {
    const dispatch = Math.round(gross * feeModel.dispatchPct);
    const flat = feeModel.weeklyFlat;
    const flatTotal = flat.reduce((s, f) => s + f.value, 0);
    const net = gross - dispatch - flatTotal;
    return { dispatch, flat, flatTotal, net };
  }, [gross]);

  const pct = (v) => `${Math.max(2, (v / gross) * 100)}%`;

  const setTypeAndGross = (next) => {
    setType(next);
    setGross(PRESETS[next].start);
  };

  return (
    <div className="calc">
      <div className="calc-controls">
        <div className="seg" role="tablist" aria-label="Driver type">
          {["solo", "team"].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={type === t}
              className={"seg-btn" + (type === t ? " is-active" : "")}
              onClick={() => setTypeAndGross(t)}
            >
              {t === "solo" ? "Solo" : "Team"}
            </button>
          ))}
        </div>

        <label className="calc-field">
          <span className="calc-label">Weekly gross</span>
          <span className="calc-value mono">{money(gross)}</span>
          <input
            type="range"
            min={p.min}
            max={p.max}
            step={250}
            value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            aria-label="Weekly gross"
          />
          <span className="calc-scale mono">
            <span>{money(p.min)}</span>
            <span>{money(p.max)}</span>
          </span>
        </label>
      </div>

      <div className="calc-result">
        <div className="calc-bar">
          <div className="calc-seg net" style={{ width: pct(rows.net) }} title={`Net ${money(rows.net)}`} />
          <div
            className="calc-seg dispatch"
            style={{ width: pct(rows.dispatch) }}
            title={`Dispatch ${money(rows.dispatch)}`}
          />
          <div
            className="calc-seg flat"
            style={{ width: pct(rows.flatTotal) }}
            title={`Fixed fees ${money(rows.flatTotal)}`}
          />
        </div>

        <dl className="calc-lines">
          <div>
            <dt>Gross</dt>
            <dd className="mono">{money(gross)}</dd>
          </div>
          <div>
            <dt>
              <i className="dot dispatch" /> Dispatch fee (12%)
            </dt>
            <dd className="mono">− {money(rows.dispatch)}</dd>
          </div>
          {rows.flat.map((f) => (
            <div key={f.label}>
              <dt>
                <i className="dot flat" /> {f.label}
              </dt>
              <dd className="mono">− {money(f.value)}</dd>
            </div>
          ))}
          <div className="calc-total">
            <dt>
              <i className="dot net" /> Net before fuel &amp; truck costs
            </dt>
            <dd className="mono">{money(rows.net)}</dd>
          </div>
        </dl>

        <p className="calc-note">
          Estimate only. Your fuel (before the 50% discount), truck payment, maintenance, tolls, and
          taxes come out of the net above. Adjust the slider to match your real week.
        </p>
      </div>
    </div>
  );
}
