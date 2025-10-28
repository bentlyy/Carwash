"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    const handleMouseMove = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${(mouse.x - 0.5) * 20}px, ${(mouse.y - 0.5) * 20 - offset}px)`,
    transition: "transform 0.2s ease-out",
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div style={parallaxStyle}>
        <Image
          src="/auto.jpg"
          alt="Fondo automotriz"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
    </div>
  );
}
