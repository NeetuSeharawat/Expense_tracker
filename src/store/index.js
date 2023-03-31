import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// to dispatch action object, createSlice automatically create unique action identifiers(counter,auth) for different reducer which access action keys.
const store = configureStore({
  reducer: {counter: counterReducer, auth: authReducer},
}); 

export default store;