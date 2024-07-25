import ProductItem from '@/components/ProductItem';
import products1 from '../../public/products1.json';
import products2 from '../../public/products2.json';

const ProductList = ({ addToCart }) => {
  return (
    <div className="row">
      {products1.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}

      {products2.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}

    </div>
  );
};

export default ProductList;
