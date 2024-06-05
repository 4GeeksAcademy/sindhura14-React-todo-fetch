import React, { useState } from "react";

export default function AddUser(){

    console.log('add user component');
    const [user,setUser] = useState();
    const [error,setError]= useState();


    const  handleAddUser= async(e) =>{
        e.preventDefault();
         const resp = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
             method : 'POST'
         });
         if(resp.ok){
             const data = await resp.json();
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
            error ? <p className="alert alert-danger text-center">{error}</p> : <p></p>
        }
        
  
    </div>
 )

}