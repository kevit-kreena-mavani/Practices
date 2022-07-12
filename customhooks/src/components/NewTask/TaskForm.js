import React, { useRef } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };
  return (
    <form onSubmit={SubmitHandler} className={styles.form}>
      <input type="text" ref={taskInputRef} />
      <button>Add Task</button>
    </form>
  );
};
export default TaskForm;
