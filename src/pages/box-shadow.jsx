import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@/layouts';
import { BoxDemo, BoxResult, ColorPicker, Slider } from '@/components';
import { configBoxSliders as boxSliders } from '@/configs';

export const BoxShadow = () => {
  const boxState = useSelector((state) => state.boxShadow);
  return (
    <>
      <Container isFlex>
        <div>
          <BoxDemo />
          <ColorPicker />
        </div>
        <div className='flex flex-col gap-8'>
          {boxSliders.map(({ name, text }, idx) => (
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
      <BoxResult />
    </>
  );
}
