import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({setUserdata,userdata,completed,setCompleted}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log("in tasks",userdata)
  return (
    <>
      
      <ul data-cy="tasks" className={styles.tasks}>
        {userdata.map((el)=>(
            <Task setUserdata={setUserdata} userdata={userdata} completed={completed} setCompleted={setCompleted} el={el}/>
        ))
            
        
          
          }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
