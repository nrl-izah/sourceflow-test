//components/Header.tsx
"use client";

import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full py-4 px-6 bg-white flex justify-between items-center sticky top-0 z-50"> 
            <nav className="flex justify-between items-center p-2 gap-12 w-full mx-0 md:mx-6">
                {/* logo */}
                <h4 className="text-(--color-primary) font-bold">Software Recruitment co.</h4>

                {/* Desktop Menu */}
                <div className="hidden md:flex lg:items-center items-end gap-6 text-center">
                {["For jobseekers", "For clients", "Sectors", "Resources"].map((label, idx) => (
                    <a
                    key={idx}
                    href="#"
                    className="nav-link flex flex-col items-center lg:flex-row lg:items-center gap-1"
                    >
                    <span>{label}</span>
                    <img src="/icons/menu-down.svg" alt="" className="ml-1"/>
                    </a>
                ))}
                </div>


                {/* Desktop CTA */}
                <div className="hidden md:flex gap-3">
                    <a href="#" className="active:scale-95 active:shadow-inner select-none ease-in-out bg-(--color-accent-yellow) hover:brightness-90 hover:text-opacity-80 transition-all duration-300 text-(--text-accent) font-bold py-2 px-4 rounded-full text-center">
                    Upload a CV
                    </a>
                    <a href="#" className="active:scale-95 active:shadow-inner select-none ease-in-out bg-(--color-accent-orange) hover:brightness-90 hover:text-opacity-80 transition-all duration-300 text-(--text-accent) font-bold py-2 px-4 rounded-full text-center">
                    Contact us
                    </a>
                </div>

                {/* Mobile Hamburger Menu */}
                <div id="nav-icon" className={`md:hidden cursor-pointer ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav> 

            {/* Mobile Menu (fullscreen overlay) */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col justify-between py-4 px-6 transition-opacity duration-300 md:hidden ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col p-2 gap-8 w-full">
                
                    {/* Top bar WITH SAME h1 + same icon */}
                    <div className="flex justify-between items-center w-full gap-12">
                        <h4 className="text-(--color-primary) font-bold">
                        Software Recruitment co.
                        </h4>

                        <div
                            id="nav-icon"
                            className={`cursor-pointer ${isOpen ? "open" : ""}`}
                            onClick={() => setIsOpen(false)}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Mobile Menu links */}
                    <div className="flex flex-col gap-6 text-left w-full mt-6">
                    {["For jobseekers", "For clients", "Sectors", "Resources"].map((label, idx) => (
                        <a
                        key={idx}
                        href="#"
                        className="nav-link"
                        >
                        <span>{label}</span>
                        <img src="/icons/menu-down.svg" alt="" className="ml-1"/>
                        </a>
                    ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col p-2 gap-4 w-full">
                    <a href="#" className="active:scale-95 active:shadow-inner select-none ease-in-out bg-(--color-accent-yellow) hover:brightness-90 hover:text-opacity-80 transition-all duration-300 text-(--text-accent) font-bold py-2 px-4 rounded-full text-center w-full">
                        Upload a CV
                    </a>
                    <a href="#" className="active:scale-95 active:shadow-inner select-none ease-in-out bg-(--color-accent-orange) hover:brightness-90 hover:text-opacity-80 transition-all duration-300 text-(--text-accent) font-bold py-2 px-4 rounded-full text-center w-full">
                        Contact us
                    </a>
                </div>
            </div>
        </header>
    );
}