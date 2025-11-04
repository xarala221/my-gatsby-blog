import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Programmes de Consulting - Ousseynou Diop',
  description: 'Accélérez votre transformation digitale avec mes programmes de consulting personnalisés.',
}

const consultingPlans = [
  {
    name: 'Starter',
    price: '500,000',
    currency: 'FCFA',
    duration: '/mois',
    description: 'Idéal pour les startups et entrepreneurs qui démarrent leur transformation digitale',
    features: [
      'Audit digital initial complet',
      '2 sessions de consulting par mois (2h chacune)',
      'Support par email (48h de délai de réponse)',
      'Recommandations stratégiques personnalisées',
      'Définition de roadmap technologique',
      'Accès à la communauté Xarala',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Professional',
    price: '1,200,000',
    currency: 'FCFA',
    duration: '/mois',
    description: 'Pour les entreprises prêtes à accélérer leur croissance avec un accompagnement complet',
    features: [
      'Tout du plan Starter',
      '4 sessions de consulting par mois (2h chacune)',
      'Support prioritaire par email et WhatsApp (24h)',
      'Révision et optimisation des processus',
      'Formation de votre équipe technique',
      'Aide au recrutement tech',
      'Accompagnement sur la levée de fonds',
      'Accès prioritaire aux talents Xarala',
    ],
    cta: 'Passer au niveau supérieur',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    currency: '',
    duration: '',
    description: 'Solution personnalisée pour les grandes entreprises avec des besoins complexes',
    features: [
      'Tout du plan Professional',
      'Sessions de consulting illimitées',
      'Support 24/7 dédié',
      'Technical Lead dédié à votre projet',
      'Développement et implémentation de solutions',
      'Formation avancée et certification équipe',
      'Accompagnement stratégique C-level',
      'Transformation digitale complète',
      'Partenariat stratégique avec Xarala',
    ],
    cta: 'Discutons de vos besoins',
    popular: false,
  },
]

export default function ConsultingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Programmes de Consulting
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Accélérez votre transformation digitale avec un accompagnement personnalisé
            et une expertise éprouvée
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi choisir mon accompagnement ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fort de mon expérience en tant que CEO de Xarala et de mes réalisations
              avec plus de 12,000 apprenants et 45+ entreprises partenaires, je mets
              mon expertise au service de votre réussite digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Expertise Prouvée</h3>
              <p className="text-gray-600">
                87% de taux d'insertion professionnelle et des revenus multipliés par 3-5x
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Résultats Concrets</h3>
              <p className="text-gray-600">
                Méthodologie éprouvée avec 600+ diplômés formés et accompagnés
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Vision Panafricaine</h3>
              <p className="text-gray-600">
                Compréhension profonde du marché africain et de ses opportunités
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez le programme adapté à vos besoins
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions flexibles pour chaque étape de votre croissance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {consultingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg'
                } p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.currency && (
                      <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.currency}
                      </span>
                    )}
                    {plan.duration && (
                      <span className={`ml-1 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.duration}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check
                        className={`h-6 w-6 ${
                          plan.popular ? 'text-yellow-400' : 'text-blue-600'
                        } flex-shrink-0 mr-3`}
                      />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center flex items-center justify-center transition-all ${
                    plan.popular
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Je maîtrise les technologies les plus demandées du marché
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Frontend</h3>
              <p className="text-gray-600">React.js, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Backend</h3>
              <p className="text-gray-600">Python, Django, Node.js, GraphQL, Laravel</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Mobile</h3>
              <p className="text-gray-600">React Native, Flutter</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Databases</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB, MySQL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">DevOps</h3>
              <p className="text-gray-600">Digital Ocean, GitLab, GitHub, CI/CD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Design</h3>
              <p className="text-gray-600">Figma, Adobe XD, UI/UX</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Management</h3>
              <p className="text-gray-600">Scrum, Agile, Product Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">EdTech</h3>
              <p className="text-gray-600">Plateformes d'apprentissage, LMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre transformation ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-moi pour discuter de vos besoins et trouver la solution idéale pour votre entreprise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
          >
            Prendre rendez-vous
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
