'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Ana Gutiérrez',
    role: 'Crítica Gastronómica · Milenio',
    text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos odio quo ex tempora error voluptate sequi accusantium, repellat quaerat illo, libero, quae itaque corporis recusandae soluta molestias suscipit?',
    stars: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Empresario · Cliente frecuente',
    text: 'Llevo ocho años celebrando cumpleaños aquí. El servicio es impecable, la comida siempre sorprende y el ambiente te hace sentir que el tiempo se detiene. Un lujo accesible.',
    stars: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Chef · París, Francia',
    text: 'Viajé específicamente a México para cenar en L\'Ambre. El maridaje fue excepcional y la reinterpretación del mole negro me emocionó. Es alta cocina con verdadero carácter.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-[#0D0D0B] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <span className="text-[40vw] font-['Playfair_Display'] text-[#C9A84C] select-none">L</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-label">Testimonios</p>
          <div className="divider mx-auto" />
          <h2 className="text-5xl text-[#F5EFE0]">
            Lo que dicen
            <span className="italic text-[#C9A84C]"> nuestros huéspedes</span>
          </h2>
        </div>

        {/* Review card */}
        <div className="border border-[#C9A84C]/10 p-10 md:p-16 text-center relative">
          <div className="text-[#C9A84C] text-5xl font-serif mb-8 opacity-40">"</div>

          <p className="text-[#F5EFE0]/80 text-xl md:text-2xl font-['Playfair_Display'] italic leading-relaxed mb-10">
            {reviews[active].text}
          </p>

          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: reviews[active].stars }).map((_, i) => (
              <span key={i} className="text-[#C9A84C]">★</span>
            ))}
          </div>

          <p className="text-[#F5EFE0] font-['Jost'] text-sm tracking-wide">{reviews[active].name}</p>
          <p className="text-[#6B6B60] font-['Jost'] text-[0.65rem] tracking-[0.2em] uppercase mt-1">
            {reviews[active].role}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active ? 'w-8 h-px bg-[#C9A84C]' : 'w-2 h-px bg-[#6B6B60]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
