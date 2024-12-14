import React from "react";
import TodoList from "./TodoList"; 

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Lista de Tareas</h1>
      <TodoList />
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
      </p>
    </div>
  );
};

export default Home;
