import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice';
import { slice } from './features/accessGroup';

const reducer = {
  auth: authSlice,
  something: slice.reducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;