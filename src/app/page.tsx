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

      {/* Karte zwischen Projekte und Social Media */}
      <div className="max-w-7xl mx-auto my-16">
        <ProjectMap />
      </div>

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
    </div>
  );
} 