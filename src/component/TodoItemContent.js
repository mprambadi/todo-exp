import React from "react";

const TodoItemContent =  ({ item: { edit, name, status, id }, updateToDo }) => {
  return (
    <React.Fragment>
      {edit ? (
        <input
          value={name}
          onChange={({ target: { value } }) => updateToDo({ id, name: value })}
          onBlur={() => updateToDo({ id, name, edit: !edit })}
          onKeyPress={({ key }) =>
            key === "Enter" ? updateToDo({ id, edit: !edit }) : ""
          }
          autoFocus
        />
      ) : (
        <span
          style={{ textDecorationLine: status ? "line-through" : "none" }}
          className={`${edit ? "d-none" : "d-block"}`}
          onDoubleClick={() => updateToDo({ id, edit: !edit })}
        >
          {name}
        </span>
      )}
    </React.Fragment>
  );
};

export default TodoItemContent