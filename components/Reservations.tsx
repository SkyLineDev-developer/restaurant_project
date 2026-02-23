'use client';

import { useState, useRef, useEffect } from 'react';

// ── Custom Select ────────────────────────────────────────────────────────────
function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between border-b border-[#C9A84C]/20 hover:border-[#C9A84C] py-3 text-sm transition-colors duration-300 focus:outline-none"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <span className={selected ? 'text-[#F5EFE0]' : 'text-[#6B6B60]'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-3 h-3 text-[#C9A84C] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute left-0 right-0 top-full z-50 border border-[#C9A84C]/20 mt-1 max-h-48 overflow-y-auto"
          style={{ backgroundColor: '#1a1a18' }}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                opt.value === value
                  ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                  : 'text-[#F5EFE0]/70 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
// ────────────────────────────────────────────────────────────────────────────

export default function Reservations() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-[#C9A84C]/20 text-[#F5EFE0] placeholder-[#6B6B60] py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300';

  const timeOptions = ['13:00', '14:00', '15:00', '19:00', '20:00', '21:00', '22:00'].map(
    (t) => ({ label: t, value: t })
  );

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    label: `${n} ${n === 1 ? 'persona' : 'personas'}`,
    value: String(n),
  }));

  return (
    <section id="reservaciones" className="py-32 bg-[#111110] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-[#C9A84C]" style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left info */}
          <div>
            <p className="section-label">Reservaciones</p>
            <div className="divider" />
            <h2 className="text-5xl text-[#F5EFE0] leading-tight mb-8">
              Asegura tu
              <span className="italic text-[#C9A84C] block">experiencia</span>
            </h2>
            <p className="text-[#F5EFE0]/60 mb-12">
              Recomendamos reservar con al menos 48 horas de anticipación.
              Para grupos de más de 8 personas o eventos privados, contáctanos
              directamente.
            </p>

            <div className="space-y-8">
              {[
                { icon: '🕐', title: 'Horarios', info: 'Martes a Domingo\n13:00 – 16:00 / 19:00 – 23:00' },
                { icon: '📍', title: 'Ubicación', info: 'Engativá, Bogotá' },
                { icon: '📞', title: 'Contacto', info: '+57 311 111 1111\nejemplo@gmail,com' },
              ].map(({ icon, title, info }) => (
                <div key={title} className="flex gap-5">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A84C] font-['Jost'] mb-1">{title}</p>
                    <p className="text-[#F5EFE0]/60 font-['Cormorant_Garamond'] whitespace-pre-line">{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="border border-[#C9A84C]/10 p-8 lg:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-['Playfair_Display'] text-[#C9A84C] mb-3">Reservación confirmada</h3>
                <p className="text-[#F5EFE0]/60 font-['Cormorant_Garamond']">
                  Recibirás un correo de confirmación en breve. ¡Te esperamos!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A84C] hover:text-[#F5EFE0] transition-colors font-['Jost']"
                >
                  Nueva reservación →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <h3 className="text-xl font-['Playfair_Display'] text-[#F5EFE0] mb-8">
                  Completa tu reservación
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="col-span-2">
                    <input
                      name="name"
                      placeholder="Nombre completo"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    />
                  </div>

                  {/* Email */}
                  <input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  />

                  {/* Teléfono */}
                  <input
                    name="phone"
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  />

                  {/* Fecha */}
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className={`${inputClass} [color-scheme:dark]`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  />

                  {/* Hora — custom select */}
                  <CustomSelect
                    placeholder="Hora"
                    options={timeOptions}
                    value={form.time}
                    onChange={(val) => setForm({ ...form, time: val })}
                  />

                  {/* Personas — custom select */}
                  <div className="col-span-2">
                    <CustomSelect
                      placeholder="Número de personas"
                      options={guestOptions}
                      value={form.guests}
                      onChange={(val) => setForm({ ...form, guests: val })}
                    />
                  </div>

                  {/* Notas */}
                  <div className="col-span-2">
                    <textarea
                      name="notes"
                      placeholder="Notas especiales, alergias, ocasión especial..."
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full justify-center mt-4 py-4">
                  Confirmar Reservación
                </button>

                <p className="text-[#6B6B60] text-xs text-center font-['Jost']">
                  Sin cargo por cancelación con 24hrs de anticipación
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}