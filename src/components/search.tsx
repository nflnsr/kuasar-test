"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (input: string) => {
    const params = new URLSearchParams();
    if (input) {
      params.set("q", input);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="search">Search Country</label>
      <input
        type="search"
        className="ring-2 ring-gray-400 rounded-sm w-64 focus:outline-none px-2 pb-0.5 h-7"
        placeholder="example: indonesia"
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export { Search };
