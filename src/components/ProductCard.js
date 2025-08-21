export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gold font-bold mb-4">{product.price}</p>
      <button className="bg-gold text-black px-4 py-2 rounded hover:scale-105 transition">Add to Cart</button>
    </div>
  );
}