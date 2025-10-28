export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="h-screen flex flex-col justify-center items-center px-8 text-center bg-transparent backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold mb-6">AGENDA TU SERVICIO</h2>
      <p className="text-gray-300 mb-6">
        Cotiza y agenda por WhatsApp o llámanos directamente.
      </p>
      <a
        href="https://wa.me/56974970075"
        target="_blank"
        className="bg-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all shadow-lg"
      >
        📱 +56 9 749 700 75
      </a>
    </section>
  );
}
