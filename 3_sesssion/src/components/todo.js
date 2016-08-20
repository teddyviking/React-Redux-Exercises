import React, {Component} from 'react';
import Header from './header.js';

const TaskForm = ({value, placeholder, onChange, onKeyUp}) => {
  return(
    <div className="row">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

const TaskList = ({tasks, onTaskClick}) => {
  let list = [];
  for(let taskIndex in tasks){
    let task = tasks[taskIndex];
    list.push(
      <Task
        description={task.description}
        completed={task.completed}
        key={taskIndex}
        id={taskIndex}
        onClick={onTaskClick}
      />
    );
  }
  return(
    <div className="row">
      <ul>
        {list}
      </ul>
    </div>
  );
};

const Task = ({id, description, completed, onClick}) => {
  let decoration;
  completed ? decoration = 'line-through' : decoration = 'none';

  return(
    <li
      style={{textDecoration: decoration}}
      onClick={() => onClick(id)}
    >
      {description}
    </li>
  );
};

const NavBar = () => {
  return(
    <div className="row">
      <a href="#" style={{textDecoration: 'none', color: 'rgb(0, 0, 0)'}}>Todos</a> |
      <a href="#">Active</a>|
      <a href="#">Completed</a>
    </div>
  )
}

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      taskList: []
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTask: event.target.value});
  }

  handleKeyUp(event) {
    event.preventDefault();
    if(event.keyCode === 13){
      let newTask = {
        description: event.target.value,
        completed: false
      };
      let newTaskList = [newTask].concat(this.state.taskList);
      this.setState({
        newTask: '',
        taskList: newTaskList
      });
    }
  }
  handleTaskClick(index) {
    event.preventDefault();
    let task = this.state.taskList[index];
    task.completed = !task.completed;
    this.setState({taskList: this.state.taskList});
  }

  render() {
    return (
      <div className="todo-app">
        <Header text='Todos'/>
        <TaskForm
          value={this.state.newTask}
          placeholder="Add a new task"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <TaskList
          tasks={this.state.taskList}
          onTaskClick={this.handleTaskClick}
        />
        <NavBar />
      </div>
    );
  }
}

export default Todo;
