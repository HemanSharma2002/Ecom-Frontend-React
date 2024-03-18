import Navbar from "./Customer/Component/Navbar/Navbar"
import HomePage from "./Customer/Component/Pages/HomePage"
import Product from "./Customer/Component/Product/Product"
import {BrowserRouter,Router,Route} from "react-router-dom"
import ProductDetails from "./Customer/Component/ProductDetails/ProductDetails"
import { Cart } from "./Customer/Component/Cart/Cart"
import CheckOut from "./Customer/Component/CheckOut/CheckOut"

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Navbar/>
      <div >
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <CheckOut/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
