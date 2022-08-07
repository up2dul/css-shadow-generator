import React from 'react';
import { Container } from '@/layouts';
import { Button } from './button';

export const BoxResult = () => {
  return (
    <div className='mt-8 text-center'>
      <h1 className='mb-4 text-2xl font-bold'>CSS Result</h1>
      <Container>
        <p className='text-left font-mono'>
          box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        </p>
      </Container>
      <Button>Copy code!</Button>
    </div>
  );
}
