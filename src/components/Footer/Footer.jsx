import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Red Bull Inspired</h2>
          <p>
            A React multi-page styled frontend project with routing, reusable
            components, carousel, product section and gallery.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/sports">Sports</a>
          <a href="/events">Events</a>
          <a href="/athletes">Athletes</a>
          <a href="/videos">Videos</a>
          <a href="/gaming">Gaming</a>
          <a href="/products">Products</a>
        </div>

        <div className="footer-links">
          <h4>Features</h4>
          <p>React Router Navigation</p>
          <p>Hero Carousel</p>
          <p>Reusable Cards</p>
          <p>Responsive UI</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built with React for learning and portfolio demonstration.</p>
      </div>
    </footer>
  );
}

export default Footer;
