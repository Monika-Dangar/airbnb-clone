import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Experience from './pages/Experience'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
