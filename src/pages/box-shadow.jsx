import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@/layouts';
import { BoxDemo, CodeResult, ColorPicker, Slider } from '@/components';
import { configSliders as sliders } from '@/configs';

export const BoxShadow = () => {
  const boxState = useSelector((state) => state.boxShadow);

  return (
    <>
      <Container isFlex>
        <div>
          <BoxDemo />
          <ColorPicker shadowType='box' />
        </div>
        <div className='flex flex-col gap-8'>
          {sliders.map(({ name, text }, idx) => (
            <Slider
              key={idx}
              shadowType='box'
              name={name}
              text={text}
              sliderValue={boxState[name]}
            />
          ))}
        </div>
      </Container>
      <CodeResult shadowType='box' />
    </>
  );
}
