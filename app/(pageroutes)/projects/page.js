"use client";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Cards from "@/app/_components/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
function page() {
  const [num, setnum] = useState(400);
  useEffect(
    function () {
      setnum(window.screen.width);
    },
    [num]
  );

  const pictures = [
    {
      name: "Ecommerce",
      tech: "Nextjs,Tailwindcss,Strapi,Clerk,Stripe",
      src: "/img/ecommerce.jpeg",
      linkh: "https://ecomnextjsproject.vercel.app/",
    },
    {
      name: "Booking appointment",
      tech: "Reactjs,MUI,kinde,Strapi",
      src: "/img/bookingappointment.png",
      linkh: "https://loquacious-medovik-87819f.netlify.app/",
    },
    {
      name: "Cartoon movies",
      tech: "Reactjs,Bootstrap,API",
      src: "/img/cartoon movies site.png",
      linkh: "https://cute-marshmallow-6103a6.netlify.app/",
    },
    {
      name: "Resturant",
      tech: "Reactjs,Bootstrap",
      src: "/img/resturrant.png",
      linkh: "https://rad-kulfi-182b9b.netlify.app/",
    },
    {
      name: "Weather App",
      tech: "Reactjs,MUI,Next!18",
      src: "/img/weather app.png",
      linkh: "https://dulcet-cupcake-654245.netlify.app/",
    },
    {
      name: "To-Do list",
      tech: "Reactjs,MUI",
      src: "/img/todo list.png",
      linkh: "https://incredible-unicorn-207733.netlify.app/",
    },
  ];
  return (
    <div className=" text-white  max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 min-h-[100vh] mb-20 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <div className="text-5xl text-center mb-10 textcolor p-4 rounded-lg bg-amber-700  ">
          My Projects
        </div>
      </div>
      {num < 500 ? (
        <div className="mb-5 text-2xl">pull to show more projects 👉👉</div>
      ) : null}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={num < 500 ? "1" : num < 700 ? "2" : "4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {pictures.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Cards
                name={item.name}
                tech={item.tech}
                src={item.src}
                linkh={item.linkh}
                wid={num < 500 ? 500 : 300}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default page;
