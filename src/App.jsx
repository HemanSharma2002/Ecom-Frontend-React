import Navbar from "./Customer/Component/Navbar/Navbar"
import HomePage from "./Customer/Component/Pages/HomePage"
import Product from "./Customer/Component/Product/Product"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductDetails from "./Customer/Component/ProductDetails/ProductDetails"
import { Cart } from "./Customer/Component/Cart/Cart"
import CheckOut from "./Customer/Component/CheckOut/CheckOut"
import HomeSectionCard from "./Customer/Component/HomeCard/HomeSectionCard"
import { HomeSectionCarousel } from "./Customer/Component/HomeSectionCarosal/HomeSectionCarasol"
import { ProductPage } from "./Customer/Component/Pages/ProductPage"
import Authentication from "./Customer/Component/Auth/Authentication"
import { CartPage } from "./Customer/Component/Pages/CartPage"

function App() {
  return (
    <Authentication>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        <Route element={<HomePage/>} path="/" />
        <Route element={<ProductPage/>} path="/products/:id" />
        <Route element={<CartPage/>} path="/cart" />
        <Route element={<CheckOut/>} path="/checkout" />
        {/* <Route element={<HomeSectionCard/>} path="/lol"  />
        <Route element={<HomeSectionCarousel/>} path="/lol2"  /> */}

      </Routes>
      
    </BrowserRouter>
    </Authentication>
  )
}

export default App
