import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './Components/Footer/index'
import Navbar from './Components/Navbar/index'

import Home from './Components/Pages/home'
import Revisions from './Components/Pages/revisions'
import LoginComp from './Components/Pages/login'
import NotFoundComp from './Components/Pages/notfound'
import SingletonPage from './Components/Pages/singleton'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoutes'
import UpdateInfo from './Components/Pages/update-info'
import AuthContextProvider from './authContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginComp />} />
              <Route index path="/" element={<Home />} />
              <Route path="*" element={<NotFoundComp />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="revisions" element={<Revisions />} />
              <Route path="singleton/:id" element={<SingletonPage />} />
              <Route path="update-info" element={<UpdateInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      <Footer />
    </>
  )
}

export default App
