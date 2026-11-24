import athletesData from '../../data/athletesData.json';
import './AthleteSection.css';

function AthleteSection() {
  return (
    <section className="athlete-section dark-section section">
      <div className="container">
        <div className="athlete-top">
          <h2 className="section-title">Wings Earned</h2>
          <a href="/athletes" className="view-all-link">
            See All Athletes
          </a>
        </div>

        <div className="athlete-grid">
          {athletesData.map((athlete) => (
            <div className="athlete-card" key={athlete.id}>
              <img src={athlete.image} alt={athlete.name} />
              <div className="athlete-card-overlay"></div>

              <span className="country-badge">{athlete.country}</span>

              <div className="athlete-info">
                <p className="sport">{athlete.sport}</p>
                <h3>{athlete.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AthleteSection;
