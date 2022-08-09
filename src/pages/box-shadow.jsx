import React from 'react';
import { Container } from '@/layouts';
import { BoxDemo, BoxResult, ColorPicker, Slider } from '@/components';
import { configBoxSliders as boxSliders } from '@/configs';

export const BoxShadow = () => (
  <>
    <Container isFlex>
      <div>
        <BoxDemo />
        <ColorPicker />
      </div>
      <div className='flex flex-col gap-8'>
        {boxSliders.map(({ name, text, defaultValue }, idx) => (
          <Slider
            key={idx}
            shadowType='box'
            name={name}
            text={text}
            sliderValue={defaultValue}
          />
        ))}
      </div>
    </Container>
    <BoxResult />
  </>
);
