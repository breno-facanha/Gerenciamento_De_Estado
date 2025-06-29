import { useState } from "react";

const slides = [
  {
    id: 1,
    content: (
      <section className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-4xl font-bold mb-4 text-purple-700">Bem-vindo à Aula</h1>
        <p className="text-lg text-gray-700">Este é o primeiro slide. Adicione seu conteúdo aqui.</p>
      </section>
    ),
  },
  {
    id: 2,
    content: (
      <section className="flex flex-col items-center justify-center h-full w-full">
        <h2 className="text-3xl font-semibold mb-2 text-purple-600">Segundo Slide</h2>
        <ul className="list-disc text-lg text-gray-700">
          <li>Você pode adicionar listas</li>
          <li>Imagens, códigos, etc.</li>
        </ul>
      </section>
    ),
  },
  // Adicione mais slides seguindo este padrão
];

export default function ClassroomSlide() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  const prevSlide = () => setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          {slides[current].content}
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="px-4 py-2 bg-purple-200 text-purple-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={nextSlide}
          disabled={current === slides.length - 1}
          className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
      <div className="absolute top-4 right-8 text-gray-400 text-sm">
        Slide {current + 1} / {slides.length}
      </div>
    </div>
  );
}