import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ item, updateToDo, deleteToDo }) => {
  return (
    <TodoItem item={item} updateToDo={updateToDo} deleteToDo={deleteToDo} />
  );
};

export default Todo;
