

const Header = ({onadd}) => {
   
  return (
    <div className='heaader'>
        <h1 className='h1title'>your T-tracker here</h1>
        <button onClick={onadd}>Add</button>
    </div>
  )
}

export default Header