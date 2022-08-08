import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inset: false,
  hOffset: 10,
  vOffset: 10,
  blur: 5,
  spread: 0,
  color: 'rgba(0,0,0,0.7)',
}

const boxShadowSlice = createSlice({
  name: 'box-shadow',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { name, newValue } = action;
      const newVal = { [name]: newValue }
      return {...state, newVal}
    }
  }
});

export default boxShadowSlice.reducer;
