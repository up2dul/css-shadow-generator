import React from 'react';
import { Container } from '@/layouts';
import { BoxDemo, BoxResult, Slider } from '@/components';
import { configBoxSliders as boxSliders } from '@/configs';

export const BoxShadow = () => (
  <>
    <Container isFlex>
      <div>
        <BoxDemo />
      </div>
      <div className='flex flex-col gap-8'>
        {boxSliders.map(({ name, defaultValue }, idx) => (
          <Slider
            key={idx}
            name={name}
            sliderValue={defaultValue}
            // onSliderChange={}
          />
        ))}
      </div>
    </Container>
    <BoxResult />
  </>
);
