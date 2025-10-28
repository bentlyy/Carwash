import "./globals.css";
import Navbar from "./(components)/Navbar";
import type { Metadata } from "next";
import ParallaxBackground from "./(components)/ParallaxBackground";

export const metadata: Metadata = {
  title: "Fernando Olivares | Estética Automotriz",
  description: "Lavado exterior e interior profesional con detalle premium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="relative bg-dark text-white overflow-x-hidden">
        {/* Fondo parallax controlado desde un componente cliente */}
        <ParallaxBackground />

        {/* Barra superior */}
        <Navbar />

        {/* Contenido dinámico */}
        {children}
      </body>
    </html>
  );
}
