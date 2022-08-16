import React from 'react';
import { useSelector } from 'react-redux';

export const TextDemo = () => {
  const { hOffset, vOffset, blur, color } = useSelector((state) => state.textShadow);

  const codeResult = `${hOffset}px ${vOffset}px ${blur}px ${color}`;

  return (
    <h1
      className='my-6 text-primary dark:text-light text-center text-6xl md:text-7xl xl:text-8xl font-bold'
      style={{ textShadow: codeResult }}
    >
      preview text
    </h1>
  );
}
