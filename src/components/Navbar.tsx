import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-500' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
          <img width={40} height={40} src='/logo.svg'></img>
            <span className="text-2xl font-bold">ІЖ</span>
          </Link>
          
          <div className="flex space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;