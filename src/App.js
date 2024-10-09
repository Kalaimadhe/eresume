import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Portfolio from './Portfolio'

const App=()=> {
  return (
   <Router>
    <div>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App