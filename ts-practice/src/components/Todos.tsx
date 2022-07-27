// function Todos () {
//     return <ul>
//         <li>Learn React</li>
//         <li>Learn TypeScript</li>
//     </ul>
// }
// export default Todos ;

import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/Todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
