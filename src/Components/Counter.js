import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const show = useSelector(state=>state.showCounter);
// we can use useSelector multiple times to retrive the data.

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  }
//Increment by1
  const increment = () => {
    dispatch({type:'increment'});
  }
  //increment by5
  const incrementHandler = () => {
    dispatch({type:'Increase by 5', amount :5});
  }
//decrease by2
  const decrement = () => {
    dispatch({type:'decrement'});
  }
  //decrement by 5
  const decrementHandler = () => {
    dispatch({type:'Decrease by 5', amount :5});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={incrementHandler}>Increase by 5</button>
<hr />
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementHandler}>Decrease by 5</button>
<hr />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;