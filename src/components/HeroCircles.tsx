// components/HeroCircles.tsx
"use client";

export default function HeroCircles() {
  return (
    <>
      <div className="absolute top-[-25%] left-[-20%] w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] bg-(--color-accent-orange) rounded-full z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[35vw] h-[35vw] min-w-[280px] min-h-[280px] bg-(--color-accent-yellow) rounded-full z-10" />
    </>
  );
}
