import { useReducer} from "react";

const initialInputValue = {
  value: "",
  isTouched: false,
};
const InputStateReducer = (state , action) =>{
  if(action.type === "ENTERED"){
    return {value : action.value , isTouched : state.isTouched}
  }
  if(action.type === "TOUCHED"){
    return { isTouched : true , value : state.value}
  }
  if(action.type === "RESET"){
    return {isTouched : false , value : ""}
  }
  return initialInputValue;
}
const useInput = (validateValue) => {
  const [state, dispatch] = useReducer( InputStateReducer, initialInputValue);
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "ENTERED", value: event.target.value });
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "TOUCHED" });
    //setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: state.value,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
