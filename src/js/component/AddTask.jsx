import React, { useState } from "react";

export default function AddTask({setTodos}){

    const [newTodo,setNewTodo] = useState();

    async function handleAddTasks(e){
        console.log("inside add task")

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
            }else{
                const error = await resp.json();
            }
    }

    return (
        <form>
        <input value={newTodo} placeholder="add a task" onChange={(e)=> setNewTodo(e.target.value)}></input>
        <button onClick={handleAddTasks}>Add task</button>
      </form>
    )
}