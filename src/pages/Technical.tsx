import React from 'react';
import { PenTool as Tool, Settings, Gauge } from 'lucide-react';

const Technical = () => {
  const specifications = [
    {
      category: 'Двигун',
      icon: <Gauge className="h-6 w-6 text-red-500" />,
      details: [
        {
          title: 'Тип двигуна',
          description: 'Двотактний, одноциліндровий (Планета) / двоциліндровий (Юпітер)'
        },
        {
          title: 'Робочий обʼєм',
          description: '346-350 см³'
        },
        {
          title: 'Ступінь стиснення',
          description: '7.0-8.5:1'
        }
      ]
    },
    {
      category: 'Трансмісія',
      icon: <Settings className="h-6 w-6 text-red-500" />,
      details: [
        {
          title: 'Зчеплення',
          description: 'Багатодискове, в масляній ванні'
        },
        {
          title: 'Коробка передач',
          description: '4-ступенева, з ножним перемиканням'
        },
        {
          title: 'Головна передача',
          description: 'Ланцюгова, відкритого типу'
        }
      ]
    },
    {
      category: 'Ходова частина',
      icon: <Tool className="h-6 w-6 text-red-500" />,
      details: [
        {
          title: 'Рама',
          description: 'Трубчаста, закритого типу'
        },
        {
          title: 'Передня підвіска',
          description: 'Телескопічна вилка'
        },
        {
          title: 'Задня підвіска',
          description: 'Маятникова, з двома пружинно-гідравлічними амортизаторами'
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Технічна специфікація</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg">
              <div className="flex items-center mb-6">
                {spec.icon}
                <h2 className="text-2xl font-bold ml-3">{spec.category}</h2>
              </div>
              
              <div className="space-y-6">
                {spec.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
                    <p className="text-gray-300">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Поради з обслуговування */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Поради з обслуговування</h2>
          <div className="bg-neutral-800 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Регулярне обслуговування</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Перевірка рівня масла кожні 500 км</li>
                  <li>Регулювання карбюратора кожні 3000 км</li>
                  <li>Змащування ланцюга кожні 1000 км</li>
                  <li>Перевірка свічок запалювання кожні 2000 км</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Сезонне обслуговування</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Заміна масла в двигуні</li>
                  <li>Перевірка електропроводки</li>
                  <li>Регулювання підшипників коліс</li>
                  <li>Консервація при тривалому зберіганні</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technical;
