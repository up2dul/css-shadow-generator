import { configureStore } from '@reduxjs/toolkit';
import boxShadowReducer from './box-shadow/box-shadow-slice';
import textShadowReducer from './text-shadow/text-shadow-slice';

export default configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
    textShadow: textShadowReducer,
  },
});
