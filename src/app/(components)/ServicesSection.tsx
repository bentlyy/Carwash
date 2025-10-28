export default function ServicesSection() {
  const services = [
    { name: "CITYCAR", basic: 20000, premium: 70000 },
    { name: "HATCHBACK / SEDÁN", basic: 25000, premium: 80000 },
    { name: "SUV", basic: 30000, premium: 90000 },
    { name: "XXL", basic: 35000, premium: 100000 },
  ];

  return (
    <section
      id="servicios"
      className="h-screen flex flex-col justify-center items-center px-8 bg-transparent backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold mb-10">SERVICIOS DISPONIBLES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {services.map((s) => (
          <div
            key={s.name}
            className="p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-600 hover:border-primary transition shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{s.name}</h3>
            <p className="text-gray-300 mb-2">
              BÁSICO: ${s.basic.toLocaleString("es-CL")}
            </p>
            <p className="text-primary font-bold">
              PREMIUM: ${s.premium.toLocaleString("es-CL")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
