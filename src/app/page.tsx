'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectMap from '@/components/ProjectMap';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Grüne Stadt Düsseldorf"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gemeinsam für ein grüneres Düsseldorf
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Wir gestalten die Zukunft unserer Stadt - nachhaltig, grün und lebenswert
          </p>
          <Link
            href="/mitmachen"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Jetzt mitmachen
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project1.jpg"
                  alt="Projekt 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blumenoase</h3>
                <p className="text-gray-600 mb-4">
                  Ein blühendes Paradies mitten in der Stadt - unsere erste Blumenoase.
                </p>
                <Link
                  href="/projekte/blumenoase"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project2.jpg"
                  alt="Projekt 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Urban Gardening</h3>
                <p className="text-gray-600 mb-4">
                  Gemeinsam gärtnern und ernten in der Stadt.
                </p>
                <Link
                  href="/projekte/urban-gardening"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project3.jpg"
                  alt="Projekt 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Baumpatenschaften</h3>
                <p className="text-gray-600 mb-4">
                  Übernehmen Sie Verantwortung für einen Stadtbaum.
                </p>
                <Link
                  href="/projekte/baumpatenschaften"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Werden Sie Teil unserer Bewegung</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Gemeinsam können wir Düsseldorf grüner und lebenswerter gestalten. 
            Jeder Beitrag zählt!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mitmachen"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Mitmachen
            </Link>
            <Link
              href="/spenden"
              className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-8 rounded-full text-lg transition-colors border-2 border-green-600"
            >
              Spenden
            </Link>
          </div>
        </div>
      </section>

      {/* Karte nach Call to Action */}
      <div className="max-w-7xl mx-auto my-16">
        <ProjectMap />
      </div>

      {/* Social Media */}
      <section id="socialmedia" className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Social Media</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Folgen Sie uns auf Social Media und bleiben Sie auf dem Laufenden
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Post */}
            <div className="social-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" alt="Instagram Post" className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fab fa-instagram text-3xl" style={{ color: '#E1306C' }}></i>
                  <span className="ml-2 text-lg font-semibold">Instagram</span>
                </div>
                <p className="text-gray-600 mb-4">Unser neues Urban Gardening Projekt nimmt Form an! 🌱</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Vor 2 Stunden</span>
                  <a href="#" className="text-green-600 hover:text-green-700">Mehr anzeigen →</a>
                </div>
              </div>
            </div>
            {/* Facebook Post */}
            <div className="social-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" alt="Facebook Post" className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fab fa-facebook text-3xl" style={{ color: '#4267B2' }}></i>
                  <span className="ml-2 text-lg font-semibold">Facebook</span>
                </div>
                <p className="text-gray-600 mb-4">Gemeinsam haben wir heute 50 neue Bäume gepflanzt! 🌳</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Vor 1 Tag</span>
                  <a href="#" className="text-green-600 hover:text-green-700">Mehr anzeigen →</a>
                </div>
              </div>
            </div>
            {/* LinkedIn Post */}
            <div className="social-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8" alt="LinkedIn Post" className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fab fa-linkedin text-3xl" style={{ color: '#0077B5' }}></i>
                  <span className="ml-2 text-lg font-semibold">LinkedIn</span>
                </div>
                <p className="text-gray-600 mb-4">Bleiben Sie mit uns auf LinkedIn vernetzt!</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Aktuell</span>
                  <a href="#" className="text-green-600 hover:text-green-700">Mehr anzeigen →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Aktuelle Blog-Beiträge</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Neuigkeiten, Tipps und Geschichten aus unserer grünen Community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="blog-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Blog Post" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">15. März 2024</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-green-600">Urban Gardening</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Urban Gardening: So starten Sie Ihren eigenen Stadtgarten</h3>
                <p className="text-gray-600 mb-4">Praktische Tipps und Tricks für erfolgreiches Gärtnern in der Stadt.</p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">Weiterlesen →</a>
              </div>
            </article>
            {/* Blog Post 2 */}
            <article className="blog-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="Blog Post" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">10. März 2024</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-green-600">Baumpatenschaften</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Baumpatenschaften: Wie Sie helfen können</h3>
                <p className="text-gray-600 mb-4">Erfahren Sie, wie Sie eine Patenschaft für einen Stadtbaum übernehmen können.</p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">Weiterlesen →</a>
              </div>
            </article>
            {/* Blog Post 3 */}
            <article className="blog-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8" alt="Blog Post" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">5. März 2024</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-green-600">Community</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Unsere Community wächst: Neue Mitglieder und Projekte</h3>
                <p className="text-gray-600 mb-4">Ein Rückblick auf unsere neuesten Projekte und Erfolge.</p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">Weiterlesen →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Über uns</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg font-semibold text-green-800">Unsere Stadt-Aktion "platzgrün!"</p>
                  <p>Platz für Grün zu schaffen ist das Ziel unseres Projektes. Wir engagieren uns seit 2019 dafür, dass die Quartiere grüner, klimafreundlicher und kommunikativer werden und sind mittlerweile an über 80 Standorten aktiv. Unser Engagement wurde in 2023 mit dem Umweltpreis der Stadt Düsseldorf und 2024 mit dem "Gisela und Dieter Schnelle-Preis" honoriert.</p>
                  <p>Überall in der Stadt gibt es Orte, wo sich Menschen treffen, ausruhen, austauschen, ihren Gedanken nachhängen oder die frische Luft genießen.</p>
                  <p>Doch viele dieser Orte sind alles andere als einladend; sie wirken vernachlässigt, sind oft vermüllt und große Teile sind versiegelt. Wir wollen das mit Ihnen gemeinsam ändern und zusammen anpacken.</p>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <p className="text-green-800 font-medium">Sie kennen einen Ort in Ihrem Quartier, der mehr Grün verdient hätte und Sie sind bereit sich zu engagieren? Sie haben bereits ein kleines Team aktiviert?</p>
                    <p className="text-green-800 font-medium mt-2">Dann helfen wir Ihnen bei den Vorbereitungen, den Planungen und der Ämterbeteiligung.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <i className="fas fa-calendar-check text-green-600"></i>
                  <span className="text-sm text-green-800">Seit 2019 aktiv</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <i className="fas fa-map-marker-alt text-green-600"></i>
                  <span className="text-sm text-green-800">80+ Standorte</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <i className="fas fa-award text-green-600"></i>
                  <span className="text-sm text-green-800">2 Auszeichnungen</span>
                </div>
              </div>
            </div>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8" alt="Grüne Oase in der Stadt" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Urban Gardening Projekt" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" alt="Gemeinschaftliches Gärtnern" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="Städtische Grünfläche" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Kontaktieren Sie uns</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Haben Sie Fragen oder möchten Sie mitmachen? Wir freuen uns auf Ihre Nachricht!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="contact-form space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md" required></textarea>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors w-full">Absenden</button>
              </form>
            </div>
            {/* Schnellkontakt */}
            <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Schnellkontakt</h3>
              <div className="flex gap-4">
                <a href="tel:0211466161" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="mailto:platzgruen@pro-duesseldorf.de" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://wa.me/49123456789" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-24 px-4 bg-green-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bilder zum Download</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hier finden Sie Bilder, die Sie für Hinweise bei Ihren Pflanzaktionen nutzen können.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Download Image 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <img src="image.jpg" alt="Downloadbares Bild 1" className="w-full h-48 object-cover mb-4 rounded-md" />
              <a href="image.jpg" download className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
                Download
              </a>
            </div>
            {/* Download Image 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <img src="image (1).jpg" alt="Downloadbares Bild 2" className="w-full h-48 object-cover mb-4 rounded-md" />
              <a href="image (1).jpg" download className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
                Download
              </a>
            </div>
            {/* Download Image 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <img src="image (2).jpg" alt="Downloadbares Bild 3" className="w-full h-48 object-cover mb-4 rounded-md" />
              <a href="image (2).jpg" download className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Unterstützer */}
      <section id="partner" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Unsere Partner & Unterstützer</h2>
          <p className="text-xl text-gray-600 mb-12">
            Gemeinsam gestalten wir grüne Oasen in Düsseldorf. Vielen Dank an unsere Partner, Sponsoren und Unterstützer!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {/* Partner Logos */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <img src="L_LHD_solo_cyan.jpeg" alt="Logo Landeseshauptstadt Düsseldorf" className="mx-auto max-h-20" />
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <img src="DPL-Logo_alle-Medien_Web.png" alt="Logo Deutsche Postcode Lotterie" className="mx-auto max-h-20" />
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <img src="https://via.placeholder.com/150x80?text=Partner+Logo+3" alt="Partner Logo 3" className="mx-auto max-h-20" />
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <img src="https://via.placeholder.com/150x80?text=Partner+Logo+4" alt="Partner Logo 4" className="mx-auto max-h-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 