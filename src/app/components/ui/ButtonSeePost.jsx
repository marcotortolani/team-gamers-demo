import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ButtonSeePost({ text, href, size, icon }) {
  return (
    <Link
      className={
        ` flex items-center uppercase justify-between gap-2 font-semibold text-White text-center ${
          size === "xs"
            ? " text-sm px-4 py-0 md:px-4 lg:px-6 lg:py-2 md:text-lg lg:text-xl"
            : size === "sm"
            ? " px-8 py-0 lg:px-6 lg:py-2 lg:text-lg "
            : size === "md"
            ? " text-base px-10 py-1 "
            : " px-1 py-0"
        }  bg-gradient-to-r from-[#39E2FF] via-purple-500 to-[#F51341] rounded-full hover:cursor-pointer`
      }
      href={href}
    >
      {text}
      {icon && <Image src={icon} alt="Eye Icon" width={24} height={24} />}
    </Link>
  );
}
