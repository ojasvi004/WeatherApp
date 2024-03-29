import { useState } from 'react'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Search/>
    </div>
  )
}

export default App
