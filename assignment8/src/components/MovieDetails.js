import { useParams, useNavigate } from "react-router-dom";
import movies from "../data";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id == id);

  return (
    <div style={{ background: "#111", minHeight: "100vh", color: "white", textAlign: "center", padding: "40px" }}>
      
      <h1>{movie.name}</h1>

      <img
        src={movie.image}
        alt=""
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      />

      <br /><br />

      <button
        onClick={() => navigate("/book")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          background: "#e50914",
          color: "white",
          cursor: "pointer"
        }}
      >
        🎟️ Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
