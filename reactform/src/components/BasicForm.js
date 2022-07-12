import {useState} from 'react' ; 

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const InputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const InputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setEnteredNameIsTouched(false);
  };
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={SubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={InputChangeHandler}
            onBlur={InputBlurHandler}
            value={enteredName}
          />
            {nameInputIsInValid && <p className='error-text'>Name must not be empty.</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
