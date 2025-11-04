import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would be fetched from Payload CMS in production
const posts = [
  {
    slug: 'transformation-digitale-afrique',
    title: 'L\'avenir de la Transformation Digitale en Afrique',
    excerpt: 'Découvrez comment la transformation digitale révolutionne le paysage économique africain et crée des opportunités sans précédent pour les entrepreneurs.',
    content: `
      <h2>Une Révolution en Marche</h2>
      <p>L'Afrique connaît actuellement une transformation digitale sans précédent. Avec plus de 500 millions d'utilisateurs d'Internet et une adoption croissante des smartphones, le continent est prêt à sauter des étapes de développement traditionnelles.</p>

      <h2>Les Opportunités</h2>
      <p>Cette transformation crée des opportunités massives dans plusieurs secteurs :</p>
      <ul>
        <li><strong>FinTech :</strong> Les solutions de paiement mobile transforment l'inclusion financière</li>
        <li><strong>EdTech :</strong> L'éducation devient accessible à tous grâce aux plateformes d'apprentissage en ligne</li>
        <li><strong>E-commerce :</strong> Les plateformes de vente en ligne connectent producteurs et consommateurs</li>
        <li><strong>HealthTech :</strong> La télémédecine améliore l'accès aux soins de santé</li>
      </ul>

      <h2>Le Rôle de l'Éducation</h2>
      <p>Chez Xarala, nous croyons que l'éducation est la clé pour libérer ce potentiel. C'est pourquoi nous formons des milliers de jeunes africains aux compétences digitales les plus recherchées.</p>

      <h2>L'Avenir</h2>
      <p>Les prochaines années seront décisives. Les entrepreneurs africains ont l'opportunité unique de créer des solutions adaptées aux besoins locaux tout en ayant un impact global.</p>

      <p>Ensemble, nous construisons l'Afrique digitale de demain.</p>
    `,
    author: 'Ousseynou Diop',
    publishedDate: '2024-10-15',
    tags: ['Digital', 'Afrique', 'Innovation'],
  },
  {
    slug: 'reussir-bootcamp-tech',
    title: 'Comment Réussir son Bootcamp Tech',
    excerpt: 'Les clés du succès pour maximiser votre apprentissage et garantir votre insertion professionnelle après un bootcamp de développement.',
    content: `
      <h2>Pourquoi un Bootcamp ?</h2>
      <p>Les bootcamps tech sont devenus la voie rapide vers une carrière dans le développement. En 12 semaines intensives, vous pouvez acquérir les compétences nécessaires pour décrocher votre premier emploi tech.</p>

      <h2>Les Clés du Succès</h2>
      <h3>1. Engagement Total</h3>
      <p>Un bootcamp demande un engagement à temps plein. Soyez prêt à consacrer 10-12 heures par jour à votre apprentissage.</p>

      <h3>2. Pratique Constante</h3>
      <p>La théorie est importante, mais c'est la pratique qui fait la différence. Codez tous les jours, même le weekend.</p>

      <h3>3. Réseau</h3>
      <p>Construisez des relations avec vos camarades, vos mentors et l'écosystème tech. Ces connexions seront précieuses pour votre carrière.</p>

      <h3>4. Projets Personnels</h3>
      <p>Au-delà des projets du bootcamp, créez vos propres applications. C'est ce qui vous distinguera lors des entretiens.</p>

      <h2>Après le Bootcamp</h2>
      <p>La vraie aventure commence après le bootcamp. Continuez à apprendre, contribuez à l'open source, et n'ayez pas peur de postuler.</p>

      <p>Chez Xarala, 87% de nos diplômés trouvent un emploi dans les 3 mois. Ce succès vient de leur engagement et de notre méthodologie éprouvée.</p>
    `,
    author: 'Ousseynou Diop',
    publishedDate: '2024-10-10',
    tags: ['Formation', 'Carrière', 'Tech'],
  },
  {
    slug: 'edtech-revolution-africaine',
    title: 'EdTech : La Révolution de l\'Éducation en Afrique',
    excerpt: 'Comment les technologies éducatives transforment l\'accès à l\'éducation de qualité et créent de nouvelles opportunités pour la jeunesse africaine.',
    content: `
      <h2>L'EdTech en Afrique</h2>
      <p>L'Afrique a longtemps fait face à des défis éducatifs majeurs : manque d'infrastructures, classes surchargées, et accès limité aux enseignants qualifiés. L'EdTech change la donne.</p>

      <h2>Impact de l'EdTech</h2>
      <h3>Accessibilité</h3>
      <p>Avec un smartphone et une connexion Internet, n'importe qui peut accéder à une éducation de qualité mondiale. Les barrières géographiques tombent.</p>

      <h3>Personnalisation</h3>
      <p>Les plateformes d'apprentissage adaptatives permettent à chaque étudiant d'apprendre à son rythme, selon ses forces et faiblesses.</p>

      <h3>Pertinence</h3>
      <p>Contrairement aux curriculums traditionnels qui peuvent être dépassés, l'EdTech permet de former aux compétences actuellement recherchées par le marché.</p>

      <h2>Le Cas Xarala</h2>
      <p>Chez Xarala, nous avons formé 12,000+ apprenants avec un taux d'insertion professionnelle de 87%. Notre secret ?</p>
      <ul>
        <li>Formations 100% pratiques</li>
        <li>Mentors expérimentés et passionnés</li>
        <li>Contenu aligné avec les besoins du marché</li>
        <li>Accompagnement vers l'emploi</li>
      </ul>

      <h2>L'Avenir</h2>
      <p>L'EdTech n'en est qu'à ses débuts en Afrique. Les opportunités sont immenses pour ceux qui osent innover et mettre l'apprenant au centre.</p>

      <p>Ensemble, nous construisons l'avenir de l'éducation en Afrique.</p>
    `,
    author: 'Ousseynou Diop',
    publishedDate: '2024-10-05',
    tags: ['EdTech', 'Éducation', 'Innovation'],
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${post.title} - Blog Ousseynou Diop`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">{formatDate(post.publishedDate)}</span>
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                À propos de l'auteur
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Ousseynou Diop</strong> est le CEO de Xarala, la plateforme EdTech
                de référence en Afrique de l'Ouest. Leader visionnaire dans la transformation
                digitale africaine, il a accompagné plus de 12,000 apprenants dans leur
                parcours vers l'excellence tech.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  En savoir plus
                </Link>
                <a
                  href="https://www.linkedin.com/in/ousseynou-diop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts / CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Intéressé par une transformation digitale ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez mes programmes de consulting personnalisés
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </div>
  )
}
