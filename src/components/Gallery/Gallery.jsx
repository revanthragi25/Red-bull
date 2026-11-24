import galleryData from '../../data/galleryData.json';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery-section section">
      <div className="container">
        <h2 className="gallery-heading">More from Red Bull</h2>

        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
