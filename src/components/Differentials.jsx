import { Button, Card } from "flowbite-react";
import { BookOpen, ShieldCheck, Trophy, Users } from "lucide-react";

export function Differentials() {
  const items = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-pink-600" />,
      title: "Especialização em Defesa da Mulher",
      desc: "Curso focado em oferecer conhecimento jurídico com sensibilidade às questões de gênero.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      title: "Conteúdo Atualizado",
      desc: "Todo material baseado na Lei Maria da Penha e jurisprudência recente.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Comunidade Exclusiva",
      desc: "Troque experiências com advogadas e profissionais da área criminal.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-pink-600" />,
      title: "Certificação Reconhecida",
      desc: "Receba certificado válido para comprovar sua especialização.",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-12">
          Diferenciais do Curso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {items.map((item, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col items-center text-center space-y-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap justify-center p-12">
          <Button size="xl" className="p-8 flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 rounded-full">
            <a href="#" className="flex items-center justify-center px-8 p-8 mr-3 text-xs md:text-base font-medium text-center text-white rounded-lg">
              QUERO ADQUIRIR O CURSO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
