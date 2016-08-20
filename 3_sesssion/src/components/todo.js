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

const TaskList = ({tasks}) => {
  let list = [];
  for(let taskIndex in tasks){
    list.push(<Task description={tasks[taskIndex]} key={taskIndex} />)
  }
  return(
    <div className="row">
      <ul>
        {list}
      </ul>
    </div>
  );
};

const Task = ({description, completed}) => {
  let decoration;
  completed ? decoration = 'line-through' : decoration = 'none';

  return(
    <li style={{textDecoration: decoration}}>{description}</li>
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
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTask: event.target.value});
  }

  handleKeyUp(event) {
    event.preventDefault();
    if(event.keyCode === 13){
      let newTask = event.target.value;
      let newTaskList = [newTask].concat(this.state.taskList);
      this.setState({
        newTask: '',
        taskList: newTaskList
      });
    }
  }

  render() {
    return (
      <div className="todo-app">
        <Header text='Todos'/>
        <TaskForm
          value={this.state.newTask}
          placeholder="Add a new task"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}/>
        <TaskList tasks={this.state.taskList}/>
        <NavBar />
      </div>
    );
  }
}

export default Todo;
