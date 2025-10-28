"use client";
import { useEffect, useState } from "react";

const sections = ["Inicio", "Servicios", "Detalle", "Extras", "Contacto"];

export default function Navbar() {
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionPositions = sections.map((name) => {
        const el = document.getElementById(name.toLowerCase());
        return el ? { name, top: el.offsetTop - 100 } : null;
      }).filter(Boolean) as { name: string; top: number }[];

      const current = sectionPositions.findLast((s) => scrollY >= s.top);
      if (current && current.name !== active) setActive(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const handleClick = (name: string) => {
    const section = document.getElementById(name.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 flex justify-center">
      <ul className="flex gap-10 py-4 text-white font-medium tracking-wide">
        {sections.map((name) => (
          <li
            key={name}
            className="cursor-pointer relative"
            onClick={() => handleClick(name)}
          >
            <span
              className={`transition-colors duration-300 ${
                active === name ? "text-primary" : "text-gray-300"
              }`}
            >
              {name}
            </span>
            {active === name && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-primary transition-all duration-300" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
