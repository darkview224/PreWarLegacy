import { useState } from "react";

interface SearchQuery {
  search : (searchQuery : string) => void;
  placeholder: string
}

export default function SearchWithButton({search, placeholder} : SearchQuery) {
    const [query, setQuery] = useState("");

    return(
        <div className="searchBar">
            <input type="text" placeholder={placeholder} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && search(query)} required/>
            <button onClick={() => search(query)}>Search</button>
        </div>
    );
}