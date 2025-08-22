import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-black text-cream p-4 flex justify-between items-center">
      <Logo />
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