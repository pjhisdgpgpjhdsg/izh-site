import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { motorcycleData } from '../data/motorcycles';
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const Home = () => {
 

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-[url('/izh5.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#000000a1] bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Мотоцикли ІЖ</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Легендарні радянські мотоцикли, втілення потужності і надійності
              </p>
              <Link
                to="/models"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Переглянути моделі
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Models */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Популярні моделі
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {motorcycleData.map((model, index) => (
              <motion.div
              key={model.id}
              className="group will-change-transform relative bg-neutral-800 rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay with button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to={`/models/${model.id}`}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center"
                    >
                      Детальніше
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <span className="text-red-500 text-sm">{model.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Спадщина ІЖ</h2>
              <p className="text-gray-300 mb-6">
                Історія мотоциклів ІЖ почалася в 1929 році. За більш ніж 80 років було випущено безліч моделей, які стали легендами радянського і російського мотопрому.
              </p>
              <Link
                to="/history"
                className="inline-flex items-center text-red-500 hover:text-red-400 group"
              >
                Дізнатись більше
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <img
                src="/moto/izh.jpg"
                alt="ИЖ Heritage"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
