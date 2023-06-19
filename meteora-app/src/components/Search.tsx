"use client";

export function Search() {
  return (
    <div className="">
      <form
        className="flex gap-2 w-full px-4 py-8 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("pesquisando...");
        }}
      >
        <input
          type="search"
          placeholder="Digite o produto"
          className="border border-black pl-4 focus:outline-none placeholder:text-meteora-dark-gray"
        />
        <button className="border border-black font-medium px-4 py-2">
          Search
        </button>
      </form>
    </div>
  );
}
