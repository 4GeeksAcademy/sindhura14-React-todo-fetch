import React, { useState } from "react";


export default function GetUser({setTodos,children,setCurrUser}){
    console.log("get user component");


    const [userName,setUserName] = useState();
    const [userError,setUserError]= useState();
  


    async function handleGetUser(e){
        e.preventDefault();
        try{
    const resp = await fetch(`https://playground.4geeks.com/todo/users/${userName}`);
    if(!resp.ok){
        throw new Error("User does not exist")

    }
    const data = await resp.json();
    setCurrUser(data.name);
    const allTodos = [...data.todos]
    setTodos(allTodos);
    localStorage.setItem('user', data.name)
    setUserName('');

}catch(err){
    setUserError(err.message);
} 

}

    return (
        <div className="card">
            <h5 className="card-header">Get user data</h5>
            <div className="input-group">
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="user name ..."></input>
			<button onClick={handleGetUser} type="button" className="btn btn-secondary">Get User</button>
            </div>
            {
            userError ? <p className="alert alert-danger text-center">{userError}</p> : <p></p>
        }
            {children}
        </div>

    )

}