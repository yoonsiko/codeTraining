import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer
  } // If we have multiple reducers, wrap all reducers from multiple slicers to one object
  //reducer: counterSlice.reducer, // If we have a single reducer
})

export default store;