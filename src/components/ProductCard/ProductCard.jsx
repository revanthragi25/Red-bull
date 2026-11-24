import './ProductCard.css';

function ProductCard({ product }) {
  const handleBuy = () => {
    window.open(product.buyLink, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.flavor}</p>

        <div className="product-card-bottom">
          <span>₹{product.price}</span>
          <button onClick={handleBuy}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
