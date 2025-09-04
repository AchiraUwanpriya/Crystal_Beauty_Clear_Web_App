export default function ProductCard(props) {

  const product = props.product;
  return (
    <div className="w-[300px] h-[400px] shadow-2xl m-3 flex flex-col p-[10px]">
       
<img className="w-full h-[250px] object-cover" src={product.images[0]} alt={product.productName} />
<h1 className="text-lg font-semibold text-secondary">{product.productName}</h1>
{
  product.labelledPrice > product.price ?
  <div>
  <p className="text-secondary text-md line-through">LKR {product.labelledPrice.toFixed(2)}</p>
  <p className="text-accent text-md ">LKR {product.price.toFixed(2)}</p>
  </div>
  :
  <p className="text-accent text-md ">LKR {product.price.toFixed(2)}</p>
}
<p className="text-secondary/70 text-sm ">{product.productID}</p>
<p className="text-secondary/70 text-sm ">{product.category}</p>

<button className="w-full h-[30px] border border-accent text-accent hover:bg-accent hover:text-white my-[5px]">View Product</button>

    </div>
    
  
  );
}
