// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import searchDataMockdata from "./mockdata/searchData.mockdata";
import topHeadlinesMockdata from "./mockdata/topHeadlines.mockdata";
import topicHeadlinesMockdata from "./mockdata/topicHeadlines.mockdata";

export const handlers = [
  http.get(
    "https://real-time-news-data.p.rapidapi.com/search",
    ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");

      if (query === "football") {
        return HttpResponse.json(searchDataMockdata);
      }

      return HttpResponse.json({ data: [] });

      // return HttpResponse.json(null, { status: 400 });
    }
  ),

  http.get("https://real-time-news-data.p.rapidapi.com/top-headlines", () => {
    return HttpResponse.json(topHeadlinesMockdata);

    // return HttpResponse.json(null, { status: 400 });
  }),

  http.get("https://real-time-news-data.p.rapidapi.com/topic-headlines", () => {
    return HttpResponse.json(topicHeadlinesMockdata);

    // return HttpResponse.json(null, { status: 400 });
  }),
];
