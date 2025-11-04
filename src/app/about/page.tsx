import { Briefcase, Award, Users } from 'lucide-react'

export const metadata = {
  title: 'À Propos - Ousseynou Diop',
  description: 'Découvrez le parcours et l\'expertise d\'Ousseynou Diop, CEO de Xarala et leader dans la transformation digitale africaine.',
}

export default function AboutPage() {
  const experiences = [
    {
      role: 'CEO',
      company: 'Xarala',
      period: 'Avril 2020 - Aujourd\'hui',
      location: 'Dakar, Région de Dakar, Sénégal',
      description: 'Obtenez de vraies compétences opérationnelles. Xarala c\'est un mot Wolof (langue sénégalaise) qui signifie "La technologie" est une plateforme d\'apprentissage en ligne qui offre des formations de qualités répondant au besoin du marché.',
      achievements: [
        'Création de Xarala, la plateforme EdTech de référence en Afrique de l\'Ouest',
        '12,000+ apprenants actifs',
        '87% de taux d\'insertion professionnelle',
        '600+ diplômés formés',
        '45+ entreprises partenaires',
      ],
    },
    {
      role: 'Software Technical Lead',
      company: 'ORYA TECHNOLOGIES',
      period: 'Juin 2022 - Aujourd\'hui',
      location: 'Sicap-Liberté, Région de Dakar, Sénégal',
      description: 'Direction et mentoring d\'une équipe de développeurs pour assurer l\'excellence technique.',
      achievements: [
        'Conception d\'architectures logicielles robustes et évolutives',
        'Collaboration avec les équipes produits',
        'Amélioration continue des processus de développement',
        'Adoption des meilleures pratiques de développement',
      ],
    },
    {
      role: 'Consultant Spécialiste',
      company: 'Freelance',
      period: 'Février 2016 - Aujourd\'hui',
      location: 'Indépendant',
      description: 'Accompagnement des entreprises, StartUP et particuliers dans leur processus de digitalisation.',
      achievements: [
        'Audit, conseil, aide aux décisions techniques',
        'Formation et coaching',
        'Développement et déploiement de solutions',
        'Support technique et suivi des mises à jour',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Gemography',
      period: 'Juin 2022 - Mars 2023',
      location: 'Région de Dakar, Sénégal',
      description: 'Développement et accompagnement des clients. Collaboration avec une entreprise française dans l\'immobilier.',
    },
  ]

  const certifications = [
    {
      name: 'goPMF - Founding Cohort',
      organization: 'goPMF',
      date: 'Janvier 2024',
    },
    {
      name: 'Professional Scrum Master (PSM)',
      organization: 'Scrum.org',
      date: 'Septembre 2023',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Moi</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            CEO de Xarala | Catalyseur de la Renaissance Numérique Africaine
          </p>
          <p className="text-lg text-blue-50">
            Leader visionnaire dans la technologie éducative et le développement des talents,
            je transforme le paysage numérique africain en ouvrant des opportunités uniques
            pour les individus et les entreprises.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ma Mission</h2>
            <p className="text-xl text-gray-700 mb-4">
              Construire une Afrique où chaque individu peut exploiter son potentiel
              grâce à une éducation de qualité et des opportunités numériques.
            </p>
            <p className="text-lg text-gray-600">
              Chez Xarala, nous croyons fortement que l\'apprentissage a le pouvoir de
              transformer nos vies pour nous-mêmes, pour nos familles, pour nos communautés.
              Il doit être accessible partout, pour tout le monde.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-blue-600 mb-2">12,000+</h3>
              <p className="text-gray-600">Apprenants actifs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-blue-600 mb-2">87%</h3>
              <p className="text-gray-600">Taux d\'insertion professionnelle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-blue-600 mb-2">45+</h3>
              <p className="text-gray-600">Entreprises partenaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Impact Panafricain Majeur
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-2xl mr-4 text-blue-600">✓</span>
              <p className="text-lg text-gray-700">
                Création de Xarala, la plateforme EdTech de référence en Afrique de l\'Ouest,
                avec 12,000+ apprenants actifs
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4 text-blue-600">✓</span>
              <p className="text-lg text-gray-700">
                Atteinte d\'un taux exceptionnel d\'insertion professionnelle de 87%
                pour nos 600+ diplômés
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4 text-blue-600">✓</span>
              <p className="text-lg text-gray-700">
                Développement de partenariats stratégiques avec 45+ entreprises leaders
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4 text-blue-600">✓</span>
              <p className="text-lg text-gray-700">
                Conception de programmes qui ont multiplié par 3-5x les revenus des diplômés
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4 text-blue-600">✓</span>
              <p className="text-lg text-gray-700">
                Construction d\'un écosystème panafricain favorisant l\'apprentissage
                numérique et l\'innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Expérience Professionnelle
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                {exp.location && (
                  <p className="text-gray-600 mb-3">{exp.location}</p>
                )}
                <p className="text-gray-700 mb-4">{exp.description}</p>
                {exp.achievements && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technologies & Compétences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-700">Figma, Adobe XD</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bases de Données</h3>
              <p className="text-gray-700">PostgreSQL, MongoDB, MySQL</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Développement Web</h3>
              <p className="text-gray-700">Python, Django, Javascript, Node.js, React.js, PHP, Laravel, GraphQL</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Développement Mobile</h3>
              <p className="text-gray-700">React Native, Flutter</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Outils</h3>
              <p className="text-gray-700">Visual Studio Code, NPM, PIP</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DevOps</h3>
              <p className="text-gray-700">Digital Ocean, GitLab, GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{cert.organization}</p>
                <p className="text-gray-600 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comment Nous Faisons la Différence
          </h2>

          <div className="space-y-6">
            <div className="flex items-start bg-blue-50 p-6 rounded-lg">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Bootcamps intensifs et 100% pratiques
                </h3>
                <p className="text-gray-700">
                  Conçus pour préparer les talents aux besoins du marché
                </p>
              </div>
            </div>
            <div className="flex items-start bg-blue-50 p-6 rounded-lg">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Transformation numérique des startups et PME africaines
                </h3>
                <p className="text-gray-700">
                  Pour booster leur performance et leur compétitivité
                </p>
              </div>
            </div>
            <div className="flex items-start bg-blue-50 p-6 rounded-lg">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Innovations pédagogiques centrées sur l\'impact
                </h3>
                <p className="text-gray-700">
                  Avec un focus sur la durabilité et les résultats mesurables
                </p>
              </div>
            </div>
            <div className="flex items-start bg-blue-50 p-6 rounded-lg">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Développement des compétences tech les plus recherchées
                </h3>
                <p className="text-gray-700">
                  Pour renforcer la compétitivité des talents africains
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
