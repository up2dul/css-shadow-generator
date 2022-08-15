import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue as setBox } from '@/features/box-shadow/box-shadow-slice';
import { changeValue as setText } from '@/features/text-shadow/text-shadow-slice';

export const Slider = ({ shadowType, name, text, sliderValue }) => {
  const [inputValue, setInputValue] = useState(sliderValue);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (shadowType === 'box') dispatch(setBox({ name, newValue: inputValue }))
    else if (shadowType === 'text') dispatch(setText({ name, newValue: inputValue }));
  }, [inputValue]);

  const handleInput = ({ target }) => setInputValue(target.value);

  return (
    <div>
      <div className='flex justify-between'>
        <label>{text} (px)</label>
        <input
          type='number'
          min={name === 'blur' ? '0' : '-100'}
          max='100'
          className='w-16 py-0 px-1 ml-5 border-solid border-2 border-primary rounded-md'
          value={inputValue}
          onInput={handleInput}
        />
      </div>
      <input
        type='range'
        min={name === 'blur' ? '0' : '-100'}
        max='100'
        className='block w-full mt-1 cursor-pointer'
        value={inputValue}
        onInput={handleInput}
      />
    </div>
  );
}
