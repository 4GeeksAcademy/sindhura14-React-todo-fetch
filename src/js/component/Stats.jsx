import React from "react";

export default function Stats({todos}){
   let numTasks = todos ? todos.length :'';

   return(
    <div className="alert alert-dark text-center">
      <p>
        {todos &&  numTasks === 0
          ? "You have no tasks to do."
          : `You have ${numTasks} tasks left`}
      </p>
    </div>

    
    
   )
}