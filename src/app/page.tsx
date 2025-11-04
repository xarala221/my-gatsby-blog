import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ousseynou Diop
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              CEO de Xarala | Catalyseur de la Renaissance Numérique Africaine
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-50">
              Leader visionnaire dans la technologie éducative et le développement des talents,
              je transforme le paysage numérique africain en ouvrant des opportunités uniques
              pour les individus et les entreprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consulting"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                Découvrir mes services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors"
              >
                Lire le blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact Panafricain Majeur
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets qui transforment des vies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12,000+</div>
              <div className="text-gray-600">Apprenants actifs</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-gray-600">Taux d'insertion professionnelle</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">600+</div>
              <div className="text-gray-600">Diplômés formés</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Entreprises partenaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ma Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Construire une Afrique où chaque individu peut exploiter son potentiel
                grâce à une éducation de qualité et des opportunités numériques.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Chez Xarala, nous croyons fortement que l'apprentissage a le pouvoir de
                transformer nos vies pour nous-mêmes, pour nos familles, et pour nos communautés.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                En savoir plus sur mon parcours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ce qui nous distingue</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Bootcamps intensifs et 100% pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Transformation numérique des startups et PME africaines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Innovations pédagogiques centrées sur l'impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Développement des compétences tech les plus recherchées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre parcours digital ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez mes programmes de consulting personnalisés pour accélérer votre croissance.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
          >
            Voir les programmes de consulting
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
