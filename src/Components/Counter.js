import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counter.counter); // last counter is property(value).
  const show = useSelector(state=>state.counter.showCounter);
// we can use useSelector multiple times to retrive the data.

 //Increment by1
  const increment = () => {
    dispatch(counterActions.increment());
  }
  //increment by5
  const incrementHandler = () => {
    // value will store in payLoad
    dispatch(counterActions.increase(5));
  }
//decrease by2
  const decrement = () => {
    dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }
 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={incrementHandler}>Increase by 5</button>
<hr />
      <button onClick={decrement}>Decrement</button>
<hr />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;