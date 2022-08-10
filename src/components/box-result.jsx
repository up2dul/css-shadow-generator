import React from 'react';
import { useSelector } from 'react-redux';
import { isZeroPX } from '@/utils';
import { Container } from '@/layouts';
import { copyToClipboard } from '@/utils';
import { Button } from './button';

export const BoxResult = () => {
  const { 
    hOffset, 
    vOffset, 
    blur, 
    spread, 
    color 
  } = useSelector((state) => state.boxShadow);

  const boxShadowResult = `box-shadow: ${isZeroPX(hOffset)} ${isZeroPX(vOffset)} ${isZeroPX(blur)} ${isZeroPX(spread)} ${color};`;

  return (
    <div className='mt-8 text-center'>
      <h1 className='mb-4 text-2xl font-bold'>CSS Result</h1>
      <Container>
        <p className='text-left font-mono'>
          {boxShadowResult}
        </p>
      </Container>
      <Button handleClick={() => copyToClipboard(boxShadowResult)}>Copy code!</Button>
    </div>
  );
}
