import storiesData from '../../data/storiesData.json';
import './StorySection.css';

function StorySection() {
  return (
    <section className="story-section dark-section section">
      <div className="container">
        <p className="section-subtitle">Latest Stories</p>
        <div className="story-top">
          <h2 className="section-title">Beyond the Ordinary</h2>
          <a href="/videos" className="view-all-link">
            View All
          </a>
        </div>

        <div className="story-grid">
          {storiesData.map((story) => (
            <div className="story-card" key={story.id}>
              <img src={story.image} alt={story.title} />
              <div className="story-overlay"></div>

              <div className="story-badges">
                <span>{story.category}</span>
               
              </div>

              <div className="story-content">
                <h3>{story.title}</h3>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StorySection;
