'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Project {
  id: number;
  name: string;
  description: string;
  coordinates: [number, number];
  type: string;
  status: string;
}

const ProjectMap = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([51.2277, 6.7735]); // Düsseldorf coordinates

  useEffect(() => {
    // In a real application, this would fetch from an API
    const dummyProjects: Project[] = [
      {
        id: 1,
        name: 'Blumenoase Flingern',
        description: 'Eine blühende Oase mitten im Stadtteil',
        coordinates: [51.2277, 6.7735],
        type: 'Blumenoase',
        status: 'Aktiv'
      },
      {
        id: 2,
        name: 'Urban Garden Bilk',
        description: 'Gemeinschaftsgarten mit Gemüsebeeten',
        coordinates: [51.2177, 6.7835],
        type: 'Urban Gardening',
        status: 'Aktiv'
      },
      // Add more projects as needed
    ];

    setProjects(dummyProjects);
  }, []);

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects.map((project) => (
          <Marker
            key={project.id}
            position={project.coordinates}
            icon={icon}
            eventHandlers={{
              click: () => setSelectedProject(project),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{project.type}</span>
                  <span>{project.status}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap; 