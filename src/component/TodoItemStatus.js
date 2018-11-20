import React from "react";

const TodoItemStatus =  ({ item: { status, id }, updateToDo }) => (
  <i
    className="material-icons"
    onClick={() => updateToDo({ id, status: !status })}
  >
    {status ? "check_box" : "check_box_outline_blank"}
  </i>
);

export default TodoItemStatus
