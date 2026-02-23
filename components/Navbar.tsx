'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = ['Menu', 'Nosotros', 'Reservaciones', 'Galería', 'Contacto'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-[#0D0D0B]/95 backdrop-blur-md py-4 border-b border-[#C9A84C]/10' : 'bg-transparent py-7'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none group">
          <span className="text-[#C9A84C] font-['Playfair_Display'] text-2xl italic tracking-wide">
            D&apos;Mortain
          </span>
          <span className="text-[0.55rem] tracking-[0.4em] uppercase text-[#6B6B60] mt-0.5 group-hover:text-[#C9A84C] transition-colors duration-300">
            Fine Dining
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[0.7rem] tracking-[0.25em] uppercase text-[#F5EFE0]/60 hover:text-[#C9A84C] transition-colors duration-300 font-['Jost']"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#reservaciones" className="btn-gold text-[0.65rem]">
            Reservar Mesa
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-4 h-px bg-[#C9A84C] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-[#0D0D0B]/98 border-t border-[#C9A84C]/10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[0.7rem] tracking-[0.25em] uppercase text-[#F5EFE0]/70 hover:text-[#C9A84C] transition-colors font-['Jost']"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
