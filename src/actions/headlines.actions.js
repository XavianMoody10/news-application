"use server";

const { server } = require("@/mocks/node");
const { default: axios } = require("axios");

export async function fetchTopHeadlinesData() {
  try {
    if (process.env.NODE_ENV === "development") {
      server.listen({ onUnhandledRequest: "bypass" });
    }

    const response = await axios.get(
      "https://real-time-news-data.p.rapidapi.com/top-headlines",
      {
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      }
    );

    if (response.data.data.length === 0) {
      return { message: "No Results" };
    }

    return { data: response.data?.data };
  } catch (error) {
    return { error: "Error getting data" };
  } finally {
    if (process.env.NODE_ENV === "development") {
      server.close();
    }
  }
}

export async function fetchTopicHeadlinesData(topic) {
  try {
    if (process.env.NODE_ENV === "development") {
      server.listen({ onUnhandledRequest: "bypass" });
    }
    const response = await axios.get(
      "https://real-time-news-data.p.rapidapi.com/topic-headlines",
      {
        params: {
          topic,
        },
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      }
    );

    if (response.data.data.length === 0) {
      return { message: "No Results" };
    }

    return { data: response.data.data };
  } catch (error) {
    return { error: "Error getting data" };
  } finally {
    if (process.env.NODE_ENV === "development") {
      server.close();
    }
  }
}
