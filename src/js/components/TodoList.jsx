import React, { useState } from 'react';
import "../../styles/style.css"; 

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(""); 

 
  const addTask = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="title">To do list</h1>
      <input
        type="text"
        placeholder="Add a task and click enter"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={addTask}
        className="task-input"
      />
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No task, add task</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                ✖
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;