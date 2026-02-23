export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0A0A09] border-t border-[#C9A84C]/10">
      {/* Top band */}
      <div className="border-b border-[#C9A84C]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-[#C9A84C] font-['Playfair_Display'] text-3xl italic">D’Mortain</span>
              <span className="block text-[0.55rem] tracking-[0.4em] uppercase text-[#6B6B60] mt-1">Fine Dining · Bogotá</span>
            </div>
            <p className="text-[#6B6B60] font-['Cormorant_Garamond'] max-w-xs leading-relaxed mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ullam? Vitae, asperiores error.
            </p>
            {/* Social */}
            <div className="flex gap-5 mt-8">
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[0.6rem] tracking-[0.2em] uppercase text-[#6B6B60] hover:text-[#C9A84C] transition-colors duration-300 font-['Jost']"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-6">Navegación</p>
            <ul className="space-y-3">
              {['Menu', 'Nosotros', 'Galería', 'Reservaciones', 'Eventos Privados'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#6B6B60] hover:text-[#C9A84C] transition-colors font-['Cormorant_Garamond'] text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Contacto</p>
            <div className="space-y-4 text-[#6B6B60] font-['Cormorant_Garamond']">
              <p>Engativá, Bogotá, 11560</p>
              <p>+57 311 111 1111</p>
              <p>ejemplo@gmail.com</p>
              <p className="text-sm">Mar–Dom: 13:00–23:00<br />Lunes: Cerrado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[#6B6B60] text-[0.6rem] tracking-[0.2em] uppercase font-['Jost']">
          © {new Date().getFullYear()} D’Mortain Fine Dining. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {['Aviso de Privacidad', 'Términos y Condiciones'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#6B6B60] hover:text-[#C9A84C] text-[0.6rem] tracking-[0.15em] uppercase font-['Jost'] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
