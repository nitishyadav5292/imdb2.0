"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search/${searchInput}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search here....."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      ></input>

      <button
        disabled={!searchInput}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
