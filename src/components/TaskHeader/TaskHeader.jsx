import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({userdata,completed}) => {
  // sample values to be replaced
  let totalTask = userdata.length;
  let unCompletedTask = completed.length;
 console.log("in header",completed)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>To Do List</h1>
      <b data-cy="header-remaining-task"><p> pending Task </p>{unCompletedTask}</b>
      <b data-cy="header-total-task"><p> Total Task </p>{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
