import React from "react";
import Todo from "./Todo";

const TodoList =  ({ todos, updateToDo, deleteToDo }) => {
  const todo = todos.map(todo => (
    <Todo
      key={todo.id}
      item={todo}
      updateToDo={updateToDo}
      deleteToDo={deleteToDo}
    />
  ));

  return todo;
};

export default TodoList