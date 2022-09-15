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
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Components/Login/ForgotPassword";
import SetPassword from "./Components/Login/SetPassword";
import ProductByCat from "./Components/Product/ProductByCat";
import Formimage from "./Formimage";
function App() {
  return (
    <>
      {/* <Header/>
    <HeaderStyle/> */}
      {/* <Login/> */}
      {/* <Login2/> */}
      {/* <ToastContainer> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="header" element={<Header />}>
            <Route path="productDetails/:id" element={<ProductDetails />} />
            <Route path="products" element={<Products />} />
            <Route path="productsbycat/:id" element={<ProductByCat />} />
          </Route>

          <Route path="/singup" element={<SignUp />} />
          <Route path="/form" element={<Formimage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setpassword/:id" element={<SetPassword />} />
          <Route path="/Edit" element={<UserProfile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/myorders" element={<Orders />} />
          <Route path="/orderDetails/:id" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </ToastContainer> */}
    </>
  );
}

export default App;
