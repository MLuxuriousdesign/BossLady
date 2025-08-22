import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-black text-cream p-4 flex justify-between items-center">
      <Logo />
      <nav>
        <ul className="flex space-x-6">
          <li className="hover:text-gold cursor-pointer">Home</li>
          <li className="hover:text-gold cursor-pointer">Shop</li>
          <li className="hover:text-gold cursor-pointer">Cart</li>
        </ul>
      </nav>
    </header>
  );
}