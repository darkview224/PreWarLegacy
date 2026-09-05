import { useState } from "react";
import SearchWithButton from "./searchBox";
import AdvancedSearch from "./advancedSearch";
import { buildPrewarQuery, scryfallSearchUrl } from "../data/prewarQuery";

interface Card{
    id: string;
    name: string;
    image_uris?: {
        normal: string;
    }
    card_faces?: {
        image_uris?:{
            normal: string;
        };
    }[];
}

interface ScryfallSearchResponse {
  data?: Card[];
  has_more?: boolean;
  next_page?: string;
  total_cards?: number;
}

// The results grid is 7 cards wide. Scryfall returns up to 175 cards per API
// page, and 175 / 35 = 5 exactly, so every 5th UI page lands precisely on an
// API page boundary instead of splitting one awkwardly (a partial last row
// followed by a fetch pause mid-page). 35 (5 rows) trades a bit of density
// for that clean break.
const PAGE_SIZE = 35;

export default function SearchCards() {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const [results, setResults] = useState<Card[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [totalCards, setTotalCards] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    const fullQuery = buildPrewarQuery(query);
    setLastQuery(fullQuery);
    setLoading(true);

    fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(fullQuery)}`)
      .then(res => res.json() as Promise<ScryfallSearchResponse>)
      .then(data => {
        setResults(data.data ?? []);
        setHasMore(data.has_more ?? false);
        setNextPageUrl(data.next_page ?? null);
        setTotalCards(data.total_cards ?? null);
        setPage(0);
      })
      .finally(() => setLoading(false));
  };

  const goToNextPage = () => {
    const nextPage = page + 1;
    if (nextPage * PAGE_SIZE < results.length) {
      setPage(nextPage);
      return;
    }
    if (!hasMore || !nextPageUrl) return;

    setLoading(true);
    fetch(nextPageUrl)
      .then(res => res.json() as Promise<ScryfallSearchResponse>)
      .then(data => {
        setResults(prev => [...prev, ...(data.data ?? [])]);
        setHasMore(data.has_more ?? false);
        setNextPageUrl(data.next_page ?? null);
        setPage(nextPage);
      })
      .finally(() => setLoading(false));
  };

  const goToPrevPage = () => setPage(p => Math.max(0, p - 1));

  const visibleCards = results.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const isLastPage = (page + 1) * PAGE_SIZE >= results.length && !hasMore;
  const totalPages = totalCards !== null ? Math.max(1, Math.ceil(totalCards / PAGE_SIZE)) : null;

  return (
    <div>
      {!advancedOpen && <SearchWithButton placeholder="Search for cards" search={handleSearch}></SearchWithButton>}
      <AdvancedSearch
        search={handleSearch}
        expanded={advancedOpen}
        onToggleExpanded={() => setAdvancedOpen(!advancedOpen)}
      ></AdvancedSearch>
      {lastQuery && (
        <p className="scryfallLinkLine">
          {totalCards !== null && `${totalCards} card${totalCards === 1 ? "" : "s"} found — `}
          <a href={scryfallSearchUrl(lastQuery)} target="_blank" rel="noreferrer">View this search on Scryfall</a>
        </p>
      )}
      <div className="cardsGrid">
        {visibleCards.map(c => (
          <div key={c.id}>
              <img src={c.image_uris?.normal ?? c.card_faces?.[0]?.image_uris?.normal}></img>
          </div>
        ))}
      </div>
      {results.length > 0 && (
        <div className="paginationControls">
          <button type="button" onClick={goToPrevPage} disabled={page === 0 || loading}>Previous</button>
          <span>Page {page + 1}{totalPages !== null && ` of ${totalPages}`}</span>
          <button type="button" onClick={goToNextPage} disabled={isLastPage || loading}>Next</button>
        </div>
      )}
    </div>
  );
}
