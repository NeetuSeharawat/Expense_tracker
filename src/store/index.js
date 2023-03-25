import {createStore} from 'redux';

const CounterReducer = (state = { counter: 0 }, action) => {

      if(action.type === 'increment'){
        return { counter: state.counter + 1,
        };
      }
    
      if(action.type === 'Increase by 5'){
        return { counter: state.counter+action.amount,
        };
      }

      if(action.type === 'decrement'){
        return { counter: state.counter - 1,
        };
      }

      // if(action.type === 'Decrease by 5'){
      //   return { counter: state.counter-action.amount,
      //   };
      // }

    return state;
  };
  

const store = createStore(CounterReducer); // redux Store
export default store;