import Image from "next/image";
import { IoIosSearch as SearchIcon } from "react-icons/io";

export default function Header() {
  return (
    <header className=" py-8">
      <div className=" w-[90%] max-w-[1500px] mx-auto flex items-center justify-between gap-10">
        <Image
          src={"/logo.png"}
          height={100}
          width={120}
          alt="logo"
          loading="eager"
        />

        <div className=" w-full max-w-[300px] border border-gray-300 flex">
          <input
            type="text"
            placeholder="Search news"
            className=" w-full py-1 pl-3 outline-none"
          />

          <div className=" h-[30px] w-[30px] flex items-center justify-center">
            <SearchIcon size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
