import React from "react";

function AthleteDetails() {
  const athlete = {
    name: "KL Rahul",
    country: "India",
    sport: "Cricket",
    image:
      "https://i.cdn.newsbytesapp.com/images/l31120251014131857.jpeg",
    profile:
      "A tall, elegant right-hand batsman who can keep wicket in a crisis, KL Rahul is among the most highly rated opening batsmen in India's current set-up.",
    dob: "18 April 1992",
    age: 34,
    nationality: "India",
    careerStart: 2010,
    discipline: "Cricket",
  };

  return (
    <div
      style={{
        background: "#071c4d",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          height: "90vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(7,28,77,.9)), url(${athlete.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <img
            src="https://pbs.twimg.com/media/GlqvXnZbAAA6Hni.jpg"
            alt=""
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              border: "4px solid white",
            }}
          />

          <h1
            style={{
              fontSize: "5rem",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            {athlete.name}
          </h1>

          <p style={{ fontSize: "1.2rem" }}>
            🇮🇳 {athlete.country} • {athlete.sport}
          </p>
        </div>
      </section>

      {/* Info Card */}
      <section
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "-80px auto 50px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(45,114,255,.5), rgba(0,0,0,.2))",
            padding: "30px",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div>
            <h4>Date of Birth</h4>
            <p>{athlete.dob}</p>
          </div>

          <div>
            <h4>Age</h4>
            <p>{athlete.age}</p>
          </div>

          <div>
            <h4>Nationality</h4>
            <p>{athlete.nationality}</p>
          </div>

          <div>
            <h4>Career Start</h4>
            <p>{athlete.careerStart}</p>
          </div>

          <div>
            <h4>Discipline</h4>
            <p>{athlete.discipline}</p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            fontSize: "2rem",
          }}
        >
          Biography
        </h2>

        <p
          style={{
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#ddd",
          }}
        >
          {athlete.profile}
        </p>

        <p
          style={{
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#ddd",
            marginTop: "25px",
          }}
        >
          He was a part of India's squad in the 2010 Under-19 World Cup and
          made his first-class debut later that year. After finishing as top
          run getter in domestic cricket, he earned a place in the national
          squad and established himself as one of India's premier batsmen.
        </p>

        <p
          style={{
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#ddd",
            marginTop: "25px",
          }}
        >
          Known for his elegant batting style, wicket-keeping skills, and
          versatility across formats, KL Rahul has become one of the most
          dependable players in modern cricket.
        </p>
      </section>
    </div>
  );
}

export default AthleteDetails;