import React from "react";
import TodoItemContent from "./TodoItemContent";
import TodoItemStatus from "./TodoItemStatus";

const TodoItem =  ({ item, deleteToDo, updateToDo }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <TodoItemStatus updateToDo={updateToDo} item={item} />
    <TodoItemContent item={item} updateToDo={updateToDo} />
    <i className="material-icons" onClick={() => deleteToDo({ id: item.id })}>
      delete
    </i>
  </div>
);

export default TodoItem
