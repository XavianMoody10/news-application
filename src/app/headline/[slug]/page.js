import { fetchTopicHeadlinesData } from "@/actions/headlines.actions";
import HeadlineMessage from "@/components/headline-message";
import HeadlinesList from "@/components/headlines-list";

export default async function ReportPage({ params }) {
  const { slug } = await params;

  const response = await fetchTopicHeadlinesData(slug);

  return (
    <main>
      {response.data && (
        <HeadlinesList title={slug + " HEADLINES"} data={response.data} />
      )}

      {response.error && <HeadlineMessage message={response.error} />}

      {response.message && <HeadlineMessage message={response.message} />}
    </main>
  );
}
