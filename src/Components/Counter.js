import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const increment = () => {
    dispatch({type:'increment'});
  }

  const decrement = () => {
    dispatch({type:'decrement'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;