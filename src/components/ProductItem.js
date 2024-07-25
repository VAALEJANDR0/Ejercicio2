const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 d-flex flex-column">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
          style={{ height: '250px', objectFit: 'contain' }} 
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
          </div>
          <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
