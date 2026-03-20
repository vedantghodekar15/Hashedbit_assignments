import movies from "../data";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "20px" }}>
      
      {/* Title */}
      <h1 style={{ color: "white", textAlign: "center" }}>
        🎬 Movie Booking
      </h1>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {movies.map((m) => (
          <div
            key={m.id}
            onClick={() => navigate(`/movie/${m.id}`)}
            style={{
              background: "#222",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
            src={m.image}
            alt={m.name}
            style={{
                width: "100%",
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover"
            }}
            />
            <h3 style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
              {m.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
