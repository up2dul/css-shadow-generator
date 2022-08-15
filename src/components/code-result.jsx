import React from 'react';
import { useSelector } from 'react-redux';
import { FaCopy } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { copyToClipboard as copy } from '@/utils';
import { isZeroPX as zPX } from '@/utils';
import { Container } from '@/layouts';
import { Button } from './button';
import PropTypes from 'prop-types';

export const CodeResult = ({ shadowType }) => {
  const { boxShadow, textShadow } = useSelector((state) => state);

  const result = () => {
    if (shadowType === 'box') {
      const { 
        inset, 
        hOffset, 
        vOffset, 
        blur, 
        spread, 
        color 
      } = boxShadow;
      return `box-shadow:${inset ? ' inset' : ''} ${zPX(hOffset)} ${zPX(vOffset)} ${zPX(blur)} ${zPX(spread)} ${color};`
    } else if (shadowType === 'text') {
      const { 
        hOffset, 
        vOffset, 
        blur, 
        color 
      } = textShadow;
      return `text-shadow: ${zPX(hOffset)} ${zPX(vOffset)} ${zPX(blur)} ${color};`
    }
  }

  const handleCopy = () => {
    copy(result());
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
          {result()}
        </p>
      </Container>
      <Button handleClick={handleCopy}>
        <FaCopy className='fill-white inline mr-2' />
        Copy code!
      </Button>
      <Toaster />
    </div>
  );
}

CodeResult.propTypes = {
  shadowType: PropTypes.oneOf(['box', 'text']).isRequired,
}
