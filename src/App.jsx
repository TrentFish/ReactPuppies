import { useState } from 'react'
import {puppyList} from './pupData.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  return (<div className='App'>
    { 
   puppies.map((puppy) => {
     return <p>{puppy.name}</p>
   })
}
  </div>
  )
}

export default App
