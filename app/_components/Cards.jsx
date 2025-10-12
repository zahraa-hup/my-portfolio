"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
function Cards({ name, tech, src, linkh, wid }) {
  return (
    <div className="group block  p-2 border-fuchsia-800 border-2 rounded-lg  ">
      <Image
        src={`${src}`}
        alt=""
        className="aspect-square  rounded-sm object-cover overflow-hidden"
        width={`${wid}`}
        height={300}
      />
      <div className="mt-2 text-sm">{name}</div>
      <div className="mt-2  text-sm overflow-auto"> {tech}</div>

      <Link
        href={`${linkh}`}
        className="bg-amber-900 hover:bg-amber-700 md:p-2  p-1 rounded-lg inline-block mt-2"
      >
        Demo site
      </Link>
    </div>
  );
}

export default Cards;
