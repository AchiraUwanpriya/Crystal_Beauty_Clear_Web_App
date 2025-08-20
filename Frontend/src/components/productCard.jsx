export default function ProductCard(props) {
    return(
        <div className="product-card">
            <h1>{props.productName}</h1>
            <p>{props.productPrice}</p>
            <img className="product-img" src={props.productImage} alt={props.productName} />
            <button>Add to Cart</button>
        </div>
    )
}