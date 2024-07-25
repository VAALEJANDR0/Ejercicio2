const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      updateQuantity(item.id, value);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '50px' }} />
      <div className="flex-grow-1 mx-3">
        <h6>{item.name}</h6>
        <p>${item.price}</p>
        <input 
          type="number" 
          value={item.quantity} 
          className="form-control" 
          style={{ width: '60px' }} 
          onChange={handleChange} 
        />
      </div>
      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
