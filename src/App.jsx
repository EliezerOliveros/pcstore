import Navbar from './components/NavBar/Navbar'
import Title from './components/Title'
import ItemListContainerWithHoc from "./components/ItenlistContainer/ItemListContainer"
import Banner from './components/Banner'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Navbar/>
          <Banner />
          <Routes>

           <Route path="/" />
           <Route path="/Products" element={ <ItemListContainerWithHoc /> } />
          
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
