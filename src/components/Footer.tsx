import Link from 'next/link'
import { Linkedin, Mail, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ousseynou Diop</h3>
            <p className="text-gray-400 mb-4">
              CEO de Xarala - Catalyseur de la Renaissance Numérique Africaine
            </p>
            <p className="text-gray-400">
              Construire une Afrique où chaque individu peut exploiter son potentiel
              grâce à une éducation de qualité et des opportunités numériques.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-400 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/ousseynou-diop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.xarala.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Xarala
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Ousseynou Diop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
