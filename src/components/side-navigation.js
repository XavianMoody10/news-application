"use client";

import { SideNavigationContext } from "@/contexts/side-navigation-context";
import { motion } from "motion/react";
import Link from "next/link";
import { useContext } from "react";
import { IoClose as CloseIcon } from "react-icons/io5";

export default function SideNavigation() {
  const { isOpen, setIsOpen } = useContext(SideNavigationContext);

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ stiffness: 0 }}
      className=" fixed left-0 top-0 h-screen w-[90%] max-w-[300px] bg-blue-950 z-10 flex justify-center items-center xl:hidden"
    >
      <CloseIcon
        color="white"
        className=" absolute top-5 right-5"
        size={28}
        onClick={() => setIsOpen(false)}
      />
      <nav>
        <ul className=" flex flex-col gap-8">
          <li>
            <Link
              href={"/"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Top Stories
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/WORLD"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              World
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/NATIONAL"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              National
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/BUSINESS"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/TECHNOLOGY"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/ENTERTAINMENT"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/SPORTS"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/SCIENCE"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Science
            </Link>
          </li>
          <li>
            <Link
              href={"/headline/HEALTH"}
              className=" text-white font-semibold text-xl hover:underline"
            >
              Health
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
}
