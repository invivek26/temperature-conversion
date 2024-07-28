// src/CelsiusToFahrenheit.tsx
import React, { useState } from 'react';

const CelsiusToFahrenheit: React.FC = () => {
  const [celsius, setCelsius] = useState<number | string>('');
  const [fahrenheit, setFahrenheit] = useState<number | string>('');

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCelsius(value);

    if (value === '') {
      setFahrenheit('');
    } else {
      const celsiusValue = parseFloat(value);
      setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2));
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
      <p>This is an improved UI.</p> 
    </div>
  );
};

export default CelsiusToFahrenheit;
