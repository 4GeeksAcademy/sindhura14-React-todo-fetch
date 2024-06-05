import React from "react";
import Task from "./Task";
import Stats from "./Stats";
import DeleteAllTasks from "./DeleteAllTasks";


export default function TaskList({todos,setTodos,children,currUser}) {


//function to set the is_done for the task
  async function handleFinishedTodos(id){
    setTodos(todos => todos.map(todo => todo.id ===id ? {...todo,is_done:!todo.is_done} : todo))
    const index = todos.findIndex(todo => todo.id === id);
    const label = todos[index].label;
    const todo = {label,is_done:true}
    const resp = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
      method:"PUT",
      body:JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
        }
    });
  }

  //function to delete a single task
  async function handleDeleteTodo(id){
    setTodos((currTodos) => todos.filter((todo => todo.id !== id)));
    const resp = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
        }
    });
  }



    return (
      <div class="userContainer">
          <p className="text-center"><h2>{currUser}</h2></p>
          {children}
        {
          <ul className="list">
            {
              todos ? todos.map((todo)=> {
                return(
                  <Task todo={todo} onDeleteTodo={handleDeleteTodo} onFinishedTodo={handleFinishedTodos} key={todo.id}></Task>
                )
              }) : ''
            }      
          </ul>                       
        }
        {/* show Delete all button only if the todos are available*/
          todos && todos.length > 0 ? <DeleteAllTasks setTodos={setTodos}></DeleteAllTasks> : <li className="list-group-item"></li>
        }
        {/* show stats only if the todos are available*/
          todos ?<Stats todos={todos}></Stats> : ""
        }
   
      </div>
   
    )
}

