const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <p><strong>Brand: </strong>{product.brand}</p>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>Description: </strong>{product.description}</p>
            <img src={product.imageURL} width="200" height="200"></img>
            <p>{product.createdAt}</p>
        </div>
    )
}

export default ProductDetails