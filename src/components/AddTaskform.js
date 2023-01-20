import { useState } from "react"

const AddTaskform = ({onadd}) => {
    const [task, setAddtask] = useState("")
    function handlechange(e){
       setAddtask(e.target.value)
    }
    const onSubmit =(e) =>{
       e.preventDefault();
       if (!task){
        
        return
       }
       onadd(task)
       
       setAddtask("")
       
    }
     
   
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="" value={task} id="" className="inputtext" onChange={handlechange} />
        <input type="submit" value="saves"  className="inputsave"/>

    </form>
  )
}

export default AddTaskform