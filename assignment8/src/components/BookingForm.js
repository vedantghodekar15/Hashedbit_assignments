import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.mobile) {
      alert("Please fill all fields");
      return;
    }

    navigate("/confirm", { state: form });
  };

  return (
    <div style={{ background: "#111", minHeight: "100vh", color: "white", textAlign: "center", padding: "40px" }}>
      
      <h2>Booking Form</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Name"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />

        <input
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />

        <input
          placeholder="Mobile"
          style={inputStyle}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <br />

        <button onClick={handleSubmit} style={btnStyle}>
          Submit
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "250px",
  borderRadius: "5px",
  border: "none"
};

const btnStyle = {
  padding: "10px 20px",
  background: "#e50914",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default BookingForm;
