"use server";

import { server } from "@/mocks/node";

export async function fetchDataByQuery(query: string) {
  server.listen();

  const params = new URLSearchParams({
    query,
  });

  const response = await fetch(
    `https://real-time-news-data.p.rapidapi.com/search?${params.toString()}`
  );

  if (!response.ok) {
    return "Error getting data";
  } else {
    const parsedData = await response.json();
    return parsedData;
  }
}
