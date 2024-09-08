export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-indigo-600">
              Mon Blog
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-indigo-600 transition">
              Accueil
            </a>
            <a href="/articles" className="text-gray-600 hover:text-indigo-600 transition">
              Articles
            </a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
