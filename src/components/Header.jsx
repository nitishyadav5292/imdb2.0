import React from "react";
import { FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={FaHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="bg-amber-500 py-1 px-2 rounded-lg r-1">IMDB</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
