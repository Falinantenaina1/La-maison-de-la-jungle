import { useEffect, useState } from "react"
import "./app.css"
import Banner from "./components/Banner"
import Cart from "./components/Cart"
import ShoppingList from "./components/ShoppingList"

const App = () => {

  const [isShow, setIsShow] = useState(false)
  
  const [cart, updateCart] = useState([])

  useEffect(() => {
    document.title = "La maison de la jungle"
  }, [])

  return <>
    <Banner />
    <div className="container">
      <button className="show-hide-cart-btn" onClick={e => setIsShow(v => !v)}>{isShow ? "Masquer" : "Afficer"} le panier</button>
      <ShoppingList cart={cart} updateCart={updateCart} />
      {isShow && <Cart cart={cart} updateCart={updateCart} />}
    </div>

  </>
}

export default App