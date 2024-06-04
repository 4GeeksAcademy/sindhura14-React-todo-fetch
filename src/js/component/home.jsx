import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddUser from "./AddUser";
import GetUser from "./GetUser";
import AddTask from "./AddTask";




//create your first component
const Home = () => {

	const [todos,setTodos] = useState();
	

		async function handleDeleteTodo(id){
			setTodos((currTodos) => todos.filter((todo => todo.id !== id)));
			const resp = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
				method:"DELETE",
				headers: {
					"Content-Type": "application/json"
				  }
			});
		}

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

		async function handleFinishedTodos(id){
	
			setTodos(todos => todos.map(todo => todo.id ===id ? {...todo,is_done:!todo.is_done} : todo))
			const index = todos.findIndex(todo => todo.id === id);
			const label = todos[index].label;
			const todo = {label,is_done:true}
			const resp = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
				method:"PUT",
				body:JSON.stringify(todo),
				headers: {
					"Content-Type": "application/json"
				  }
			});
		}



	return (
		<div className="text-center">
			<AddUser></AddUser>			
			<GetUser setAllTodos={setTodos}></GetUser>
			<TaskList todos={todos}></TaskList> 
            <AddTask setTodos={setTodos}></AddTask>
		</div>
	);
};

export default Home;
