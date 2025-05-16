import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-100 border-b border-gray-300">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Malley Analytics</h1>
        <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link href="/projects" className="text-gray-600 hover:text-black">Projects</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
