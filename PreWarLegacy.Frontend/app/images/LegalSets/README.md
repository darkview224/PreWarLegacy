This folder holds one SVG per legal set, named `{code}.svg` (e.g. `lea.svg`),
matching the `code` field in `../../data/legalSets.ts`. It's committed local
assets, same as `../BannedCards/`, not fetched at runtime.

Run `../../scripts/fetch-set-icons.sh` once to populate it from Scryfall's
CDN before the Rules page's set list will show real icons.
