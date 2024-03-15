
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import BookDetails from './pages/BookDetails'
import WantToRead from './pages/WantToRead'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/bookdetails/:id' element={<BookDetails/>}/>
      <Route path='/wanttoread' element={<WantToRead/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
