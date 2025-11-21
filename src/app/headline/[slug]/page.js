import Header from "@/components/header";
import { server } from "@/mocks/node";
import axios from "axios";
import Image from "next/image";

async function fetchData(topic) {
  "use server";

  try {
    server.listen({ onUnhandledRequest: "bypass" });

    const response = await axios.get(
      "https://real-time-news-data.p.rapidapi.com/topic-headlines",
      {
        params: {
          topic,
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
    server.close();
  }
}

export default async function ReportPage({ params }) {
  const { slug } = await params;

  const response = await fetchData(slug);

  const headlines = response.data?.map((h) => {
    const date = new Date(h.published_datetime_utc);

    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div
        className=" relative w-full min-h-[300px] flex flex-col items-center lg:flex-row lg:items-start lg:gap-10"
        key={h.title}
      >
        <div className=" relative w-full min-h-[300px] min-[800px]:min-h-[400px] lg:min-w-[500px] lg:max-w-[500px] lg:min-h-[300px]">
          {h.photo_url ? (
            <Image
              src={h.photo_url}
              fill
              sizes="(max-width: 768px)"
              alt={h.title + "image"}
              // objectFit="cover"
              className=" object-cover"
            />
          ) : (
            <Image
              src={"https://placehold.co/400x280"}
              fill
              sizes="(max-width: 768px)"
              alt={h.title + "placeholder"}
              // objectFit="cover"
              className=" object-cover"
              unoptimized
            />
          )}
        </div>

        <div className=" space-y-4">
          <a href={h.link} target="_blank" className=" block hover:underline">
            <h2 className=" text-xl font-bold">{h.title}</h2>
          </a>
          <p>{h.snippet}</p>
        </div>

        <p className=" absolute bottom-0 right-0 text-gray-400">{formatted}</p>
      </div>
    );
  });

  return (
    <>
      <Header />

      <main>
        {response.data && (
          <div className=" w-[90%] max-w-[1300px] mx-auto py-10 space-y-10 mt-24">
            <h1 className=" text-2xl font-extrabold">{slug + " HEADLINES"}</h1>
            <div className=" flex flex-col gap-16">{headlines}</div>
          </div>
        )}

        {response.error && (
          <div className=" h-screen flex items-center justify-center text-2xl font-bold">
            {response.error}
          </div>
        )}

        {response.message && (
          <div className=" h-screen flex items-center justify-center text-2xl font-bold">
            {response.message}
          </div>
        )}
      </main>
    </>
  );
}
