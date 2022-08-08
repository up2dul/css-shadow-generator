import { configureStore } from '@reduxjs/toolkit';
import boxShadowReducer from './box-shadow/box-shadow-slice';

export default configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
  },
});
