"use client";

export function Search() {
  return (
    <div>
      <form
        className="flex gap-2 w-full px-4 py-8 justify-center md:gap-4 md:p-0 md:pr-6"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("pesquisando...");
        }}
      >
        <input
          type="search"
          placeholder="Digite o produto"
          className="border border-black pl-4 focus:outline-none placeholder:text-meteora-dark-gray md:w-36 md:placeholder:text-xs+1 lg:placeholder:text-[15px] lg:w-44"
        />
        <button className="border border-black font-medium px-4 py-2 md:text-white md:border-white md:text-xs+1 lg:text-base">
          Search
        </button>
      </form>
    </div>
  );
}