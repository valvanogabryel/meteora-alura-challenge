"use client";

import { useState } from "react";

import useSearch from "@/context/SearchContext";

export function Search() {
  const { setSearch } = useSearch();
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearch(searchValue);
  }

  return (
    <div>
      <form
        className="flex gap-2 w-full px-4 py-8 justify-center md:gap-4 md:p-0 md:pr-6"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder="Digite o produto"
          className="text-xs+1 border border-black pl-4 focus:outline-none placeholder:text-meteora-dark-gray md:w-36 lg:placeholder:text-[15px] lg:w-44"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="border border-black font-medium px-4 py-2 md:text-white md:border-white md:text-xs+1 lg:text-base transition-colors hover:bg-black hover:text-white md:hover:bg-white md:hover:text-black md:duration-300">
          Buscar
        </button>
      </form>
    </div>
  );
}
