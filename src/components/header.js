import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-blue-950 flex items-center justify-between py-8 fixed top-0 w-full z-10">
      <nav className=" mx-auto hidden xl:block">
        <ul className=" flex gap-8">
          <li>
            <Link
              href={"/"}
              className=" text-white font-semibold hover:underline"
            >
              Top Stories
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/WORLD"}
              className=" text-white font-semibold hover:underline"
            >
              World
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/NATIONAL"}
              className=" text-white font-semibold hover:underline"
            >
              National
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/BUSINESS"}
              className=" text-white font-semibold hover:underline"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/TECHNOLOGY"}
              className=" text-white font-semibold hover:underline"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/ENTERTAINMENT"}
              className=" text-white font-semibold hover:underline"
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/SPORTS"}
              className=" text-white font-semibold hover:underline"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/SCIENCE"}
              className=" text-white font-semibold hover:underline"
            >
              Science
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/HEALTH"}
              className=" text-white font-semibold hover:underline"
            >
              Health
            </Link>
          </li>
        </ul>
      </nav>

      <div className=" w-full max-w-[120px] absolute right-2 lg:right-5">
        <Link
          href={"/"}
          className=" block bg-orange-600 text-white font-semibold w-full text-center py-2 rounded-md hover:bg-orange-400"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}
