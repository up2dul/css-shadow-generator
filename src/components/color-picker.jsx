import React, { useEffect, useState } from 'react';
import { changeColor } from '@/features/box-shadow/box-shadow-slice';
import { useDispatch, useSelector } from 'react-redux';
import { RgbaStringColorPicker } from 'react-colorful';

export const ColorPicker = () => {
  const [color, setColor] = useState();
  const dispatch = useDispatch();
  const box = useSelector((state) => state.boxShadow);

  useEffect(() => {
    dispatch(changeColor({ newColor: color }));
    console.log('dari colorpicker:', box);
  }, [color]);

  return <RgbaStringColorPicker color={color} onChange={setColor} />
}
