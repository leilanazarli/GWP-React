import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
const BASE_URL="https://jsonplaceholder.typicode.com/users"
function App() {
  const [count, setCount] = useState([])
  
  const getUsers= async()=>{
  let res = await axios(BASE_URL)
  let data= res.data
  }
  useEffect(() => {
    getUsers()
  }, []);
    return(
     <div className='App'>
     <cards count={count}/>
     </div>
    )
}

export default App
