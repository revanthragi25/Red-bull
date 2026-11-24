import storiesData from '../../data/storiesData.json';

function Videos() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Life & Stories</h1>
        </div>
      </section>

      <section className="page-content">
        <div className="container page-grid">
          {storiesData.map((story) => (
            <div className="page-card" key={story.id}>
              <img src={story.image} alt={story.title} />
              <div className="page-card-content">
                <h3>{story.title}</h3>
                <p>
                  <strong>Category:</strong> {story.category}
                </p>
                <p>
                  <strong>Duration:</strong> {story.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Videos;
