import React, { useState } from "react";


export default function GetUser({setTodos,children,setCurrUser}){

    const [userName,setUserName] = useState();
    const [userError,setUserError]= useState();
  


    async function handleGetUser(e){
        e.preventDefault();
        try{
    const resp = await fetch(`https://playground.4geeks.com/todo/users/${userName}`);
    if(!resp.ok){
        throw new Error(`User ${userName} does not exist`)
        
    }
    const data = await resp.json();
    setCurrUser(data.name);
    const allTodos = [...data.todos]
    setTodos(allTodos);
    localStorage.setItem('user', data.name)
    setUserName('');

}catch(err){
    setUserName('');
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
            userError ? <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                    {userError}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> : <p></p>
        }
            {children}
        </div>

    )

}