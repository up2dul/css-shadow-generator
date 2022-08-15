import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInset } from '@/features/box-shadow/box-shadow-slice';

export const Inset = () => {
  const { inset: initInset } = useSelector((state) => state.boxShadow);

  const [inset, setInset] = useState(initInset);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeInset({ newValue: inset }));
  }, [inset]);

  const handleCheck = () => setInset(!inset);

  return (
    <div className='flex items-center gap-1'>
      <input
        id='inset-checkbox'
        type='checkbox'
        defaultChecked={inset}
        className='text-primary cursor-pointer rounded'
        onClick={handleCheck}
      />
      <label htmlFor='inset-checkbox' className='ml-2 text-lg'>
        Inset
      </label>
    </div>
  );
}
