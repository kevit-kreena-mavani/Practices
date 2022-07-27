// function Todos () {
//     return <ul>
//         <li>Learn React</li>
//         <li>Learn TypeScript</li>
//     </ul>
// }
// export default Todos ;

import React from "react";
import Todo from "../modal/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: React.FC<{items : Todo[] , onRemoveTodo : (id : string) => void}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem  key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null , item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
