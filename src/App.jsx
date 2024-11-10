import Navbar from "./components/NavBar/Navbar";
import ItemListContainerWithHoc from "./components/ItenlistContainer/ItemListContainer";
import Banner from "./components/Banner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FindUs from "./components/findUs/Findus";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <ToastContainer theme="dark" />
          <Banner />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainerWithHoc category="all" />}
            />
            <Route
              path="/category/consola"
              element={<ItemListContainerWithHoc category="consolas" />}
            />
            <Route
              path="/category/keyboard"
              element={<ItemListContainerWithHoc category="teclados" />}
            />
            <Route
              path="/category/mouse"
              element={<ItemListContainerWithHoc category="mouse" />}
            />
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/FindUs" element={<FindUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
