// Legacy-legal cards predating the freeze date, plus specific cards banned
// in Legacy after the freeze that still belong in the Prewar pool. This is
// the efficient form of the pool query: it stays short regardless of how
// much a user's search adds to it.
export const extraLegalCards = ["Entomb", "Candelabra of Tawnos"];

// Cards banned in Prewar despite being Legacy-legal today.
export const bannedCards = ["Mind's Desire"];

const extraLegalTerms = extraLegalCards.map(name => `!${JSON.stringify(name)}`);
export const PREWAR_BASE_QUERY = `(format:legacy or ${extraLegalTerms.join(" or ")}) date<=2019-05-02`;

// "-!\"Card Name\"" excludes the exact named card from Scryfall results.
// JSON.stringify gives us a safely quoted/escaped literal (handles the
// apostrophe in "Mind's Desire").
const bannedExclusionTerms = bannedCards.map(name => `-!${JSON.stringify(name)}`);
export const bannedExclusionQuery = bannedExclusionTerms.join(" ");

// Combines a user-authored Scryfall query fragment with the Prewar legality
// constraints, ready to send to the Scryfall API or scryfall.com/search.
export function buildPrewarQuery(userQuery: string): string {
  return [userQuery.trim(), PREWAR_BASE_QUERY, bannedExclusionQuery]
    .filter(part => part.length > 0)
    .join(" ");
}

export function scryfallSearchUrl(fullQuery: string): string {
  return `https://scryfall.com/search?q=${encodeURIComponent(fullQuery)}&unique=cards&as=grid&order=name`;
}
