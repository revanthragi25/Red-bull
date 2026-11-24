import athletesData from '../../data/athletesData.json';

function Athletes() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Athletes</h1>
        </div>
      </section>

      <section className="page-content">
        <div className="container page-grid">
          {athletesData.map((athlete) => (
            <div className="page-card" key={athlete.id}>
              <img src={athlete.image} alt={athlete.name} />
              <div className="page-card-content">
                <h3>{athlete.name}</h3>
                <p>
                  <strong>Sport:</strong> {athlete.sport}
                </p>
                <p>
                  <strong>Country:</strong> {athlete.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Athletes;
