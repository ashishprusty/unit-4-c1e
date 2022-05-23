import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({setUserdata,userdata}) => {
  // NOTE: do not delete `data-cy` key value pair
  let[input,setInput]=React.useState("")
  let handleinput=(e)=>{
    setInput(e.target.value)
  }
  let add=()=>{
    userdata.push({id:8,text:input,done:false,count:1})
    setUserdata(userdata)
    console.log("added userdata",userdata)}
  return (
    <div className={styles.todoForm}>
      <input placeholder="add task"value={input} onChange={handleinput}style={{width:"80%"}}data-cy="add-task-input" type="text" />
      <button onClick={add} style={{width:"10%"}}data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
