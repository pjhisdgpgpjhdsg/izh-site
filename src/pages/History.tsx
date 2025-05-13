
const History = () => {
  const timeline = [
    {
      year: '1929',
      title: 'Початок виробництва',
      description: 'Перший радянський мотоцикл ІЖ-1 був створений під керівництвом П.В. Можарова.'
    },
    {
      year: '1948',
      title: 'Післявоєнне відродження',
      description: 'Відновлення виробництва мотоциклів після Другої світової війни.'
    },
    {
      year: '1961',
      title: 'Ера Юпітера',
      description: 'Випуск першого ІЖ Юпітер із двоциліндровим двигуном.'
    },
    {
      year: '1967',
      title: 'Модернізація',
      description: 'Початок виробництва модернізованих версій Планета-2 та Юпітер-2.'
    },
    {
      year: '1985',
      title: 'Пік виробництва',
      description: 'Випуск понад 350 000 мотоциклів на рік.'
    }
  ];

  return (
    <div className="py-12 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Історія ІЖ</h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500" />

          {/* Timeline events */}
          <div className="space-y-24">
            {timeline.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full" />
                
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <div className="bg-neutral-800 p-6 rounded-lg">
                      <span className="text-red-500 font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-4">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical photos */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Історичні Фотографії</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img 
              src="/moto/history-1.jpg"
              alt="Historical IZH"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="/moto/history-2.jpg"
              alt="Historical IZH"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="/moto/history-3.jpg"
              alt="Historical IZH"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;