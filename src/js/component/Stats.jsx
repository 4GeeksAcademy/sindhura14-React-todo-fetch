import React from "react";

export default function Stats({tasks}){
   let numTasks = tasks.length;

   return(
    
       <p>
        {numTasks === 0
          ? "You have no tasks to do."
          : `You have ${numTasks} tasks left`}
      </p>
    
    
   )
}