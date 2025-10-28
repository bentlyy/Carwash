"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center px-8 text-center bg-transparent backdrop-blur-md"
    >
      <motion.img
        src="/logo.png"
        alt="Fernando Olivares Estética Automotriz"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-64 mb-6 drop-shadow-[0_0_15px_rgba(30,144,255,0.4)]"
      />
      <motion.h1
        className="text-5xl font-bold tracking-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        LAVADO EXTERIOR E INTERIOR
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Estética automotriz profesional desde 2020
      </motion.p>
      <motion.a
        href="https://wa.me/56974970075"
        target="_blank"
        className="mt-8 bg-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Cotiza y Agenda tu Servicio
      </motion.a>
    </section>
  );
}
