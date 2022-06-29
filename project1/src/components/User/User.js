import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./User.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const User = (props) => {
  const [EnteredUserName, SetUserName] = useState("");
  const [EnteredUserAge, SetUserAge] = useState("");
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();

    if (
      EnteredUserName.trim().length === 0 ||
      EnteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+EnteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (>0)",
      });
      return;
    }
    props.onAddUser(EnteredUserName, EnteredUserAge);
    SetUserName("");
    SetUserAge("");
  };

  const UserNameHandler = (event) => {
    SetUserName(event.target.value);
  };

  const UserAgeHandler = (event) => {
    SetUserAge(event.target.value);
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
              value={EnteredUserName}
              onChange={UserNameHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="two-digit"
              value={EnteredUserAge}
              onChange={UserAgeHandler}
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
