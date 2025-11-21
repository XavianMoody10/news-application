import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-blue-950 py-16">
      <nav className=" w-[90%] max-w-[1300px] mx-auto">
        <ul className=" flex flex-col gap-8 items-center min-[400px]:flex-wrap min-[400px]:flex-row min-[400px]:justify-center">
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
    </footer>
  );
}
