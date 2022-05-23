import React from "react";
import TaskApp from "../src/components/TaskApp"
import style from "../src/components/TaskHeader/taskHeader.module.css"
import data from "./data/tasks.json"

function App() {
  let [userdata,setUserdata]=React.useState(data)
let [completed,setCompleted]=React.useState([])

  return <div>{
    <TaskApp completed={completed}setCompleted={setCompleted} userdata={userdata} setUserdata={setUserdata} className={style.taskHeader}/>
    }</div>;
}

export default App;
