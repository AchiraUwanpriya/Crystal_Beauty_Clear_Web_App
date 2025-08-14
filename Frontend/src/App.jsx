import './App.css'
import ProductCard from './components/productCard'

function App() {


  return (
    <>
      <h1>Hi I'm Achira</h1>
      <ProductCard productName="Apple iPad" productPrice="$499" productImage="https://www.apple.com/assets-www/en_WW/ipad/product_tile/large/ipad_pro_a34a77d86_2x.png" /> 
      <ProductCard productName="Apple Macbook" productPrice="$1299" productImage="https://www.apple.com/v/macbook-pro/as/images/overview/contrast/product_tile_mba_13_15__eeei743kn5me_large_2x.png" /> 
    </>
  )
}

export default App
