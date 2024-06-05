import React from "react";

export default function DeleteAllTasks({setTodos}){
     //function to delete all the todos and to delete user from DB
  async function handleDeletAllTodos(){
    setTodos([]);
    const currentUser= localStorage.getItem("user")
    const resp = await fetch(`https://playground.4geeks.com/todo/users/${currentUser}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
        }
    });
    setUserName('');
  }

  return(
    <div className="text-center deleteButton">
      <button type="button" className="btn btn-secondary" onClick={handleDeletAllTodos}>Delete All</button>
      </div>
  )
}