import './App.css'


import {Index} from './pages/Index'
// import {Signin} from './pages/Signin'

import {Signin} from './pages/Signin'

import {Routes, BrowserRouter, Route} from 'react-router-dom'

function App() {
  

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
    
  )
}

export default App
