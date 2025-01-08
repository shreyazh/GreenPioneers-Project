import React from 'react';
import { Trees, Fish, Bird, Bug } from 'lucide-react';

export default function Biodiversity() {
  const ecosystems = [
    {
      icon: Trees,
      name: 'Forests',
      description: 'Home to 80% of the world\'s terrestrial biodiversity',
      species: ['Tigers', 'Orangutans', 'Toucans'],
      threats: ['Deforestation', 'Climate change', 'Poaching']
    },
    {
      icon: Fish,
      name: 'Oceans',
      description: 'Contains 94% of Earth\'s living species',
      species: ['Whales', 'Coral reefs', 'Sea turtles'],
      threats: ['Overfishing', 'Pollution', 'Ocean acidification']
    },
    {
      icon: Bug,
      name: 'Insects',
      description: 'Essential pollinators and decomposers',
      species: ['Bees', 'Butterflies', 'Beetles'],
      threats: ['Pesticides', 'Habitat loss', 'Climate change']
    }
  ];

  return (
    <div className="font-mono">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <Bird className="inline" />
        Biodiversity Guide
      </h2>

      <div className="grid gap-6">
        {ecosystems.map((eco, index) => (
          <div key={index} className="p-4 border-2 border-green-600 bg-green-900/50">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <eco.icon size={20} />
              {eco.name}
            </h3>
            
            <p className="mb-4 text-green-300">{eco.description}</p>
            
            <div className="mb-4">
              <h4 className="text-green-300 mb-2">Key Species:</h4>
              <ul className="list-disc list-inside">
                {eco.species.map((species, idx) => (
                  <li key={idx}>{species}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-green-300 mb-2">Main Threats:</h4>
              <ul className="list-disc list-inside">
                {eco.threats.map((threat, idx) => (
                  <li key={idx}>{threat}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}