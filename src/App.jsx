
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
 

  return (
    <>
     <Routes>
     <Route expact path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
    </>
  )
}

export default App
