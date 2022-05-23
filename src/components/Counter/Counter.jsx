import React from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
 
  // NOTE: do not delete `data-cy` key value pair
  console.log(count)
  let [cnt,setCnt]=React.useState(count)
  let incr=()=>
  { if(cnt>=1)
    {
      setCnt(cnt+1)
    }
    
  }
  let dcr=()=>
  { if(cnt>=2)
    {
      setCnt(cnt-1)
    }
    
  }
  return (
    <div className={styles.counter}>
      <button style={{color:"white",backgroundColor:"blue"}}onClick={incr} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{cnt}</span>
      <button style={{color:"white",backgroundColor:"blue"}} onClick={dcr} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
