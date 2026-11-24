function Sports() {
  const sports = [
    {
      id: 1,
      title: "Formula 1 Racing",
      text: "Experience high-speed racing, pit stop strategies and championship battles from the world of Formula 1.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        sport: "https://www.formula1.com/"
    },
    {
      id: 2,
      title: "Football",
      text: "Discover elite football skills, training sessions, tournaments and unforgettable match moments.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
          sport: "https://www.fifa.com/"
    },
    {
      id: 3,
      title: "Basketball",
      text: "Explore slam dunks, streetball culture and professional basketball highlights.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
         sport: "https://www.nba.com/"
    },
    {
      id: 4,
      title: "Cricket",
      text: "From powerful sixes to match-winning performances, enjoy the excitement of cricket.",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
         sport: "https://www.icc-cricket.com/"
    },
    {
      id: 5,
      title: "Mountain Biking",
      text: "Ride through challenging trails, breathtaking landscapes and thrilling downhill action.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
        sport: "https://www.redbull.com/int-en/tags/mountain-bike"

    },
    {
      id: 6,
      title: "Snowboarding",
      text: "Witness incredible tricks, snowy adventures and world-class snowboarding events.",
      image:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80",
         sport: "https://www.fis-ski.com/"
    },
    {
      id: 7,
      title: "Surfing",
      text: "Ride giant waves and explore the world's most exciting surfing destinations.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
         sport: "https://www.worldsurfleague.com/"
    },
    {
      id: 8,
      title: "Skateboarding",
      text: "Street culture, creativity and incredible tricks define the world of skateboarding.",
      image:
        "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=1200&q=80",
         sport: "https://olympics.com/en/sports/skateboarding/"
    },
    {
      id: 9,
      title: "Esports",
      text: "Compete in intense gaming tournaments and experience the future of competitive entertainment.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
         sport: "https://www.esports.net/"
    
    }
  ];

  return (
    <>
      <section className="page-banner" >
        <div className="container">
          <h1>Sports</h1>
          <p>Explore the world of sports and adventure.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container page-grid">
          {sports.map((sport) => (
            <div className="page-card" key={sport.id}>
              <img src={sport.image} alt={sport.title} />

              <div className="page-card-content">
                <h3>{sport.title}</h3>
                <p>{sport.text}</p>
               <button onClick={() => window.open(sport.sport, "_blank")} style={{
    background: "linear-gradient(135deg, #1e0d8d, #220391)",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "15px",
    boxShadow: "0 4px 12px rgba(0, 7, 219, 0.4)",
    transition: "all 0.3s ease"
  }}>View</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sports;