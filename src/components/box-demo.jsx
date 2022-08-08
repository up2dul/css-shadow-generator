import React from 'react';
import { useSelector } from 'react-redux';

export const BoxDemo = () => {
  const { 
    hOffset, 
    vOffset, 
    blur, 
    spread, 
    color 
  } = useSelector((state) => state.boxShadow);

  const boxShadowResult = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;

  return (
    <div 
      className='p-32 bg-custom-turquoise rounded-md'
      style={{
        boxShadow: boxShadowResult
      }}
    >
    </div>
  );
}
