import Navbar from './components/NavBar/Navbar'
import Title from './components/Title'
import ItenListContainer from "./components/ItenlistContainer/ItenListContainer" 
import './App.css'
import Banner from './components/Banner'
import Footer from './components/footer'
function App() {

  const stylesh1 = {
    color: "lime",
    fontSize: "10px"
  }


  return (
    <>
      <div>
        <Navbar/>
        <ItenListContainer/>
      </div>
      <div>
        <Title />
        <Banner />
        <ItenListContainer greeting={"Bienvenido a tu tienda faborita"}/>
      </div>
    </>
  )
}

export default App
