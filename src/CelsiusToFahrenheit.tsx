// src/CelsiusToFahrenheit.tsx
import React, { useState } from 'react';

const CelsiusToFahrenheit: React.FC = () => {
  const [celsius, setCelsius] = useState<number | string>('');
  const [fahrenheit, setFahrenheit] = useState<number | string>('');
  const [kelvin, setKelvin] = useState<number | string>(''); // Added line

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCelsius(value);

    if (value === '') {
      setFahrenheit('');
      setKelvin(''); // Added line
    } else {
      const celsiusValue = parseFloat(value);
      setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2));
      setKelvin((celsiusValue + 273.15).toFixed(2)); // Added line
    }
  };

  return (
    <div>
      <h1>Celsius to Fahrenheit Converter</h1>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Enter Celsius"
      />
      <p>Fahrenheit: {fahrenheit}</p>
      <p>Kelvin: {kelvin}</p> {/* Added line */}
    </div>
  );
};

export default CelsiusToFahrenheit;
