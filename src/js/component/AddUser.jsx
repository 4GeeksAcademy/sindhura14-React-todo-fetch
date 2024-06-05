import React, { useState } from "react";

export default function AddUser(){

    const [user,setUser] = useState();
    const [error,setError]= useState();
    const [message,setMessage]=useState();


    const  handleAddUser= async(e) =>{
        e.preventDefault();
         const resp = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
             method : 'POST'
         });
         if(resp.ok){
             const data = await resp.json();
             const successMessage = "User " + user + " added!";
             setMessage(successMessage);
             console.log(data);
             setError('');
         }else {
             const error = await resp.json();
             setError(error.detail);
         }
         setUser('');
 }

 return (
    <div className="card">
        <h5 className="card-header">Add a new user</h5>
        <div className="input-group">
        <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="enter name here..." type="text"></input>
        <button type="button" className="btn btn-secondary" onClick={handleAddUser}>Add User</button>
        </div>
        {
            error ? <div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
            {error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>  : <p></p>
        }
        {
            message ? <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
            {message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>  : <p></p>
        }
  
    </div>
 )

}