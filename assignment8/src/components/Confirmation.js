import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div style={{ background: "#111", minHeight: "100vh", color: "white", textAlign: "center", padding: "40px" }}>
      
      <h2>✅ Seat Booked Successfully</h2>

      <h3>Booking ID: {bookingId}</h3>

      <div style={{ marginTop: "20px" }}>
        <p>Name: {state?.name}</p>
        <p>Email: {state?.email}</p>
        <p>Mobile: {state?.mobile}</p>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Confirmation;
