import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Components/SingUp/SingUp";
import ProductDetails from "./Components/ProductDetail/ProductDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Product/Products";
import UserProfile from "./Components/userProfile/UserProfile";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Components/Order/Orders";
import OrderDetails from "./Components/OrderDetails/OrderDetails";

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
            <Route path="productDetails/:id" element={<ProductDetails />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/singup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Edit" element={<UserProfile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/myorders" element={<Orders />} />
          <Route path="/orderDetails/:id" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
