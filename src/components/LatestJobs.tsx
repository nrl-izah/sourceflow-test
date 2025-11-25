"use client";
import { useState, useRef, useEffect } from "react";
import JobCard from "@/components/JobCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { NavigationOptions } from "swiper/types";

export default function LatestJobs() {
  const jobs = [
    {
      bg: "var(--color-accent-yellow)",
      text: "var(--color-primary)",
      job: {
        icon: "/icons/python.svg",
        tag: "Python",
        title: "Software Engineer",
        location: "London",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc...",
        posted: "29/08/2023",
      },
    },
    {
      bg: "var(--color-primary)",
      text: "var(--color-white)",
      job: {
        icon: "/icons/python.svg",
        tag: "Python",
        title: "Software Engineer",
        location: "London",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc...",
        posted: "29/08/2023",
      },
    },
    {
      bg: "var(--color-accent-orange)",
      text: "var(--text-accent)",
      job: {
        icon: "/icons/python.svg",
        tag: "Python",
        title: "Software Engineer",
        location: "London",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc...",
        posted: "29/08/2023",
      },
    },
    {
      bg: "var(--color-accent-yellow)",
      text: "var(--color-primary)",
      job: {
        icon: "/icons/python.svg",
        tag: "Python",
        title: "Software Engineer",
        location: "London",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc...",
        posted: "29/08/2023",
      },
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Initialize navigation buttons once swiperInstance exists
  useEffect(() => {
    if (!swiperInstance) return;

    const timer = setTimeout(() => {
      if (prevRef.current && nextRef.current && swiperInstance.navigation) {
        const navigation = swiperInstance.params.navigation as NavigationOptions;
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;

        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    });

    return () => clearTimeout(timer);
  }, [swiperInstance]);

  // Compute beginning and end dynamically
  const isBeginning = activeIndex === 0;
  const isEnd = activeIndex >= jobs.length - slidesPerView;

  return (
    <section className="w-full py-8 px-6 bg-(--color-primary-light) relative">
      <div className="mx-0 md:mx-6 p-2">
        <h2 className="text-(--text-heading) font-bold text-center mb-6">
          Latest Jobs
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          onSwiper={(swiper: SwiperType) => {
            setSwiperInstance(swiper);
            setSlidesPerView(swiper.params.slidesPerView as number);
          }}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          {jobs.map((job, i) => (
            <SwiperSlide key={i}>
              <JobCard {...job} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-between items-center mt-6">
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className={`text-(--text-heading) ${isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
              disabled={isBeginning}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331C10.8 3.33331 3.33331 10.8 3.33331 20ZM20 18.3333H26.6667V21.6666H20V26.6667L13.3333 20L20 13.3333V18.3333Z"
                  fill="currentColor"
                  fillOpacity={isBeginning ? 0.5 : 1}
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className={`text-(--text-heading) ${isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
              disabled={isEnd}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331C10.8 3.33331 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20ZM20 21.6666H13.3333V18.3333H20V13.3333L26.6667 20L20 26.6667V21.6666Z"
                  fill="currentColor"
                  fillOpacity={isEnd ? 0.5 : 1}
                />
              </svg>
            </button>
          </div>

          <div>
            <a
              href="#"
              className="text-(--text-heading) visited:var(--text-primary) link-underline"
            >
              View more jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
