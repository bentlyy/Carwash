export default function ExtrasSection() {
  const extras = [
    { name: "Sellado de cristales x6", price: 29990 },
    { name: "Sellado antimicrobiano de plásticos", price: 44990 },
    { name: "Sellado de carrocería con graphene wax", price: 24990 },
    { name: "Restauración de ópticos", price: 29990 },
    { name: "Limpieza de motor", price: 34990 },
  ];

  return (
    <section
      id="extras"
      className="h-screen flex flex-col justify-center items-center px-8 bg-transparent backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold mb-10">EXTRAS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {extras.map((e) => (
          <div
            key={e.name}
            className="flex justify-between bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-600 hover:border-primary transition shadow-lg"
          >
            <span>{e.name}</span>
            <span className="text-primary font-semibold">
              ${e.price.toLocaleString("es-CL")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
