//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./auth";
import CounterReducer from "./counter";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

export default store;

// ========================== BASIC REDUX WITHOUT TOOLKIT =============================

// const counterReducer = (state = initialValue, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

//export default store;
