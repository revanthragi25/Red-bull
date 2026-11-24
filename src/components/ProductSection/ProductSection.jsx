import { useNavigate } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

function ProductSection({ showAll = false }) {
  const navigate = useNavigate();
  const displayedProducts = showAll ? productsData : productsData.slice(0, 4);

  return (
    <section className="product-section light-section section">
      <div className="container">
        <div className="product-top">
          <h2 className="product-title">Energy Drinks</h2>
          {!showAll && (
            <button className="view-products-btn" onClick={() => navigate('/products')}>
              View All
            </button>
          )}
        </div>

        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
