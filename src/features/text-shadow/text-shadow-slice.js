import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hOffset: 10,
  vOffset: 10,
  blur: 5,
  color: 'rgba(0, 0, 0, 0.7)',
}

const textShadowSlice = createSlice({
  name: 'text-shadow',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { name, newValue } = action.payload;
      state[name] = parseInt(newValue);
      return state;
    },
    changeColor: (state, action) => {
      const { newColor } = action.payload;
      state.color = newColor;
      return state;
    }
  }
});

export const { changeValue, changeColor } = textShadowSlice.actions;

export default textShadowSlice.reducer;
