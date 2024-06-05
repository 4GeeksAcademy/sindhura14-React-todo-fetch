import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddUser from "./AddUser";
import GetUser from "./GetUser";
import AddTask from "./AddTask";




//create your first component
const Home = () => {

	const [todos,setTodos] = useState();
	const [currUser,setCurrUser] = useState();
	
	return (
		<>
		<div className="d-flex flex-row justify-content-around container">
			<AddUser></AddUser>			
			<GetUser setTodos={setTodos} setCurrUser={setCurrUser}>
			</GetUser>
		
		</div>
		{
			todos? 	<div className="d-flex flex-column justify-content-around container container-task">
			<TaskList setTodos={setTodos}  currUser={currUser} todos={todos}>
				<AddTask setTodos={setTodos}></AddTask>
			</TaskList> 
			</div>  : ""
		}
	
		</>

	);
};

export default Home;
