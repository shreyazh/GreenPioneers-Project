import React, { useState } from 'react';
import { Car, Home, Plane, ShoppingBag } from 'lucide-react';

export default function CarbonCalculator() {
  const [formData, setFormData] = useState({
    transportation: '',
    homeEnergy: '',
    flights: '',
    consumption: ''
  });

  const calculateFootprint = () => {
    const transport = Number(formData.transportation) * 0.14; // kg CO2 per km
    const energy = Number(formData.homeEnergy) * 0.23; // kg CO2 per kWh
    const flight = Number(formData.flights) * 90; // kg CO2 per flight hour
    const consume = Number(formData.consumption) * 10; // kg CO2 per $100 spent
    return (transport + energy + flight + consume).toFixed(2);
  };

  return (
    <div className="font-mono">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        <Car className="inline" />
        Carbon Footprint Calculator
      </h2>
      
      <div className="space-y-6">
        <div className="grid gap-4 p-4 border-2 border-green-600 bg-green-900/50">
          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <Car size={16} />
              <span>Monthly car travel (km)</span>
            </div>
            <input
              type="number"
              value={formData.transportation}
              onChange={(e) => setFormData({...formData, transportation: e.target.value})}
              className="w-full px-3 py-2 bg-green-950 border border-green-600 text-green-100"
            />
          </label>

          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <Home size={16} />
              <span>Monthly electricity usage (kWh)</span>
            </div>
            <input
              type="number"
              value={formData.homeEnergy}
              onChange={(e) => setFormData({...formData, homeEnergy: e.target.value})}
              className="w-full px-3 py-2 bg-green-950 border border-green-600 text-green-100"
            />
          </label>

          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <Plane size={16} />
              <span>Flight hours (yearly)</span>
            </div>
            <input
              type="number"
              value={formData.flights}
              onChange={(e) => setFormData({...formData, flights: e.target.value})}
              className="w-full px-3 py-2 bg-green-950 border border-green-600 text-green-100"
            />
          </label>

          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag size={16} />
              <span>Monthly consumption ($)</span>
            </div>
            <input
              type="number"
              value={formData.consumption}
              onChange={(e) => setFormData({...formData, consumption: e.target.value})}
              className="w-full px-3 py-2 bg-green-950 border border-green-600 text-green-100"
            />
          </label>
        </div>

        <div className="p-4 border-2 border-green-600 bg-green-900/50">
          <h3 className="text-xl mb-4">Your Carbon Footprint</h3>
          <p className="text-4xl font-bold text-green-300">{calculateFootprint()} kg CO2/month</p>
        </div>
      </div>
    </div>
  );
}