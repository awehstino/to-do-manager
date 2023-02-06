import { useState } from "react"

const AddTaskform = ({onadd}) => {
    const [text, setAddtask] = useState("")
    function handlechange(e){
       setAddtask(e.target.value)
    }
    const onSubmit =(e) =>{
       e.preventDefault();
       if (!text){
        
        return
       }
       onadd({text})
       
       setAddtask("")
       
    }
     
   
  return (
    <form onSubmit={onSubmit}>
        <input type="text"  value={text} id="" className="inputtext" onChange={handlechange} />
        <input type="submit" value="saves"  className="inputsave"/>

    </form>
  )
}

export default AddTaskform