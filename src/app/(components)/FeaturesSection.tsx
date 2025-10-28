export default function FeaturesSection() {
  const features = [
    {
      icon: "/icons/vacuum.svg",
      title: "Aspirado y Detallado Interior",
      desc: "Rejuvenecimiento de plásticos interiores con protección UV y aromatización.",
    },
    {
      icon: "/icons/wash.svg",
      title: "Lavado Exterior Completo",
      desc: "Incluye ruedas, carrocería y vidrios con shampoo PH neutral o aditivo SIO2.",
    },
    {
      icon: "/icons/wax.svg",
      title: "Encerado Profesional",
      desc: "Cera carnauba o sintética, acondicionamiento de plásticos y neumáticos.",
    },
  ];

  return (
    <section
      id="detalle"
      className="h-screen flex flex-col justify-center items-center px-8 bg-transparent backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold mb-10">DETALLE DE SERVICIOS</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="text-center bg-black/25 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-primary transition shadow-lg"
          >
            <img src={f.icon} alt={f.title} className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
