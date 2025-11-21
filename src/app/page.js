import { fetchTopHeadlinesData } from "@/actions/headlines.actions";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeadlineMessage from "@/components/headline-message";
import HeadlinesList from "@/components/headlines-list";
import SideNavigation from "@/components/side-navigation";

export default async function Home() {
  const response = await fetchTopHeadlinesData();

  return (
    <>
      <Header />
      <SideNavigation />

      <main>
        {response.data && (
          <HeadlinesList title={"TOP HEADLINES"} data={response.data} />
        )}

        {response.error && <HeadlineMessage message={response.error} />}

        {response.message && <HeadlineMessage message={response.message} />}
      </main>

      <Footer />
    </>
  );
}
