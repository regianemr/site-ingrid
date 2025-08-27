import { Button } from "flowbite-react";
import { CheckCircle } from "lucide-react";


export function CoursePricing() {
  return (
    <section id="preco" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Domine todas as técnicas necessárias para advogar com segurança na Lei Maria da Penha
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Aproveite todo o conteúdo do curso e tenha acesso completo às aulas, materiais e suporte.
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center border-2 border-pink-600 flex flex-col items-center">
            <span className="text-gray-500 text-sm">À vista</span>
            <h3 className="text-5xl font-bold text-pink-600 my-4">R$ 499,00</h3>
            <ul className="text-gray-700 mb-6 space-y-2 text-left text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Acesso completo a todos os módulos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Certificado digital reconhecido
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Grupo exclusivo de alunos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Material de apoio incluso
              </li>
            </ul>
            <Button color="pink" className="px-8 py-3 font-semibold mt-auto cursor-pointer">
              COMPRAR AGORA MESMO
            </Button>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center border-2 border-pink-600 flex flex-col items-center">
            <span className="text-gray-500 text-sm">Parcelado</span>
            <h3 className="text-5xl font-bold text-pink-600 my-4">3x de R$ 180,00</h3>
            <ul className="text-gray-700 mb-6 space-y-2 text-left text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Acesso completo a todos os módulos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Certificado digital reconhecido
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Grupo exclusivo de alunos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600" /> Material de apoio incluso
              </li>
            </ul>
            <Button color="pink" className="px-8 py-3 font-semibold mt-auto cursor-pointer">
              COMPRAR AGORA MESMO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
