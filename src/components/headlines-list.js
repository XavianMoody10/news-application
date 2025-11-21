import HeadlineCard from "./headline-card";

export default function HeadlinesList({ title, data }) {
  // Map out the healine cards to the page
  const headlines = data?.map((h) => {
    return <HeadlineCard key={h.title} headline={h} />;
  });

  return (
    <div className=" w-[90%] max-w-[1300px] mx-auto py-10 space-y-10 mt-24">
      <h1 className=" text-2xl font-extrabold">{title}</h1>
      <div className=" flex flex-col gap-16">{headlines}</div>
    </div>
  );
}
