import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value ; 
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;


    const nameInputIsValid = !isEmpty(enteredName);
    const streetInputIsValid = !isEmpty(enteredStreet);
    const postalCodeInputIsValid = isFiveChar(enteredPostal);
    const cityInputIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: nameInputIsValid,
      street: streetInputIsValid,
      postalCode: postalCodeInputIsValid,
      city: cityInputIsValid,
    });

    const formIsValid =
      nameInputIsValid &&
      streetInputIsValid &&
      postalCodeInputIsValid &&
      cityInputIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
        name : enteredName,
        street : enteredStreet,
        city : enteredCity,
        postalCode : enteredPostal    
    })
  };

  const nameInputClasses = `${styles.control} ${
    formInputValidity.name ? " " : styles.invalid
  }`;
  const streetInputClasses = `${styles.control} ${
    formInputValidity.street ? " " : styles.invalid
  }`;
  const postalCodeInputClasses = `${styles.control} ${
    formInputValidity.postalCode ? " " : styles.invalid
  }`;
  const cityInputClasses = `${styles.control} ${
    formInputValidity.city ? " " : styles.invalid 
  }`;
  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter valid name!</p>}
      </div>

      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter valid street!</p>}
      </div>

      <div className={postalCodeInputClasses}>
        <label htmlFor="postalCode">Postal code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter valid postal code (6 Character long)!</p>
        )}
      </div>

      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter valid city!</p>}
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
