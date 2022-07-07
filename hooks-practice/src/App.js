import React, {  useRef } from "react";
import "./App.css";
import User from "./child";

function App() {
  // ====================================================== MANAGING STATE WITH USE OF USE STATE HOOK : ======================================================
  // const [countInc , setCountInc]= useState(0);
  // const [countDec , setCountDec]= useState(0);
  // const IncrementHandler= () =>{
  //   setCountInc(countInc+1)
  // }
  // const  DecrementHandler = () => {
  //   setCountDec(countDec-1)
  // }
  // return (
  //   <div>
  //     <h1>{countInc} {countDec}</h1>
  //     <button onClick= {IncrementHandler}>Increment</button>
  //     <button onClick = {DecrementHandler}>Decrement</button>
  //   </div>
  // );

  // ====================================================== MANAGING STATE WITH USE REDUCER HOOK : ======================================================
  // const initialState = 1;

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increment":
  //       return state + 1;
  //     case "decrement":
  //       return state - 1;
  //     default:
  //       throw new Error();
  //   }
  // };

  // const [count, dispatchCount] = useReducer(reducer, initialState);

  // const IncrementHandler = () => {
  //   dispatchCount({ type: "increment" });
  // };
  // const DecrementHandler = () => {
  //   dispatchCount({ type: "decrement" });
  // };
  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={IncrementHandler}>Increment</button>
  //     <button onClick={DecrementHandler}>Decrement</button>
  //   </>
  // );

  // ====================================================== USING FORWARD REF HOOK : ======================================================
  // const InputRef = useRef();
  // const focusUser = () =>{
  //   InputRef.current.focus()
  // }
  // return (
  //   <div>
  //     <h1>Forward ref example</h1>
  //     <User ref = {InputRef}></User>
  //     <button onClick={focusUser}>Focus</button>
  //   </div>
  // )

  // ======= ANOTHER WAY : =======


}

export default App;
