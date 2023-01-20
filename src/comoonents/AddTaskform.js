import { useState } from "react"

const AddTaskform = (props) => {
    const [task, setAddtask] = useState("")
    function handlechange(e){
       setAddtask(e.target.value)
    }
    function handlesubmit(e) {
        props.handlesubmit(task)
        setAddtask("")
        e.preventDefault();
    }
    
   
  return (
    <form onSubmit={handlesubmit}>
        <input type="text" name="" value={task} id="" className="inputtext" onChange={handlechange} />
        <input type="submit" value="saves"  className="inputsave"/>

    </form>
  )
}

export default AddTaskform