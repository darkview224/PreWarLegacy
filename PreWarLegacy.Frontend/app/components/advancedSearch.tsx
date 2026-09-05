import { useState } from "react";

interface AdvancedSearchProps {
  search: (query: string) => void;
  expanded: boolean;
  onToggleExpanded: () => void;
}

type ColorCode = "W" | "U" | "B" | "R" | "G" | "C";
type ColorMode = ">=" | "=" | "<=";
type NumericOp = ">=" | "<=" | "=" | ">" | "<" | "!=";

const colorOptions: { code: ColorCode; label: string }[] = [
  { code: "W", label: "White" },
  { code: "U", label: "Blue" },
  { code: "B", label: "Black" },
  { code: "R", label: "Red" },
  { code: "G", label: "Green" },
  { code: "C", label: "Colorless" },
];

const colorModeOptions: { value: ColorMode; label: string }[] = [
  { value: ">=", label: "Including these colors" },
  { value: "=", label: "Exactly these colors" },
  { value: "<=", label: "At most these colors" },
];

const numericOpOptions: { value: NumericOp; label: string }[] = [
  { value: "=", label: "=" },
  { value: "!=", label: "≠" },
  { value: ">=", label: "≥" },
  { value: "<=", label: "≤" },
  { value: ">", label: ">" },
  { value: "<", label: "<" },
];

interface NumericField {
  op: NumericOp;
  value: string;
}

const emptyNumericField: NumericField = { op: ">=", value: "" };

function toggleColor(set: Set<ColorCode>, code: ColorCode): Set<ColorCode> {
  const next = new Set(set);
  if (next.has(code)) {
    next.delete(code);
  } else {
    next.add(code);
  }
  return next;
}

function colorClause(colors: Set<ColorCode>, mode: ColorMode): string {
  if (colors.size === 0) return "";
  if (colors.has("C")) return `color${mode}c`;
  const letters = [...colors].join("").toLowerCase();
  return `color${mode}${letters}`;
}

function numericClause(keyword: string, field: NumericField): string {
  if (field.value.trim() === "") return "";
  return `${keyword}${field.op}${field.value.trim()}`;
}

function quotedClause(keyword: string, value: string): string {
  const trimmed = value.trim();
  if (trimmed === "") return "";
  return `${keyword}:${JSON.stringify(trimmed)}`;
}

export default function AdvancedSearch({ search, expanded, onToggleExpanded }: AdvancedSearchProps) {
  const [name, setName] = useState("");
  const [exactName, setExactName] = useState(false);
  const [text, setText] = useState("");
  const [typeLine, setTypeLine] = useState("");

  const [colors, setColors] = useState<Set<ColorCode>>(new Set());
  const [colorMode, setColorMode] = useState<ColorMode>(">=");

  const [manaCost, setManaCost] = useState("");
  const [manaValue, setManaValue] = useState<NumericField>(emptyNumericField);
  const [power, setPower] = useState<NumericField>(emptyNumericField);
  const [toughness, setToughness] = useState<NumericField>(emptyNumericField);
  const [loyalty, setLoyalty] = useState<NumericField>(emptyNumericField);

  const [artist, setArtist] = useState("");

  const buildQuery = (): string => {
    const terms = [
      name.trim() === "" ? "" : exactName ? `!${JSON.stringify(name.trim())}` : quotedClause("name", name),
      quotedClause("oracle", text),
      quotedClause("type", typeLine),
      colorClause(colors, colorMode),
      manaCost.trim() === "" ? "" : `mana:${JSON.stringify(manaCost.trim())}`,
      numericClause("cmc", manaValue),
      numericClause("pow", power),
      numericClause("tou", toughness),
      numericClause("loy", loyalty),
      quotedClause("artist", artist),
    ];

    return terms.filter(term => term.length > 0).join(" ");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(buildQuery());
  };

  return (
    <div className="advancedSearch">
      <button type="button" className="advancedSearchToggle" onClick={onToggleExpanded}>
        {expanded ? "Hide advanced search ▲" : "Advanced search ▾"}
      </button>

      {expanded && (
        <form className="advancedSearchForm" onSubmit={handleSubmit}>
          <div className="advancedSearchGrid">
            <div className="advancedSearchColumn">
              <div className="advancedSearchField">
                <label htmlFor="adv-name">Card Name</label>
                <input id="adv-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Lightning Bolt" />
                <label className="advancedSearchCheckboxLabel">
                  <input type="checkbox" checked={exactName} onChange={e => setExactName(e.target.checked)} />
                  Exact match
                </label>
              </div>

              <div className="advancedSearchField">
                <label htmlFor="adv-text">Rules Text</label>
                <input id="adv-text" type="text" value={text} onChange={e => setText(e.target.value)} placeholder="e.g. draw a card" />
              </div>

              <div className="advancedSearchField">
                <label htmlFor="adv-type">Type Line</label>
                <input id="adv-type" type="text" value={typeLine} onChange={e => setTypeLine(e.target.value)} placeholder="e.g. Legendary Creature" />
              </div>

              <fieldset className="advancedSearchField advancedSearchColors">
                <legend>Colors</legend>
                <div className="advancedSearchColorSwatches">
                  {colorOptions.map(({ code, label }) => (
                    <label key={code} className="advancedSearchCheckboxLabel" title={label}>
                      <input type="checkbox" checked={colors.has(code)} onChange={() => setColors(toggleColor(colors, code))} />
                      {code}
                    </label>
                  ))}
                </div>
                <select value={colorMode} onChange={e => setColorMode(e.target.value as ColorMode)}>
                  {colorModeOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </fieldset>
            </div>

            <div className="advancedSearchColumn">
              <div className="advancedSearchField">
                <label htmlFor="adv-artist">Artist</label>
                <input id="adv-artist" type="text" value={artist} onChange={e => setArtist(e.target.value)} placeholder="e.g. Rebecca Guay" />
              </div>

              <div className="advancedSearchField">
                <label htmlFor="adv-mana">Mana Cost</label>
                <input id="adv-mana" type="text" value={manaCost} onChange={e => setManaCost(e.target.value)} placeholder="e.g. {2}{U}{U}" />
              </div>

              <fieldset className="advancedSearchField advancedSearchStats">
                <legend>Stats</legend>
                {[
                  { label: "Mana Value", field: manaValue, setField: setManaValue },
                  { label: "Power", field: power, setField: setPower },
                  { label: "Toughness", field: toughness, setField: setToughness },
                  { label: "Loyalty", field: loyalty, setField: setLoyalty },
                ].map(({ label, field, setField }) => (
                  <div className="advancedSearchStatRow" key={label}>
                    <span>{label}</span>
                    <select value={field.op} onChange={e => setField({ ...field, op: e.target.value as NumericOp })}>
                      {numericOpOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <input type="text" value={field.value} onChange={e => setField({ ...field, value: e.target.value })} placeholder="any" />
                  </div>
                ))}
              </fieldset>
            </div>
          </div>

          <div className="advancedSearchActions">
            <button type="submit">Search</button>
          </div>
        </form>
      )}
    </div>
  );
}
