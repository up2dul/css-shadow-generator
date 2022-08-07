import React, { useState } from 'react';

export const Slider = ({ name, sliderValue, unit, onSliderChange }) => {
  const [inputValue, setInputValue] = useState(sliderValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onSliderChange(sliderValue);
  }

  return (
    <div>
      <div className='flex justify-between'>
        <label>{name} ({unit})</label>
        <input
          type='number'
          min='-100'
          max='100'
          className='w-16 px-1 ml-5 border-solid border-2 border-custom-turquoise rounded-md'
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <input
        type='range'
        min='-100'
        max='100'
        className='block w-full mt-1'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
