import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./modal/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    const newTodos = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodos);
    });
  };

  const removeTodoHandler = (todoId : string) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={todoHandler} />
      <Todos items={todos} onRemoveTodo = {removeTodoHandler}/>
    </div>
  );
}

export default App;
