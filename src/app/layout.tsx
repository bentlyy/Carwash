import "./globals.css";
import Navbar from "./(components)/Navbar";
import ParallaxBackground from "./(components)/ParallaxBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fernando Olivares | Estética Automotriz",
  description: "Lavado exterior e interior profesional con detalle premium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative bg-dark text-white overflow-x-hidden">
        {/* Fondo Parallax */}
        <ParallaxBackground />

        {/* Barra superior */}
        <Navbar />

        {/* Contenido principal */}
        <main className="snap-y snap-mandatory overflow-y-scroll h-screen w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
