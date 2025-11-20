import { delay, http, HttpResponse } from "msw";
import topHeadlinesMockdata from "./mockdata/topHeadlines.mockdata";

export const handlers = [
  http.get(
    "https://real-time-news-data.p.rapidapi.com/top-headlines",
    async () => {
      await delay(4000);
      return HttpResponse.json(topHeadlinesMockdata);
      return HttpResponse.json(null, { status: 404 });
    }
  ),
];
