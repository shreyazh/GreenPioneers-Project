import React from 'react';
import { Recycle, Package, Newspaper, Wine } from 'lucide-react';

export default function RecyclingGuide() {
  const categories = [
    {
      icon: Package,
      title: 'Plastics',
      items: ['PET bottles', 'HDPE containers', 'PP containers'],
      tips: 'Rinse containers, remove caps, crush to save space'
    },
    {
      icon: Newspaper,
      title: 'Paper',
      items: ['Newspapers', 'Cardboard', 'Office paper'],
      tips: 'Keep dry, remove tape and staples'
    },
    {
      icon: Wine,
      title: 'Glass',
      items: ['Bottles', 'Jars', 'Containers'],
      tips: 'Rinse clean, separate by color'
    }
  ];

  return (
    <div className="font-mono">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <Recycle className="inline" />
        Recycling Guide
      </h2>

      <div className="grid gap-6">
        {categories.map((category, index) => (
          <div key={index} className="p-4 border-2 border-green-600 bg-green-900/50">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <category.icon size={20} />
              {category.title}
            </h3>
            
            <div className="mb-4">
              <h4 className="text-green-300 mb-2">Recyclable Items:</h4>
              <ul className="list-disc list-inside space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="text-green-300">
              <strong>Tips:</strong> {category.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}