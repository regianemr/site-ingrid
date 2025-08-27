import { Button } from "flowbite-react";
import perfil from "../assets/img-hero.png";

export function Hero () {
  return ( 
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen px-8 mx-auto lg:gap-6 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="m-8 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Curso Prático da Lei Maria da Penha</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Domine todas as técnicas necessárias para advogar na área da violência doméstica, tanto como defensor como assistente de acusação.</p>
          <div className="flex flex-wrap gap-2">
            <Button size="xl" className="md:justify-items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 rounded-full">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 mr-3 text-xs md:text-base font-medium text-center text-white rounded-lg">
                QUERO ADQUIRIR O CURSO
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={perfil}  alt="foto-advogada" className=""w-48 rounded-full mx-auto />
        </div>                
    </div>
</section> 
)
}