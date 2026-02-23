'use client';

import { useState } from 'react';

const categories = ['Entradas', 'Principales', 'Postres', 'Maridaje'];

const menuItems: Record<string, { name: string; description: string; price: string; tag?: string }[]> = {
  Entradas: [
    {
      name: 'Ceviche de Robalo',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$285',
      tag: 'Favorito',
    },
    {
      name: 'Carpaccio de Res Wagyu',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$390',
    },
    {
      name: 'Sopa de Flor de Calabaza',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$210',
      tag: 'Temporada',
    },
    {
      name: 'Taco de Pato Confitado',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$320',
    },
  ],
  Principales: [
    {
      name: 'Filete de Res Angus',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$680',
      tag: 'Chef\'s Choice',
    },
    {
      name: 'Lubina a la Mantequilla Negra',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$590',
    },
    {
      name: 'Risotto de Hongos Silvestres',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$420',
      tag: 'Vegetariano',
    },
    {
      name: 'Pato a la Prensa',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$720',
    },
  ],
  Postres: [
    {
      name: 'Fondant de Chocolate Negro',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$195',
      tag: 'Favorito',
    },
    {
      name: 'Soufflé de Maracuyá',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$210',
    },
    {
      name: 'Selección de Quesos Artesanales',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$280',
    },
  ],
  Maridaje: [
    {
      name: 'Maridaje Clásico',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$850',
      tag: 'Recomendado',
    },
    {
      name: 'Maridaje Sin Alcohol',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$480',
    },
    {
      name: 'Mezcal de Autor',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos.',
      price: '$320',
    },
  ],
};

export default function Menu() {
  const [active, setActive] = useState('Entradas');

  return (
    <section id="menu" className="py-32 bg-[#111110]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Temporada 2025</p>
          <div className="divider mx-auto" />
          <h2 className="text-5xl md:text-6xl text-[#F5EFE0]">
            Nuestra <span className="italic text-[#C9A84C]">Carta</span>
          </h2>
          <p className="text-[#F5EFE0]/50 mt-4 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae deserunt nulla repudiandae, delectus corporis reprehenderit totam laborum modi nihil, illo laboriosam nobis maiores ut numquam. Fugit sequi exercitationem officiis optio?
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-16 border border-[#C9A84C]/20 p-1 w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase font-['Jost'] transition-all duration-300 ${
                active === cat
                  ? 'bg-[#C9A84C] text-[#0D0D0B]'
                  : 'text-[#F5EFE0]/50 hover:text-[#C9A84C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="space-y-0">
          {menuItems[active].map((item, i) => (
            <div
              key={item.name}
              className="group flex items-start justify-between gap-6 py-7 border-b border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl text-[#F5EFE0] group-hover:text-[#C9A84C] transition-colors duration-300 font-['Playfair_Display']">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="text-[0.55rem] tracking-[0.2em] uppercase border border-[#C9A84C]/50 text-[#C9A84C] px-2 py-0.5 font-['Jost']">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-[#6B6B60] text-sm font-['Cormorant_Garamond'] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="text-[#C9A84C] font-['Playfair_Display'] text-xl whitespace-nowrap mt-1">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#6B6B60] text-sm font-['Cormorant_Garamond'] mb-6">
            También ofrecemos menú degustación de 7 tiempos. Precio por persona: $1,850
          </p>
          <a href="#reservaciones" className="btn-gold">
            Reservar y elegir menú
          </a>
        </div>
      </div>
    </section>
  );
}
