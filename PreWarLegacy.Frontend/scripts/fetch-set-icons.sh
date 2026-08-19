#!/usr/bin/env bash
# Downloads the official Scryfall set-icon SVG for every set in
# app/data/legalSets.ts into app/images/LegalSets/{code}.svg.
#
# Run this once, from a machine with normal internet access, before the
# Rules page's set list will render real icons — set icons are committed
# local assets, same as app/images/BannedCards/, not fetched at runtime.
# Safe to re-run; it just re-downloads everything.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATA_FILE="$FRONTEND_DIR/app/data/legalSets.ts"
OUT_DIR="$FRONTEND_DIR/app/images/LegalSets"

mkdir -p "$OUT_DIR"

codes=$(grep -oE 'code: "[a-z0-9]+"' "$DATA_FILE" | sed -E 's/code: "([a-z0-9]+)"/\1/')

ok=0
fail=0
for code in $codes; do
  out="$OUT_DIR/$code.svg"
  url="https://svgs.scryfall.io/sets/${code}.svg"
  if curl -fsSL "$url" -o "$out" && [ -s "$out" ]; then
    ok=$((ok + 1))
  else
    echo "FAILED: $code ($url)" >&2
    rm -f "$out"
    fail=$((fail + 1))
  fi
done

echo "Done. $ok downloaded, $fail failed."
if [ "$fail" -gt 0 ]; then
  exit 1
fi
