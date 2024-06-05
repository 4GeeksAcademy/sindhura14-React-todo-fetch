import React, { useState } from "react";

export default function AddTask({setTodos}){
  console.log("add task component");

    const [newTodo,setNewTodo] = useState();

    async function handleAddTasks(e){
        e.preventDefault();

        const currentUser = localStorage.getItem("user");
        const todos = {"label":newTodo,"is_done":false};

        const resp = await fetch(`https://playground.4geeks.com/todo/todos/${currentUser}`, {
            method: "POST",
            body: JSON.stringify(todos),
            headers: {
              "Content-Type": "application/json"
            }
            });
          if(resp.ok)
            {
                const newAddedTodo = await resp.json();
                setTodos(todos => [...todos,newAddedTodo]);   
                setNewTodo("");                             
            }else{
                const error = await resp.json();
            }
    }

    return (
      <div className="newTask">
        <div className="input-group">
        <input value={newTodo} placeholder="add a task" type="text" onChange={(e)=> setNewTodo(e.target.value)}></input>
        <button onClick={handleAddTasks} type="button" className="btn btn-secondary">Add a new task</button>
        </div>

      
      </div>

    )
}