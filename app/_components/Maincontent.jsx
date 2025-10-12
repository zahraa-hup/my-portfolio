import React from "react";
import Image from "next/image";

function Maincontent() {
  

  return (
    <section className=" lg:grid lg:h-screen mt-[20px]">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 ">
        <div className="max-w-prose text-left text-5xl text-white leading-15">
          <div>Hi There 🙂 Iam Zahraa Abdelmonem Front End Developer !</div>
        </div>
        <div className="flex justify-center mt-10 md:mt-0 duration 1000">
          <Image
            width={400}
            height={400}
            alt=""
            src="/hero.jpg"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Maincontent;
