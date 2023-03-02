import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Layout from './Layout'
import Context from './contexts'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Favorite from './components/Favorite'
import MostPlayedSongs from './components/MostPlayedSongs'

const App = () => {
  // jsx
  return (
    <Context>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/most-played' element={<MostPlayedSongs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Layout>
    </Context>
  )
}
export default App