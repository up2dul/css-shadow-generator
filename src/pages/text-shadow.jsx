import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@/layouts';
import { CodeResult, ColorPicker, Slider, TextDemo } from '@/components';
import { configSliders } from '@/configs';

export const TextShadow = () => {
  const textState = useSelector((state) => state.textShadow);

  return (
    <>
      <Container isFlex>
        <div>
          <TextDemo />
          <ColorPicker shadowType='text' />
        </div>
        <div className='flex flex-col gap-8'>
          {configSliders
            .filter(({ name }) => name !== 'spread')
            .map(({ name, text }, idx) => (
              <Slider
                key={idx}
                shadowType='text'
                name={name}
                text={text}
                sliderValue={textState[name]}
              />
          ))}
        </div>
      </Container>
      <CodeResult shadowType='text' />
    </>
  );
}
