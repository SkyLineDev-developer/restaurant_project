const images = [
  {
    src: '/img/gallery2.png',
    alt: 'Platillo principal',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/img/gallery1.png',
    alt: 'Interior del restaurante',
    span: '',
  },
  {
    src: '/img/heroSection.png',
    alt: 'Ambiente nocturno',
    span: '',
  },
  {
    src: '/img/gallery3.png',
    alt: 'Postre artístico',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
    alt: 'Mesa preparada',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="galería" className="py-32 bg-[#0D0D0B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label">Imágenes</p>
            <div className="divider" />
            <h2 className="text-5xl text-[#F5EFE0]">
              La <span className="italic text-[#C9A84C]">Galería</span>
            </h2>
          </div>
          <p className="text-[#6B6B60] max-w-sm font-['Cormorant_Garamond']">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sit culpa quod provident facere maiores laudantium tenetur ut, temporibus rerum recusandae.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${img.span}`}
              style={{ gridColumn: i === 0 ? 'span 2' : undefined, gridRow: i === 0 ? 'span 2' : undefined }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <div className="inline-block border border-[#C9A84C]/20 px-12 py-10">
            <p className="text-2xl md:text-3xl font-['Playfair_Display'] italic text-[#F5EFE0]/80 leading-relaxed">
              "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit culpa quod provident facere maiores laudantium tenetur ut, temporibus rerum recusandae."
            </p>
            <p className="section-label mt-6">— Chef Rodrigo Santillán</p>
          </div>
        </div>
      </div>
    </section>
  );
}
