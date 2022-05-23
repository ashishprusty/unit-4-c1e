import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = ({el,setUserdata,userdata, completed, setCompleted}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  let [status,setStatus]=React.useState(false)
  let remove=(text)=>{
    setCompleted(completed.filter((item)=>(item.text!==text)))
   }
  let deleteitem=(text)=>{
    setUserdata(userdata.filter((item)=>(item.text!==text)))
  }
  let check=(e)=>
  {
    if(e.target.checked)
    {
      console.log("true")
      setStatus(true)
      completed.push(el)
      setCompleted(completed)
      console.log("completed arr",completed)
    }
    else{
      console.log("false")
      setStatus(false)
      remove(el.text)
     console.log("completed arr",completed)
    }
  }
  return (
    <div>
        <li data-cy="task" className={styles.task}>
      <input onChange={check} type="checkbox" data-cy="task-checkbox" />
      {status ? <div  data-cy="task-text"><s>{el.text}</s></div>:<div data-cy="task-text">{el.text}</div>}
      {<Counter count={el.count}/>}
      <button onClick={()=>deleteitem(el.text)} data-cy="task-remove-button">x</button>
      </li>
    </div>
    
  );
};

export default Task;
