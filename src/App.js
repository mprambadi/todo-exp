import React, { Component } from "react";
import uuid from "uuid/v1";
import TodoList from "./component/TodoList";
import TodoStatus from "./component/TodoStatus";
import './App.scss'

class App extends Component {
  state = {
    todo: "",
    todos: [],
    status: false
  };

  componentDidMount() {
    this.storage();
  }

  storage = () => {
    const getData = localStorage.getItem("todo");
    return getData ? this.setState({ todos: JSON.parse(getData) }) : "";
  };

  saveStorage = item => {
    localStorage.setItem("todo", JSON.stringify(item));
  };

  handleAddToDo = ({ key }) => {
    if (key === "Enter" && this.state.todo) {
      this.setState(state => {
        const item = [
          ...state.todos,
          { id: uuid(), name: state.todo, status: false, edit: false }
        ];

        this.saveStorage(item);
        return {
          todos: item,
          todo: ""
        };
      });
    }
  };

  updateToDo = item => {
    this.setState(state => {
      const data = state.todos.map(todo => {
        return todo.id === item.id
          ? {
              ...todo,
              ...item
            }
          : todo;
      });

      this.saveStorage(data);
      return {
        todos: data
      };
    });
  };

  deleteToDo = ({ id }) => {
    this.setState(state => {
      const item = state.todos.filter(todo => todo.id !== id);
      this.saveStorage(item);
      return {
        todos: item
      };
    });
  };

  checkAll = () => {
    this.setState(state => {
      const todos = state.todos.map(todo => ({
        ...todo,
        status: !state.status
      }));

      this.saveStorage(todos);
      return {
        status: !state.status,
        todos
      };
    });
  };

  deleteAll = () => {
    this.setState(state => {
      const todos = state.todos.filter(todo => todo.status !== true);

      this.saveStorage(todos);
      return {
        todos,
        status: false
      };
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
      
        <div className="mt-5 col-md-4 col-lg-4 col-sm-12">
          <TodoStatus todos={this.state.todos} />

          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={({ target: { name, value } }) =>
              this.setState({ [name]: value })
            }
            onKeyPress={this.handleAddToDo}
            className="form-control mb-3"
          />

          <div
            className={`${
              this.state.todos.length > 0 ? "d-flex" : "d-none"
            } justify-content-between mb-3`}
          >
            <div className="d-flex align-items-center flex-column">
              <i className="material-icons" onClick={this.checkAll}>
                {this.state.status ? "check_box" : "check_box_outline_blank"}
              </i>
              checkAll
            </div>
            <h3> Todo </h3>
            <div className="d-flex align-items-center flex-column">
              <i className="material-icons " onClick={() => this.deleteAll()}>
                delete
              </i>
              <span>deleteAll</span>
            </div>
          </div>

          <TodoList
            todos={this.state.todos}
            updateToDo={this.updateToDo}
            deleteToDo={this.deleteToDo}
          />
        </div>
      </div>
    );
  }
}

export default App;
