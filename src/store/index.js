import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter:true };

//createSlice take object as argument
const counterSlice = createSlice ({
name:'counter',
initialState: initialCounterState,
reducers: {
  increment(state){
    state.counter++;
  },
  //here, don't need of action,it were simple state only.so action not added here.
  decrement(state){
    state.counter--;
  },
  //now need of action, will add it with state as an argument.
  increase(state,action){
    state.counter= state.counter +action.payload; // payload hold data which want to load (instead of amount , use payload)
  },
  // with toggle no need of action
  toggleCounter(state){
  state.showCounter =!state.showCounter;
  }
}
});

const initialAuthState ={
  isAuthenticated :false
}
// there can be multiple createSlice , Slice for Auth part:
const authSlice =createSlice({
name: 'authentication',
initialState : initialAuthState,
reducers: {
  login(state){
    state.isAuthenticated =true;
  },
  logout(state){
    state.isAuthenticated =false;
  },
},
});



// to dispatch action object, createSlice automatically create unique action identifiers(counter,auth) for different reducer which access action keys.
const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
}); 
// Note: reduxStore will be one , but there can be multiple slices. it has only one root reducer.

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;