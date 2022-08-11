import React from 'react';
import { useSelector } from 'react-redux';

export const BoxDemo = () => {
  const { 
    inset,
    hOffset, 
    vOffset, 
    blur, 
    spread, 
    color 
  } = useSelector((state) => state.boxShadow);

  const codeResult = `${inset ? 'inset' : ''} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;

  return (
    <div 
      className='p-32 bg-custom-turquoise'
      style={{ boxShadow: codeResult }}
    >
    </div>
  );
}
