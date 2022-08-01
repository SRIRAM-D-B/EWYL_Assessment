import {useState} from 'react'
import Fetch from './Fetch'

function App() {
  const [url, setUrl] = useState(`https://randomuser.me/api/?results=10`)
  return (
    <div><Fetch url={url}/></div>
  )
}

export default App