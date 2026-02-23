import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservations from '@/components/Reservations';
import Footer from '@/components/Footer';

export const metadata = {
  title: "D’Mortain · Fine Dining · Bogotá D.C, Colombia",
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente dignissimos odio quo ex tempora error voluptate sequi accusantium, repellat quaerat illo, libero, quae itaque corporis recusandae soluta molestias suscipit?',
};

export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservations />
      <Footer />
    </main>
  );
}