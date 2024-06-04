import React from "react";
import Task from "./Task";


export default function TaskList({todos, onDeleteTodo,onDeleteAllTodos,onFinishedTodo}) {
    return (
      <div>
        {
          <ul className="list">
            {
              todos ? todos.map((todo)=> {
                return(
                  <Task todo={todo} onDeleteTodo={onDeleteTodo} onFinishedTodo={onFinishedTodo}></Task>
                )
              }) : "You currently have no tasks"
            }
               {
            todos && todos.length > 0 ? <li><button onClick={onDeleteAllTodos}>Delete All</button></li> : <li></li>
          }
          </ul>
       
        }
      </div>
   
    )
}

