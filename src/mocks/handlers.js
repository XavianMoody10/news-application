import { delay, http, HttpResponse } from "msw";
import topHeadlinesMockdata from "./mockdata/topHeadlines.mockdata";
import topicHeadlinesMockdata from "./mockdata/topicHeadlines.mockdata";

export const handlers = [
  http.get(
    "https://real-time-news-data.p.rapidapi.com/top-headlines",
    async () => {
      await delay(4000);
      return HttpResponse.json(topHeadlinesMockdata);
      return HttpResponse.json(null, { status: 404 });
    }
  ),

  http.get(
    "https://real-time-news-data.p.rapidapi.com/topic-headlines",
    async ({ request }) => {
      const url = new URL(request.url);
      const topic = url.searchParams.get("topic");

      await delay(4000);

      if (topic && topic === "WORLD") {
        return HttpResponse.json(topicHeadlinesMockdata);
      } else {
        return HttpResponse.json({ data: [] });
      }

      return HttpResponse.json(null, { status: 404 });
    }
  ),
];
