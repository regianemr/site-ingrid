import imageAbout from '../assets/img-hero.png'

export function About () {
  return (
    <section className=" bg-gray-150 py-16 px-6 flex justify-center">
      <div className="max-w-6xl max-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img src={imageAbout} alt="" className="w-80 h-80 object-cover rounded-full shadow-lg border-1 border-gray-200"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ingrid Arcanjo | Especialista em Direito da mulher</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Olá! Eu sou <span className="font-semibold text-pink-600">Dra. Ingrid</span>, 
            advogada criminalista especializada na defesa e proteção de mulheres.
            Ao longo da minha trajetória, percebi a necessidade urgente de capacitar 
            outras mulheres com conhecimento jurídico prático e acessível.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Este curso foi criado com muito carinho e dedicação para 
            empoderar mulheres, oferecendo as ferramentas jurídicas e práticas
            necessárias para que você possa se proteger e ajudar outras mulheres.
          </p>
        </div>
      </div>
    </section>
  )
}