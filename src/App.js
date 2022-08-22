import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Components/SingUp/SingUp";
import ProductDetails from "./Components/ProductDetail/ProductDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Product/Products";

function App() {
  return (
    <>
      {/* <Header/>
    <HeaderStyle/> */}
      {/* <Login/> */}
      {/* <Login2/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="header" element={<Header />}>
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="products" element={<Products />} />
          </Route>

          <Route path="/singup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
