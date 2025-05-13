import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motorcycleData } from '../data/motorcycles';

const Models = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl  font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-500">
          Модельный ряд ІЖ
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycleData.map((moto) => (
            <Link 
              key={moto.id} 
              to={`/models/${moto.id}`}
              className="group bg-neutral-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-neutral-700/50 transition-all duration-300 border border-neutral-700/50 hover:border-red-500/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={moto.image} 
                  alt={moto.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{moto.name}</h2>
                <p className="text-red-500 mb-4">{moto.year}</p>
                <p className="text-gray-400 mb-4 line-clamp-2">{moto.description}</p>
                <div className="flex items-center text-red-500 group-hover:text-red-400">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Models;