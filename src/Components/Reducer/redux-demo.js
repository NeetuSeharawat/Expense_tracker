
const redux =require('redux');

const CounterReducer=(state = { counter: 0 }, action) => {
  if(action.type === 'Increment'){
    return { counter: state.counter + 5,
     };
  }

  if(action.type === 'Decrement'){
    return { counter: state.counter - 5,
     };
  }
return state;
};

const store =redux.createStore(CounterReducer);

const counterSubscriber =() =>{
    const latestState = store.getState();
    console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({type:"Increment"});
store.dispatch({type:"Decrement"});