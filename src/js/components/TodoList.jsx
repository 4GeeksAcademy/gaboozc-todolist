import React, { useState, useEffect } from 'react';
import "../../styles/style.css"; 

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");
 
const loadUser = async () => {
  //linea 10 hace el fecth de la API
  const respons = await fetch("https://playground.4geeks.com/todo/users/gaboozc")
  //si no responde de manera adecuada lo sabremos y crearemos un usuario
  if (!respons.ok) {
    const respons = await fetch("https://playground.4geeks.com/todo/users/gaboozc", {
      method: "post"
    })
    return
  }
  const data = await respons.json() 
  setTasks (data.todos) 
}
useEffect(()=>{loadUser()}, [])
const addTask = async (event) => {
  if (event.key === "Enter" && newTask.trim() !== "") {
      const newTaskObject = { label: newTask, is_done: false };


          const resp = await fetch("https://playground.4geeks.com/todo/todos/gaboozc", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newTaskObject),
          });

          const data = await resp.json();

          setTasks([...tasks, data]); 
          setNewTask(""); 
  }
};

  const deleteTask = async (taskId) => {

    try {
        await fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, {
            method: "DELETE",
        });

        setTasks(tasks.filter((task) => taskId !== task.id )); 
        console.log(`Task with ID ${taskId} deleted`);
    } catch (error) {
        console.error("Error deliting task:", error);
    }
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
              {task.label}
              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
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