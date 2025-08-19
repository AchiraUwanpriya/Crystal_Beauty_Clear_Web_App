import './App.css'
import ProductCard from './components/productCard'

function App() {


  return (
    <>
      {/* <h1 className='text-[#49779b] text-2xl'>Hi I'm Achira</h1>
      <ProductCard productName="Apple iPad" productPrice="$499" productImage="https://www.apple.com/assets-www/en_WW/ipad/product_tile/large/ipad_pro_a34a77d86_2x.png" /> 
      <ProductCard productName="Apple Macbook" productPrice="$1299" productImage="https://www.apple.com/v/macbook-pro/as/images/overview/contrast/product_tile_mba_13_15__eeei743kn5me_large_2x.png" />  */}

        <div className='h-[700px] w-[700px] border-[5px] flex justify-center items-center'>

        {/* <div className='h-[600px] w-[600px] bg-amber-300 flex flex-col justify-center items-center' >

          <div className='h-[100px] w-[100px] bg-red-500'></div>
          <div className='h-[100px] w-[100px] bg-blue-500'></div>
          <div className='h-[100px] w-[100px] bg-green-500'></div>
          <div className='h-[100px] w-[100px] bg-pink-500'></div>
          <div className='h-[100px] w-[100px] bg-gray-500'></div>
        
        </div> */}
          <div className='w-[300px] h-[100px] bg-blue-400 flex justify-center items-center relative '>
           <button className='bg-red-500 absolute top-[0px] right-[0px] m-[5px] '>X</button>
           <button className='bg-green-500 text-white fixed right-[10px] bottom-[10px] p-[20px]'>Chat With Whatsapp</button>
            <h1>Your time has over now</h1>
          </div>

        </div>

    </>
  )
}

export default App
