//import { Component } from "react";
//import { connect } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter1 = useSelector((state) => state.counter.counter);
  const showCount = useSelector((state) => state.counter.showCounter);

  // ================= for BASIC REDUX ====================
  // const IncrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const IncreaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };
  // const DecrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const IncreaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{counter1}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increase by 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// ==================================== USING CLASS BASED COMPONENTS ====================================
// class Counter extends Component {
//   IncrementHandler() {
//     this.props.increment();
//   }

//   DecrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const dispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapToProps, dispatchToProps)(Counter);
