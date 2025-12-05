"use client";

import { fetchDataByQuery } from "@/actions/fetchActions";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import SearchResultCard from "./search-result-card";

export default function Header() {
  interface Data {
    article_id: string;
    title: string;
    snippet: string;
  }

  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Custom hooks that add delay when tying in search bar and returns value when user stops typing
  const debouncedSearchTerm = useDebounce(query, 800);

  // When called, it fetches data from server
  async function fetchData(query: string) {
    const results = await fetchDataByQuery(query);

    if (results.data) {
      setData(results.data);
    } else {
      setErrorMessage(results);
    }
  }

  // When user is typing, the data is dynamically fetched
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  // Display saearched results
  const results = data.map((article) => {
    return (
      <SearchResultCard
        key={article.article_id}
        article_id={article.article_id}
        title={article.title}
        snippet={article.snippet}
      />
    );
  });

  return (
    <header className=" py-8">
      <div className=" w-[90%] max-w-[1500px] mx-auto flex items-center justify-between gap-10 relative">
        <Image
          src={"/logo.png"}
          width={120}
          height={100}
          alt="logo"
          loading="eager"
          className=" w-auto h-auto"
        />

        <div className=" w-full max-w-[300px] border border-gray-300 flex">
          <input
            type="text"
            placeholder="Search news"
            className=" w-full py-1 pl-3 outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className=" h-[30px] w-[30px] flex items-center justify-center">
            <SearchIcon size={20} />
          </div>
        </div>

        {debouncedSearchTerm && (
          <>
            {data.length > 0 && !errorMessage && (
              <div className=" absolute right-0 top-10 border border-gray-200 h-[500px] w-full max-w-[700px] flex flex-col gap-10 overflow-y-auto p-5">
                {results}
              </div>
            )}

            {data.length === 0 && !errorMessage && (
              <div className=" absolute right-0 top-10 border border-gray-200 h-[500px] w-full max-w-[700px] flex flex-col items-center justify-center font-bold text-2xl">
                No Results
              </div>
            )}

            {errorMessage && (
              <div className=" absolute right-0 top-10 border border-gray-200 h-[500px] w-full max-w-[700px] flex flex-col items-center justify-center font-bold text-2xl text-red-600">
                {errorMessage}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
