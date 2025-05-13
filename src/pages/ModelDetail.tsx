import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Wine as Engine, Gauge, Weight, Ruler } from 'lucide-react';
import { motorcycleData } from '../data/motorcycles';

const ModelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const motorcycle = motorcycleData.find(m => m.id === id);
  const [currentImg, setCurrentImg] = React.useState(motorcycle?.image)

  if (!motorcycle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Модель не найдена</h2>
          <button
            onClick={() => navigate('/models')}
            className="text-red-500 hover:text-red-400 flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Вернуться к списку моделей
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/models')}
          className="text-red-500 hover:text-red-400 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Вернуться к списку моделей
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img 
                  src={currentImg} 
                  alt={motorcycle.name}
                
                  className="h-[422px] w-full object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {motorcycle.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${motorcycle.name} gallery ${index + 1}`}
                    onClick={() => setCurrentImg(img)}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{motorcycle.name}</h1>
            <p className="text-red-500 text-xl mb-6">{motorcycle.year}</p>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                {motorcycle.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50">
                <Engine className="h-6 w-6 text-red-500 mb-2" />
                <p className="text-sm text-gray-400">Двигатель</p>
                <p className="font-semibold">{motorcycle.specs.engine}</p>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50">
                <Gauge className="h-6 w-6 text-red-500 mb-2" />
                <p className="text-sm text-gray-400">Мощность</p>
                <p className="font-semibold">{motorcycle.specs.power}</p>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50">
                <Weight className="h-6 w-6 text-red-500 mb-2" />
                <p className="text-sm text-gray-400">Вес</p>
                <p className="font-semibold">{motorcycle.specs.weight}</p>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50">
                <Ruler className="h-6 w-6 text-red-500 mb-2" />
                <p className="text-sm text-gray-400">Скорость</p>
                <p className="font-semibold">{motorcycle.specs.speed}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Технические характеристики</h2>
              <div className="space-y-4">
                {Object.entries(motorcycle.fullSpecs).map(([key, value]) => (
                  <div key={key} className="flex border-b border-neutral-700/50 pb-4">
                    <span className="text-gray-400 w-1/3">{key}</span>
                    <span className="w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelDetail;