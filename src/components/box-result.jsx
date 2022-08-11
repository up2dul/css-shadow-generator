import React from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { isZeroPX } from '@/utils';
import { copyToClipboard } from '@/utils';
import { Container } from '@/layouts';
import { Button } from './button';

export const BoxResult = () => {
  const { 
    inset,
    hOffset, 
    vOffset, 
    blur, 
    spread, 
    color 
  } = useSelector((state) => state.boxShadow);

  const codeResult = `box-shadow: ${inset ? 'inset' : ''} ${isZeroPX(hOffset)} ${isZeroPX(vOffset)} ${isZeroPX(blur)} ${isZeroPX(spread)} ${color};`;

  const buttonCopyHandle = () => {
    copyToClipboard(codeResult);
    toast.success('Code copied to clipboard!', {
      duration: 4000,
      position: 'bottom-right',
    });
  }

  return (
    <div className='mt-8 text-center'>
      <h1 className='mb-4 text-2xl font-bold'>CSS Result</h1>
      <Container>
        <p className='text-left font-mono'>
          {codeResult}
        </p>
      </Container>
      <Button handleClick={buttonCopyHandle}>Copy code!</Button>
      <Toaster />
    </div>
  );
}
