import Link from "next/link";

interface Props {
  article_id: string;
  title: string;
  snippet: string;
}

export default function SearchResultCard({
  article_id,
  title,
  snippet,
}: Props) {
  return (
    <div key={article_id}>
      <Link href={"/"} className=" text-lg font-semibold hover:underline">
        {title}
      </Link>
      <p className=" text-gray-600">{snippet}</p>
    </div>
  );
}
