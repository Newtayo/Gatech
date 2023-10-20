import { useState } from 'react'
import './assets/components/interest.css'

import InterestForm from './assets/components/InterestForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contain'>
      <InterestForm />       
    </div>
  )
}

export default App
