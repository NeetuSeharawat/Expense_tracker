import {createStore} from 'redux';

const initialState = { counter: 0, showCounter:true };

const CounterReducer = (state =initialState , action) => {

      if(action.type === 'increment'){
        return { 
          counter: state.counter + 1,
          showCounter : state.showCounter
        };
      }
    
      if(action.type === 'Increase by 5'){
        return {
          counter: state.counter+action.amount,
          showCounter : state.showCounter

        };
      }

      if(action.type === 'decrement'){
        return { 
        counter: state.counter - 1,
        showCounter : state.showCounter

        };
      }

      if(action.type === 'Decrease by 5'){
        return { counter: state.counter-action.amount,
        showCounter : state.showCounter

        };
      }

      if(action.type === 'toggle'){
      return{
        showCounter : !state.showCounter,
       counter : state.counter
      }
      }

    return state;
  };
  

const store = createStore(CounterReducer); // redux Store
export default store;