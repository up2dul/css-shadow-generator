import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RgbaStringColorPicker } from 'react-colorful';
import { changeColor } from '@/features/box-shadow/box-shadow-slice';

export const ColorPicker = () => {
  const { color: firstColor } = useSelector((state) => state.boxShadow);
  const [color, setColor] = useState(firstColor);
  const [isShowPicker, setIsShowPicker] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeColor({ newColor: color }))
  }, [color]);

  const togglePicker = () => setIsShowPicker(!isShowPicker);

  return (
    <div className='mt-6 relative'>
      <p>Shadow color</p>
      <div 
        className='p-2 w-24 border-solid border-4 border-custom-turquoise cursor-pointer'
        style={{ backgroundColor: color }}
        onClick={togglePicker}
      ></div>
      {isShowPicker && 
        <div className='absolute'>
          <RgbaStringColorPicker color={color} onChange={setColor} /> 
        </div>
      }
    </div>
  );
}
