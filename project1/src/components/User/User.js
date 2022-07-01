import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./User.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const User = (props) => {

  const nameInputRef= useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;

    event.preventDefault();

    if (
        userName.trim().length === 0 ||
        userAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (>0)",
      });
      return;
    }
    props.onAddUser(userName, userAge);
   nameInputRef.current.value ="";
   ageInputRef.current.value= "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card className={styles["user-form"]}>
        <form onSubmit={AddUserHandler}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
            
              ref = {nameInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
             
              ref = {ageInputRef}
            ></input>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default User;
