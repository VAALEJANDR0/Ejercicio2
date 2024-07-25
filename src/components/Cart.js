import CartItem from '@/components/CartItem';


const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card">
      <div className="card-body">
        {cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
          />
        ))}
        <div className="total mt-3">
          <h5>Total a Pagar: ${total.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
