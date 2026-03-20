import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
