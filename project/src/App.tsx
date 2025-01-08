import React, { useState } from 'react';
import { Calculator, Recycle, Leaf, ThermometerSun, Trees, FootprintsIcon } from 'lucide-react';
import CarbonCalculator from './components/CarbonCalculator';
import RecyclingGuide from './components/RecyclingGuide';
import SustainableLiving from './components/SustainableLiving';
import ClimateChange from './components/ClimateChange';
import Biodiversity from './components/Biodiversity';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  const tabs = [
    { id: 'calculator', icon: Calculator, label: 'Carbon Calculator' },
    { id: 'recycling', icon: Recycle, label: 'Recycling Guide' },
    { id: 'sustainable', icon: Leaf, label: 'Sustainable Living' },
    { id: 'climate', icon: ThermometerSun, label: 'Climate Change' },
    { id: 'biodiversity', icon: Trees, label: 'Biodiversity' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'calculator':
        return <CarbonCalculator />;
      case 'recycling':
        return <RecyclingGuide />;
      case 'sustainable':
        return <SustainableLiving />;
      case 'climate':
        return <ClimateChange />;
      case 'biodiversity':
        return <Biodiversity />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-green-900 text-green-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 border-4 border-green-500 p-6 bg-green-800">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FootprintsIcon size={32} />
            <h1 className="text-4xl font-bold font-mono">EcoRetro Guide</h1>
          </div>
          <p className="text-green-300 font-mono">Your Vintage-Style Guide to Modern Sustainability</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-sm border-2 transition-all
                ${activeTab === tab.id 
                  ? 'bg-green-700 border-green-400 text-green-100' 
                  : 'bg-green-800 border-green-600 text-green-300 hover:bg-green-700'}`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border-4 border-green-500 bg-green-800 p-6">
          <div className="prose prose-invert max-w-none">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;