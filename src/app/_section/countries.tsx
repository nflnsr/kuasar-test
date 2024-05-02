"use client";

import { Card } from "@/components/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchParams } from "next/navigation";
import { useGetCountries } from "../services/countries";
import { type Countries } from "@/types/countries";

function Countries() {
  const { loading, error, data } = useGetCountries();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const searchQuery = useDebounce(search, 600);
  const [searchResult, setSearchResult] = useState<Countries[]>([]);

  useEffect(() => {
    if (searchQuery) {
      const filteredData = data?.countries?.filter(
        (data: Countries) =>
          data?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data?.emoji?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data?.capital?.toLowerCase().includes(searchQuery.toString().toLowerCase()) ||
          data?.currency?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data?.phone?.toString().toLowerCase().includes(searchQuery.toString().toLowerCase()) ||
          data?.code?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResult(filteredData);
    } else {
      setSearchResult(data?.countries);
    }
  }, [data, searchQuery]);

  if (loading)
    return (
      <p className="absolute top-1/2 pb-24 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="absolute top-1/2 pb-24 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Error : {error.message}
      </p>
    );

  return (
    <>
      <div className="flex gap-3 w-full max-w-screen flex-wrap justify-center px-4">
        {searchResult &&
          searchResult?.map(
            ({ name, emoji, capital, currency, phone, code }: Countries, i: number) => {
              return (
                <Link key={i} href={`/${code}`}>
                  <Card className="group">
                    <p className="line-clamp-1 underline decoration-gray-400 group-hover:decoration-gray-500 inline">
                      {name}
                    </p>
                    <p className="line-clamp-1 inline text-red-500">&nbsp;&#40;{emoji}&#41;</p>
                    <p className="line-clamp-1">{capital}</p>
                    <p className="line-clamp-1">{currency}</p>
                    <p className="line-clamp-1">+{phone}</p>
                  </Card>
                </Link>
              );
            }
          )}
        {searchResult?.length === 0 && (
          <div className="h-32 flex justify-center items-center">Tidak ada data yang dicari.</div>
        )}
      </div>
    </>
  );
}

export { Countries };
