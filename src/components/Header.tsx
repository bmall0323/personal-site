const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-100 border-b border-gray-300">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Bill Malley</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-black">Home</a>
          <a href="/about" className="text-gray-600 hover:text-black">About</a>
          <a href="/projects" className="text-gray-600 hover:text-black">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
