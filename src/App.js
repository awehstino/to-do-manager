import AddTaskform from "./components/AddTaskform";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Message from "./components/Message";
import { useState } from "react";
const App = () => {
  const [showaddTask, setshowaddTask] = useState(false)
const [tasks, setTasks] = useState([{id :1, text:"ayomide codm player"}, {id :2, text:"liminydo codm player"},{id :3, text:"Gun smoke codm player"}, {id :4, text:"callme dammy codm player"}, {id :5, text:"dolipee codm player"}])
  const addtask = (text)=>{
    const id = Math.floor(Math.random()* 10000)+1
    const newtask = { id, ...text}
    setTasks([...tasks, newtask])
    console.log(newtask)
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
      { tasks.length > 0 ? <Tasks tasks={tasks}  ondelete={deleteTask}/> : <Message />}
    </div>
  )  
}

export default App