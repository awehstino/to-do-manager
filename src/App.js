import AddTaskform from "./components/AddTaskform";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
const App = () => {
  const [showaddTask, setshowaddTask] = useState(false)
  const [tasks, setTasks] = useState(["ayomide codm player","liminydo codm player","Gun smoke codm player","callme dammy codm player","dolipee codm player"])
  const addtask = (task)=>{
    
    
    setTasks([...tasks, task])
  }
  //for deleting task
  const deleteTask = (id) =>{
   setTasks(tasks.filter((task)=> task.id !== id))
  }
  
  return (
    <div className="container">
      <Header onadd={()=> setshowaddTask (!showaddTask) } />
      {showaddTask && <AddTaskform   onadd={addtask}/>}
      <hr />
      <Tasks tasks={tasks} />
    </div>
  )  
}

export default App