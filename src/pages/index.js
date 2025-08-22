import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Luxury Handbag', price: '$1,200', image: '/images/product1.png' },
  { id: 2, name: 'Gold Watch', price: '$3,500', image: '/images/product2.png' },
  { id: 3, name: 'Silk Scarf', price: '$850', image: '/images/product3.png' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Boss Lady Luxury Shop</title>
        <meta name="description" content="Luxury fashion & accessories curated for the empowered." />
      </Head>

      <Header />

      <main className="bg-cream min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-cream mb-4">
          Welcome to the Boss Lady Collection
        </h1>
        <p className="text-center text-cream mb-8">
          Luxury fashion & accessories curated for the empowered.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}