import { convertDate } from "@/utils/date-converter";
import Image from "next/image";

export default function HeadlineCard({ headline }) {
  // Covert date from api to a readable date in formmat (month day, year)
  const formatted = convertDate(headline.published_datetime_utc);

  // Place holder for if a headline doesnt have an image assined from api
  const imagePlaceholderUrl = "https://placehold.co/400x280";

  return (
    <div
      className=" relative w-full min-h-[300px] flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10"
      key={headline.title}
    >
      <div className=" relative w-full min-h-[300px] min-[800px]:min-h-[400px] lg:min-w-[500px] lg:max-w-[500px] lg:min-h-[300px]">
        {headline.photo_url ? (
          <Image
            src={headline.photo_url}
            fill
            sizes="(max-width: 768px)"
            alt={headline.title + "image"}
            className=" object-cover"
          />
        ) : (
          <Image
            src={imagePlaceholderUrl}
            fill
            sizes="(max-width: 768px)"
            alt={headline.title + "placeholder"}
            className=" object-cover"
            unoptimized
          />
        )}
      </div>

      <div className=" space-y-4">
        <a
          href={headline.link}
          target="_blank"
          className=" block hover:underline"
        >
          <h2 className=" text-xl font-bold">{headline.title}</h2>
        </a>
        <p>{headline.snippet}</p>
      </div>

      <p className=" absolute bottom-0 right-0 text-gray-400">{formatted}</p>
    </div>
  );
}
