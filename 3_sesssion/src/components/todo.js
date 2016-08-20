import React, {Component} from 'react';
import Header from './header.js';

const FILTERS = {
  ALL: 'Todos',
  PENDING: 'Active',
  DONE: 'Completed'
}

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

const TaskList = ({tasks, filter, onTaskClick}) => {
  let list = [];
  tasks = _filterTasks(tasks, filter);
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

function _filterTasks(tasks, filter) {
  return tasks.filter(task => {
    let result = true;
    if (filter === FILTERS.PENDING) {
      result = !task.completed
    } else if (filter === FILTERS.DONE) {
      result = task.completed
    }
    return result;
  });
}

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

const NavBar = ({filter, onClick}) => {
  let links = [];
  for (let message in FILTERS) {
    links.push(
      <FilterLink key={message} text={FILTERS[message]} filter={filter} onClick={onClick}/>
    );
  }
  return(
    <div className="row">
      {links}
    </div>
  )
}

const activeStyle = {
  textDecoration: 'none',
  color: 'rgb(0, 180, 0)'
};

const FilterLink = ({text, filter, onClick}) => {
  return(
    <div>
      <a href="#" style={text===FILTERS[filter] ? activeStyle : {}} onClick={() => onClick(text)}>{text}</a> |
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
    this.handleFilter = this.handleFilter.bind(this);
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
        taskList: newTaskList,
        filter: FILTERS.ALL
      });
    }
  }

  handleTaskClick(index) {
    let task = this.state.taskList[index];
    task.completed = !task.completed;
    this.setState({taskList: this.state.taskList});
  }

  handleFilter(filter) {
    this.setState({filter: filter})
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
          filter={this.state.filter}
          onTaskClick={this.handleTaskClick}
        />
        <NavBar onClick={this.handleFilter} filter={this.state.filter}/>
      </div>
    );
  }
}

export default Todo;
