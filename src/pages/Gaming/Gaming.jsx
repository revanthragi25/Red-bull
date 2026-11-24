function Gaming() {
  const gamingItems = [
    {
      id: 1,
      title: "Esports Energy",
      text: "Experience the excitement of professional esports tournaments and competitive gaming.",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.esports.net/"
    },
    {
      id: 2,
      title: "Creator Spotlight",
      text: "Discover top streamers, content creators and gaming influencers.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.twitch.tv/"
    },
    {
      id: 3,
      title: "Competitive Arena",
      text: "Explore international gaming competitions and championship events.",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80",
      website: "https://playvalorant.com/"
    },
    {
      id: 4,
      title: "Minecraft Universe",
      text: "Build, explore and survive in one of the world's most creative games.",
      image:
        "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.minecraft.net/"
    },
    {
      id: 5,
      title: "Fortnite Battle Royale",
      text: "Jump into action-packed battles and live gaming events.",
      image:
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.fortnite.com/"
    },
    {
      id: 6,
      title: "League of Legends",
      text: "Master strategy, teamwork and skill in one of the biggest esports titles.",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.leagueoflegends.com/"
    },
    {
      id: 7,
      title: "Counter-Strike 2",
      text: "Experience tactical FPS gameplay and global esports tournaments.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.counter-strike.net/"
    },
    {
      id: 8,
      title: "PUBG Battlegrounds",
      text: "Drop into massive battlefields and compete for survival.",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
      website: "https://pubg.com/"
    },
    {
      id: 9,
      title: "Red Bull Gaming",
      text: "Explore gaming tournaments, esports athletes and creator events from Red Bull.",
      image:
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1200&q=80",
      website: "https://www.redbull.com/int-en/hubs/gaming"
    }
  ];

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Gaming</h1>
          <p>Explore the world of gaming and esports.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container page-grid">
          {gamingItems.map((item) => (
            <div className="page-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="page-card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <button
                  className="view-btn"  style={{
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
  }}
                  onClick={() =>
                    window.open(item.website, "_blank")
                  }
                >
                  Visit Website
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gaming;