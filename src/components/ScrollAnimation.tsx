"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0.5, rotate: -20 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%", // Mulai animasi saat elemen 80% masuk viewport
          end: "top 50%",
          scrub: true, // Animasi mengikuti scroll
        },
      }
    );
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg opacity-0"
      >
        GSAP Anim
      </div>
    </div>
  );
}
