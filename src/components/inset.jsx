import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInset as setBox } from '@/features/box-shadow/box-shadow-slice';

export const Inset = () => {
  const { initInset } = useSelector((state) => state.boxShadow);
  const [inset, setInset] = useState(initInset);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBox({ newValue: inset }));
  }, [inset]);

  const toggleInput = () => setInset(!inset);

  return (
    <div className='flex items-center gap-1'>
      <input
        id='inset-checkbox'
        type='checkbox'
        className='text-custom-turquoise cursor-pointer rounded'
        onClick={toggleInput}
      />
      <label htmlFor='inset-checkbox' className='ml-2 text-lg'>
        Inset
      </label>
    </div>
  );
}
