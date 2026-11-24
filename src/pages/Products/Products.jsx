import ProductSection from '../../components/ProductSection/ProductSection';

function Products() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Energy Drinks</h1>
        </div>
      </section>

      <ProductSection showAll={true} />
    </>
  );
}

export default Products;
