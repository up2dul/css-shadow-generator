import React from 'react';
import { useSelector } from 'react-redux';

export const TextDemo = () => {
  const { hOffset, vOffset, blur, color } = useSelector((state) => state.textShadow);

  const codeResult = `${hOffset}px ${vOffset}px ${blur}px ${color}`;

  return (
    <h1
      className='text-custom-turquoise text-8xl font-bold'
      style={{ textShadow: codeResult }}
    >
      preview text
    </h1>
  );
}
