import React, { useState } from "react";

export default function AddUser(){
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
    <div>
        <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="user..."></input>
        <button onClick={handleAddUser}>Add User</button>
        <p>{error}</p>
    </div>
 )

}