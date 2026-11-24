import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sliderData from "../../data/sliderData.json";
import "./HeroSlider.css";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(sliderData.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === sliderData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="hero-slider">

      <div
        className="hero-slide active"
        style={{
          backgroundImage: `url(${sliderData[currentSlide].image})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">
            {sliderData[currentSlide].tag}
          </p>

          <h1>
            {sliderData[currentSlide].title}
          </h1>

          <p className="hero-description">
            {sliderData[currentSlide].description}
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                navigate(sliderData[currentSlide].buttonOneLink)
              }
            >
              {sliderData[currentSlide].buttonOneText}
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                navigate(sliderData[currentSlide].buttonTwoLink)
              }
            >
              {sliderData[currentSlide].buttonTwoText}
            </button>
          </div>
        </div>
      </div>


      <div className="slider-dots">
        {sliderData.map((slide, index) => (
          <span
            key={slide.id}
            className={
              currentSlide === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default HeroSlider;