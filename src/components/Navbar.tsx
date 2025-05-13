import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-500' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img width={40} height={40} src="/logo.svg" alt="logo" />
            <span className="text-2xl font-bold text-white">ІЖ</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium`}>
              Головна
            </Link>
            <Link to="/models" className={`${isActive('/models')} font-medium`}>
              Моделі
            </Link>
            <Link to="/history" className={`${isActive('/history')} font-medium`}>
              Історія
            </Link>
            <Link to="/technical" className={`${isActive('/technical')} font-medium`}>
              Технічні данні
            </Link>
            <Link to="/support" className={`${isActive('/support')} flex items-center gap-1 font-medium`}>
                <Heart className='text-red-500' size={16}/>
              Підтримка
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className={`${isActive('/')} block font-medium`}>
              Головна
            </Link>
            <Link to="/models" onClick={() => setMenuOpen(false)} className={`${isActive('/models')} block font-medium`}>
              Моделі
            </Link>
            <Link to="/history" onClick={() => setMenuOpen(false)} className={`${isActive('/history')} block font-medium`}>
              Історія
            </Link>
            <Link to="/technical" onClick={() => setMenuOpen(false)} className={`${isActive('/technical')} block font-medium`}>
              Технічні данні
            </Link>
            <Link to="/support" onClick={() => setMenuOpen(false)} className={`${isActive('/support')} block font-medium`}>
              Підтримка
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
