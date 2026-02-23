export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-[#0D0D0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 h-72 overflow-hidden">
              <img
                src="/img/us1.png"
                alt="Chef preparando platillo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
            </div>
            <div className="h-48 overflow-hidden">
              <img
                src="/img/us2.png"
                alt="Ingredientes frescos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="h-48 overflow-hidden">
              <img
                src="/img/us3.png"
                alt="Platillo gourmet"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0D0D0B] px-6 py-4 text-center">
              <span className="block text-3xl font-['Playfair_Display'] font-bold">25+</span>
              <span className="block text-[0.6rem] tracking-[0.25em] uppercase font-['Jost']">Años de experiencia</span>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:pl-10">
            <p className="section-label">Nuestra historia</p>
            <div className="divider" />
            <h2 className="text-4xl md:text-5xl text-[#F5EFE0] leading-tight mb-6">
              Donde la tradición
              <span className="italic text-[#C9A84C] block">se reinventa</span>
            </h2>
            <p className="text-[#F5EFE0]/60 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos odio quo ex tempora error voluptate sequi accusantium, repellat quaerat illo, libero, quae itaque corporis recusandae soluta molestias suscipit?
            </p>
            <p className="text-[#F5EFE0]/60 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit corporis consectetur veniam debitis commodi illum? Quaerat autem, vel excepturi veritatis suscipit quasi ut ducimus dolorem deserunt sed ex sint.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-[#C9A84C]/20 pt-10">
              {[
                { number: '12', label: 'Premios nacionales' },
                { number: '3', label: 'Estrellas Michelin' },
                { number: '48', label: 'Mesas disponibles' },
                { number: '8', label: 'Menús de temporada' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <span className="text-4xl font-['Playfair_Display'] text-[#C9A84C]">{number}</span>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B60] mt-1 font-['Jost']">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
