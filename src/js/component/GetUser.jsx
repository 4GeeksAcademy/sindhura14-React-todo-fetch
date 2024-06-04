import React, { useState } from "react";


export default function GetUser({setAllTodos,children}){

    const [userName,setUserName] = useState();


    async function handleGetUser(e){
        e.preventDefault();
    const resp = await fetch(`https://playground.4geeks.com/todo/users/${userName}`);
    const data = await resp.json();
    console.log(data);
    const allTodos = [...data.todos]
    console.log(allTodos);
    setAllTodos(allTodos);
    localStorage.setItem('user', data.name)
    }

    return (
        <div>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="user to get ..."></input>
			<button onClick={handleGetUser}>Get User</button>
            {children}
        </div>

    )

}