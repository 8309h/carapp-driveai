import React, { useState, useEffect } from "react";
import { getCars } from "./api";



import CarList from "./components/CarList";
import Comparison from "./components/Comparison";   
import BookingForm from "./components/BookingForm";
import AIChat from "./components/AIChat";
import Hero from "./components/Hero";            

function App() {
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Load cars on first render (dashboard view)
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        setCars(data || []);
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <Hero />

      {/* LOADING STATE */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>Loading cars...</h2>
        </div>
      ) : (
        <>
          {/* CAR LIST */}
          <CarList cars={cars} />

          {/* COMPARISON */}
          <Comparison cars={selectedCars} />

          {/* BOOKING FORM */}
          <BookingForm booking={booking} />
        </>
      )}

      {/* AI ASSISTANT */}
      <AIChat
        setCars={setCars}
        setSelectedCars={setSelectedCars}
        setBooking={setBooking}
      />
    </div>
  );
}

export default App;