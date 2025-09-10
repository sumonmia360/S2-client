// src/components/Stories.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stories = [
  {
    id: 1,
    label: "COLLABORATIONS",
    title: "THE KING’S GAMBIT",
    subtitle: "Changing the rules with Stylo Fashion",
    image: "/image/storiesImg.png",
  },
  {
    id: 2,
    label: "COLLABORATIONS",
    title: "INSIDE OUT",
    subtitle: "Design duo mens on love, Cargo, and disruption",
    image: "/image/storiesZ9.jpg",
  },
  {
    id: 3,
    label: "COLLABORATIONS",
    title: "THE FASHION GORILLA",
    subtitle: "A natural collaboration with fine taxidermists Fashion.",
    image: "/image/botam.jpg",
  },
];

export default function StoriesSection() {
  return (
    <section className="bg-gray-100 px-6 pt-12 pb-20">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center mb-8">STORIES</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 }, // Desktop shows 3
        }}
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="bg-white shadow-sm">
              {/* Image */}
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-white text-xs font-bold  px-2 py-1">
                  {story.label}
                </span>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
