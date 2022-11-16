import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './Components/Footer/index'
import Navbar from './Components/Navbar/index'

import Home from './Components/Pages/home'
import Revisions from './Components/Pages/revisions'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="revisions" element={<Revisions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
