import React from 'react';
import { ThermometerSun, CloudRain, Wind, AlertTriangle } from 'lucide-react';

export default function ClimateChange() {
  return (
    <div className="font-mono">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <ThermometerSun className="inline" />
        Climate Change Education
      </h2>

      <div className="space-y-6">
        <div className="p-4 border-2 border-green-600 bg-green-900/50">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Key Issues
          </h3>
          <ul className="space-y-2">
            <li>Global temperature rise</li>
            <li>Rising sea levels</li>
            <li>Extreme weather events</li>
            <li>Ocean acidification</li>
          </ul>
        </div>

        <div className="p-4 border-2 border-green-600 bg-green-900/50">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <CloudRain size={20} />
            Impact on Ecosystems
          </h3>
          <ul className="space-y-2">
            <li>Coral reef bleaching</li>
            <li>Forest degradation</li>
            <li>Species extinction</li>
            <li>Habitat loss</li>
          </ul>
        </div>

        <div className="p-4 border-2 border-green-600 bg-green-900/50">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Wind size={20} />
            Solutions
          </h3>
          <ul className="space-y-2">
            <li>Renewable energy adoption</li>
            <li>Sustainable transportation</li>
            <li>Forest conservation</li>
            <li>Reduced consumption</li>
          </ul>
        </div>
      </div>
    </div>
  );
}