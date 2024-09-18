export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              Mon Blog
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white hover:text-indigo-400 transition">
              Accueil
            </a>
            <a href="/articles" className="text-white hover:text-indigo-400 transition">
              Articles
            </a>
            <a href="/contact" className="text-white hover:text-indigo-400 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
