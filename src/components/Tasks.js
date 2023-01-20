

const Tasks = ({tasks}) => {
  return (
    <ul>
    { tasks.map((task , id)=><li key={id} >{task}</li>)}
    </ul>
  )
}

export default Tasks