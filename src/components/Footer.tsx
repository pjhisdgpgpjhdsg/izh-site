
const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl  mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ІЖ Мотоцикли</h3>
            <p className="text-gray-400">
            Легендарні радянські мотоцикли, які залишили слід в історії.
            </p>
          </div>
        
         
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-400">
          <p>© 2025 ІЖ Мотоцикли. Всі права захищені</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;