import Image from "next/image";
import Link from "next/link";

interface Props {
  data: { data: [] };
}

export default function HeadlinesGrid({ data }: Props) {
  interface Data {
    article_id: string;
    title: string;
    snippet: string;
    photo_url: string;
  }

  const headlines = data.data.map(
    ({ article_id, title, snippet, photo_url }: Data, index: number) => {
      if (index === 0) {
        return (
          <div
            key={article_id}
            className=" flex flex-col gap-5 sm:col-span-4 lg:col-span-9 lg:flex-row"
          >
            <Image
              src={photo_url}
              height={0}
              width={650}
              alt={title}
              className=" w-full h-auto lg:max-w-[650px]"
            />

            <div className=" space-y-3 lg">
              <Link
                href={"/"}
                className=" block text-3xl font-bold lg:text-4xl hover:underline"
              >
                {title}
              </Link>
              <p className=" text-gray-600 text-lg">{snippet}</p>
            </div>
          </div>
        );
      }

      if (index === 1) {
        return (
          <div
            key={article_id}
            className=" flex flex-col gap-5 relative sm:col-span-2 lg:col-span-3"
          >
            <div className=" lg:min-h-[200px]">
              <Image
                src={photo_url}
                height={0}
                width={500}
                alt={title}
                className=" w-full h-auto object-contain object-top"
              />
            </div>

            <div className=" space-y-3">
              <Link
                href={"/"}
                className=" block text-xl font-bold hover:underline"
              >
                {title}
              </Link>
              <p className=" text-gray-600">{snippet}</p>
            </div>
          </div>
        );
      }

      if (index === 2) {
        return (
          <div
            key={article_id}
            className=" flex flex-col gap-5 relative sm:col-span-2 lg:col-span-3"
          >
            <div className=" lg:min-h-[200px]">
              <Image
                src={photo_url}
                height={0}
                width={500}
                alt={title}
                className=" w-full h-auto object-contain object-top"
              />
            </div>

            <div className=" space-y-3">
              <Link
                href={"/"}
                className=" block text-xl font-bold hover:underline"
              >
                {title}
              </Link>
              <p className=" text-gray-600">{snippet}</p>
            </div>
          </div>
        );
      }

      if (index === 3) {
        return (
          <div
            key={article_id}
            className="  flex flex-col gap-5 relative col-span-4 lg:col-span-3"
          >
            <div className=" w-full lg:min-h-[200px]">
              <Image
                src={photo_url}
                height={0}
                width={500}
                alt={title}
                className=" w-full h-auto object-contain object-top"
              />
            </div>

            <div className=" space-y-3">
              <Link
                href={"/"}
                className=" block text-xl font-bold hover:underline"
              >
                {title}
              </Link>
              <p className=" text-gray-600">{snippet}</p>
            </div>
          </div>
        );
      }
    }
  );

  return (
    <div className=" flex flex-col gap-y-20 gap-x-5 sm:gap-y-5 sm:grid sm:grid-cols-4 lg:grid-cols-9">
      {headlines}
    </div>
  );
}
