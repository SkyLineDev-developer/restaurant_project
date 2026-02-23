'use client';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/heroSection.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0B]/70 via-[#0D0D0B]/50 to-[#0D0D0B]" />

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#C9A84C]/60" />
        <span
          className="text-[#C9A84C]/40 text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-[#C9A84C]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-28 sm:pb-20 lg:pb-12">
        <p className="section-label animate-fadeInUp delay-200">
          Desde 1998 · Bogotá D.C, Colombia
        </p>

        <h1 className="animate-fadeInUp delay-400 mt-6 text-6xl md:text-8xl lg:text-9xl text-[#F5EFE0] leading-none tracking-tight">
          Una experiencia
          <span className="block italic text-[#C9A84C]">que perdura</span>
        </h1>

        <div className="divider mx-auto animate-fadeInUp delay-600" />

        <p className="animate-fadeInUp delay-600 text-[#F5EFE0]/70 max-w-xl mx-auto text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem nisi suscipit ex tenetur at? Ex adipisci maiores debitis vel cumque dolores officiis amet eius ducimus, optio animi alias reprehenderit!
        </p>

        <div className="animate-fadeInUp delay-800 flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <a href="#reservaciones" className="btn-gold">
            Reservar Mesa
          </a>
          <a
            href="#menu"
            className="text-[0.7rem] tracking-[0.25em] uppercase text-[#F5EFE0]/50 hover:text-[#C9A84C] transition-colors duration-300 font-['Jost']"
          >
            Ver Menú →
          </a>
        </div>
      </div>

      {/* Bottom info bar — grid de 3 columnas fijas, sin wrap */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#C9A84C]/10 bg-[#0D0D0B]/80 backdrop-blur-sm">
        <div className="grid grid-cols-3 divide-x divide-[#C9A84C]/10">
          {[
            { label: 'Horario', line1: 'Mar–Dom', line2: '13:00–23:00' },
            { label: 'Teléfono', line1: '+57 311', line2: '111 1111' },
            { label: 'Ubicación', line1: 'Engativá,', line2: 'Bogotá' },
          ].map(({ label, line1, line2 }) => (
            <div key={label} className="text-center py-3 px-2">
              <p className="text-[0.5rem] sm:text-[0.6rem] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#C9A84C] font-['Jost']">
                {label}
              </p>
              <p className="text-[#F5EFE0]/60 text-xs sm:text-sm font-['Cormorant_Garamond'] mt-0.5 leading-snug">
                {line1}<br />{line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}