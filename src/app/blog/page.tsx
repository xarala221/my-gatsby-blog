import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog - Ousseynou Diop',
  description: 'Articles sur la transformation digitale, l\'EdTech, et le développement en Afrique',
}

// This would be fetched from Payload CMS in production
// For now, we'll use placeholder data
const posts = [
  {
    slug: 'transformation-digitale-afrique',
    title: 'L\'avenir de la Transformation Digitale en Afrique',
    excerpt: 'Découvrez comment la transformation digitale révolutionne le paysage économique africain et crée des opportunités sans précédent pour les entrepreneurs.',
    author: 'Ousseynou Diop',
    publishedDate: '2024-10-15',
    tags: ['Digital', 'Afrique', 'Innovation'],
  },
  {
    slug: 'reussir-bootcamp-tech',
    title: 'Comment Réussir son Bootcamp Tech',
    excerpt: 'Les clés du succès pour maximiser votre apprentissage et garantir votre insertion professionnelle après un bootcamp de développement.',
    author: 'Ousseynou Diop',
    publishedDate: '2024-10-10',
    tags: ['Formation', 'Carrière', 'Tech'],
  },
  {
    slug: 'edtech-revolution-africaine',
    title: 'EdTech : La Révolution de l\'Éducation en Afrique',
    excerpt: 'Comment les technologies éducatives transforment l\'accès à l\'éducation de qualité et créent de nouvelles opportunités pour la jeunesse africaine.',
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

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Mes réflexions sur la transformation digitale, l'EdTech,
            et le développement en Afrique
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Aucun article pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.publishedDate)}</span>
                      <User className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.author}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Restez Informé
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Suivez-moi sur LinkedIn pour ne rien manquer de mes derniers articles
            et insights sur la transformation digitale en Afrique.
          </p>
          <a
            href="https://www.linkedin.com/in/ousseynou-diop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Suivez-moi sur LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
