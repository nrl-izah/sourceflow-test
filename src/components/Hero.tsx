// components/Hero.tsx
"use client";
import { useState } from "react";
import HeroCircles from "@/components/HeroCircles";

export default function HeroSection() {
    const [query, setQuery] = useState("")

    return (   
        <section className="relative overflow-hidden min-h-screen pt-16 w-full py-20 px-8 bg-(--color-primary) text-white flex flex-col justify-center items-center">
            <HeroCircles />
            <div className="z-40 grid grid-cols-1 md:grid-cols-2 gap-12 mx-0 md:mx-6 p-2 justify-center items-center">
                <div className="flex flex-col gap-6">
                    <p>Software Recruitment Specialists</p>
                    <h1>Elevate your career</h1>
                    <div className="flex flex-col gap-4 md:flex-row md:gap-0 w-full">
                        <input
                            value={query}
                            id="search_query"
                            onChange={(e) => setQuery(e.target.value)}
                            type="text"
                            placeholder="E.g. networking"
                            style={{
                            color: "var(--text-primary)",
                            }}
                            className="w-full md:grow md:basis-3/4 rounded-full md:rounded-l-full md:rounded-r-none px-6 py-4  bg-white rounded-l-full font-bold outline-none transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-(--color-accent-yellow) focus-visible:shadow-md"
                        />

                        <a
                            href="#"
                            onClick={() => console.log(query)}
                            style={{
                            backgroundColor: "var(--color-accent-yellow)",
                            color: "var(--text-search)",
                            }}
                            className="w-full md:grow md:basis-1/4 rounded-full md:rounded-r-full md:rounded-l-none px-6 py-4  rounded-r-full font-bold flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-yellow-700 shadow-md select-none"

                        >
                            <span className="active:scale-95">Search jobs</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-full aspect-4/3">
                        <img className="w-full h-full rounded-3xl object-cover object-right" src="/images/hero-img.jpg" alt="" />
                    </div>
                </div>
            </div>
            
        </section>
    );
}