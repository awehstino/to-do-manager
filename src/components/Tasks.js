import {FaTimes} from "react-icons/fa"
const Tasks = ({tasks, ondelete}) => {
  return (
    <ul>
    { tasks.map((task , id)=> <li key={task.id}> <FaTimes onClick={()=>ondelete(task.id)} style={{color:"red", cursor:"pointer"}} className="fa-margin"/>{task.text}</li>)}
    </ul>
  )
}

export default Tasks