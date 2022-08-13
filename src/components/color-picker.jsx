import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RgbaStringColorPicker } from 'react-colorful';
import { changeColor as setBoxColor } from '@/features/box-shadow/box-shadow-slice';
import { changeColor as setTextColor } from '@/features/text-shadow/text-shadow-slice';

export const ColorPicker = ({ shadowType }) => {
  const { color: initBoxColor } = useSelector((state) => state.boxShadow);
  const { color: initTextColor } = useSelector((state) => state.textShadow);
  const initColor = shadowType === 'box' ? initBoxColor : initTextColor;
  const [color, setColor] = useState(initColor);
  const [isShowPicker, setIsShowPicker] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (shadowType === 'box') dispatch(setBoxColor({ newColor: color }))
    else if (shadowType === 'text') dispatch(setTextColor({ newColor: color }));
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
