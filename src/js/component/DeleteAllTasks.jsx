import React, { useState } from "react";

export default function DeleteAllTasks({setTodos}){
     //function to delete all the todos and to delete user from DB
     const [sucessMessage,setSuccessMessage] = useState();
  async function handleDeletAllTodos(){
    setTodos([]);
    const currentUser= localStorage.getItem("user")
    const resp = await fetch(`https://playground.4geeks.com/todo/users/${currentUser}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
        }
    });
    if(resp.ok){
      const message = "User " + currentUser + " has been deleted!"
      setSuccessMessage(message);
      console.log(sucessMessage);
    }
  }

  return(
    <div className="text-center deleteButton">
      <button type="button" className="btn btn-secondary" onClick={handleDeletAllTodos}>Delete All</button>
        
          {
            sucessMessage ? <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                    {sucessMessage}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> : <p></p>
        } 
        
      </div>
  )
}