'use client'

import { Mail, Linkedin, Globe, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData)
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Moi</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Discutons de votre projet et trouvons ensemble les solutions
            pour accélérer votre transformation digitale
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Restons Connectés
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Je suis toujours ouvert à de nouvelles collaborations et opportunités.
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                    <p className="text-gray-600">Dakar, Région de Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@xarala.co"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      contact@xarala.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/ousseynou-diop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      linkedin.com/in/ousseynou-diop
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website Xarala</h3>
                    <a
                      href="https://www.xarala.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      www.xarala.co
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-10 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Disponibilité</h3>
                <p className="text-gray-700 mb-4">
                  Je réponds généralement sous 24-48 heures. Pour les demandes urgentes,
                  contactez-moi directement via LinkedIn.
                </p>
                <p className="text-gray-700">
                  <strong>Horaires :</strong> Lundi - Vendredi, 9h00 - 18h00 (GMT)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-moi un Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les 45+ entreprises qui ont transformé leur business avec mon accompagnement.
          </p>
          <a
            href="https://www.xarala.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Découvrir Xarala
          </a>
        </div>
      </section>
    </div>
  )
}
