"use client";

import {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

interface SearchContextType {
  search: string | number | readonly string[];
  setSearch: React.Dispatch<
    SetStateAction<string | number | readonly string[]>
  >;
}

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<string | number | readonly string[]>("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => {
  const { search, setSearch } = useContext(SearchContext);

  return {
    search,
    setSearch,
  };
};

export default useSearch;
