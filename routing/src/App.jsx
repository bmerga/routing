import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Profile from './Components/Profile'
import NavBar from './Components/NavBar'
function App() {
  
  return (
    <>
    
     <Router>
      <NavBar/>
     React Router
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
     </Routes>
    </Router>
    </>
   
  )
}

export default App
