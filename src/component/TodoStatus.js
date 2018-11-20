import React from "react";

const TodoStatus = ({ todos }) => (
  <div className="d-flex justify-content-between mb-2">
    <span>complete :</span> {todos.filter(item => item.status === true).length}
    <span>active :</span> {todos.filter(item => item.status !== true).length}
  </div>
);

export default TodoStatus;
