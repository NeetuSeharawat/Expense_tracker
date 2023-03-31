import { createSlice} from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter:true };
// there can be multiple createSlice , Slice for counter part:
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
  },
},
});
export const counterActions = counterSlice.actions;
// Note: reduxStore will be one , but there can be multiple slices. (it has only one root reducer).

// not exporting entire counterSlice ,just reducer part(.reducer)
export default counterSlice.reducer; 