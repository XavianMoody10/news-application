import {
  fetchTopHeadlinesData,
  fetchTopicHeadlinesData,
} from "@/actions/fetchActions";
import Header from "@/components/header";
import HeadlinesGrid from "@/components/headlines-grid";
import Link from "next/link";

export default async function Home() {
  const topHeadlines = await fetchTopHeadlinesData(4);
  const topicHeadlines = await fetchTopicHeadlinesData("WORLD", 4);

  return (
    <>
      <Header />

      <main className=" w-[90%] max-w-[1300px] mx-auto pt-10 space-y-20">
        <div className=" space-y-8">
          <Link href={"/"} className=" block w-fit hover:underline">
            <h1 className=" text-4xl font-semibold">Top Headlines</h1>
          </Link>
          <HeadlinesGrid data={topHeadlines} />
        </div>

        <div className=" space-y-8">
          <Link href={"/"} className=" block hover:underline">
            <h1 className=" text-4xl font-semibold">World Topic Headlines</h1>
          </Link>
          <HeadlinesGrid data={topicHeadlines} />
        </div>
      </main>
    </>
  );
}
