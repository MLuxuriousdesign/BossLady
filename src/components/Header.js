export default function Header() {
  return (
    <header className="bg-black text-cream p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Boss Lady</h2>
      <nav>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}