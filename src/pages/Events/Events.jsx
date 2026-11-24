function Events() {
  const events = [
    {
      id: 1,
      title: "Street Culture Events",
      text: "Music, dance and lifestyle experiences designed around youth culture.",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/in-en/events"
    },
    {
      id: 2,
      title: "Formula 1 Race Weekends",
      text: "High-speed racing, pit lane drama and unforgettable championship battles.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.formula1.com/"
    },
    {
      id: 3,
      title: "Adventure Gatherings",
      text: "Outdoor experiences bringing together athletes and thrill seekers.",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/int-en/events"
    },
    {
      id: 4,
      title: "Red Bull Air Race",
      text: "Pilots compete through challenging aerial courses at incredible speeds.",
      image:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/int-en/events"
    },
    {
      id: 5,
      title: "Mountain Bike Festivals",
      text: "Watch elite riders tackle impossible downhill trails and jumps.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/int-en/tags/mountain-bike"
    },
    {
      id: 6,
      title: "Snowboarding Championships",
      text: "The world's best snowboarders compete in spectacular winter conditions.",
      image:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.fis-ski.com/"
    },
    {
      id: 7,
      title: "Surfing Competitions",
      text: "Witness surfers take on giant waves and challenging ocean conditions.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.worldsurfleague.com/"
    },
    {
      id: 8,
      title: "Esports Tournaments",
      text: "Global gaming events featuring the world's top esports teams.",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/int-en/hubs/gaming"
    }
  ];

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Events</h1>
          <p>Explore exciting sports, gaming and adventure events.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container page-grid">
          {events.map((event) => (
            <div className="page-card" key={event.id}>
              <img src={event.image} alt={event.title} />

              <div className="page-card-content">
                <h3>{event.title}</h3>
                <p>{event.text}</p>

                <button
                  style={{
                    backgroundColor: "#db0011",
                    color: "white",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    marginTop: "15px",
                    fontWeight: "600"
                  }}
                  onClick={() =>
                    window.open(event.website, "_blank")
                  }
                >
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;