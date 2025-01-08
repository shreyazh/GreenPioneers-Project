import React from 'react';
import { Leaf, Lightbulb, Droplets, ShoppingBag } from 'lucide-react';

export default function SustainableLiving() {
  const tips = [
    {
      icon: Lightbulb,
      title: 'Energy Efficiency',
      practices: [
        'Use LED bulbs',
        'Install a programmable thermostat',
        'Unplug unused electronics',
        'Use natural light when possible'
      ]
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      practices: [
        'Fix leaky faucets',
        'Install low-flow showerheads',
        'Collect rainwater for plants',
        'Take shorter showers'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Sustainable Shopping',
      practices: [
        'Buy local products',
        'Choose reusable bags',
        'Support eco-friendly brands',
        'Avoid single-use plastics'
      ]
    }
  ];

  return (
    <div className="font-mono">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <Leaf className="inline" />
        Sustainable Living Tips
      </h2>

      <div className="grid gap-6">
        {tips.map((section, index) => (
          <div key={index} className="p-4 border-2 border-green-600 bg-green-900/50">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <section.icon size={20} />
              {section.title}
            </h3>
            
            <ul className="space-y-2">
              {section.practices.map((practice, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-300">→</span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}