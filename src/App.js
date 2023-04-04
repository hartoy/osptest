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
import FieldSingletonPage from './Components/Pages/field-singleton'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoutes'
import FieldFilterPage from './Components/Pages/field-filter-page'
import CountriesFilterPage from './Components/Pages/countries-filter-page'
import PublishersFilterPage from './Components/Pages/publishers-filter-page'
import SchoolsFilterPage from './Components/Pages/schools-filter-page'
import AuthorsFilterPage from './Components/Pages/authors-filter-page'
import TitlesFilterPage from './Components/Pages/titles-filter-page'
import SyllabyFilterPage from './Components/Pages/syllabi-filter-page'
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
              <Route path="fields" element={<FieldFilterPage />} />
              <Route path="syllaby" element={<SyllabyFilterPage />} />
              <Route path="titles" element={<TitlesFilterPage />} />
              <Route path="authors" element={<AuthorsFilterPage />} />
              <Route path="schools" element={<SchoolsFilterPage />} />
              <Route path="publishers" element={<PublishersFilterPage />} />
              <Route path="countries" element={<CountriesFilterPage />} />
              <Route path="singleton/fields/:id" element={<FieldSingletonPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      <Footer />
    </>
  )
}

export default App
