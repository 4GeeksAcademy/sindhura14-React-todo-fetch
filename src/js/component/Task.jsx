import React from "react"


export default function Task({todo, onDeleteTodo,onFinishedTodo}){

  console.log("inside task")
    return(
      <>
        <li className="list-group-item d-flex flex-row justify-content-between" key={todo.id}>
          <label className="task">
           <input
          type="checkbox"
          value={todo.is_done}
          onChange={() => onFinishedTodo(todo.id)}
        ></input>
      <span style={todo.is_done? { textDecoration: "line-through" } : {}}>
     {todo.label}
        </span> 
          </label>

        
        <button className ="hide" onClick={() => onDeleteTodo(todo.id)}><i className="fa-solid fa-trash-can"></i></button>
      </li>
      </>
    )
}