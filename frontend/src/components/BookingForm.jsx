import { useState, useEffect } from "react";
import { createBooking } from "../api";

const BookingForm = ({ booking }) => {
      const [form, setForm] = useState({
            carId: "",
            city: "",
            date: ""
      });

      const [bookings, setBookings] = useState([]);

      // 🔥 Fill data from AI
      useEffect(() => {
            if (booking) {
                  setForm({
                        carId: booking.carId || "",
                        city: booking.city || "",
                        date: booking.date || ""
                  });
            }
      }, [booking]);

      // 🔥 Handle input change
      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value
            });
      };

      // 🔥 Submit booking
      const handleSubmit = async () => {
            try {
                  const res = await createBooking(form);

                  // Add new booking to table
                  setBookings((prev) => [...prev, res.booking]);

                  // Optional: reset form
                  setForm({
                        carId: "",
                        city: "",
                        date: ""
                  });

            } catch (err) {
                  console.error(err);
            }
      };

      return (
            <div id="booking" className="section">

                  {/* FORM */}
                  <div className="booking-container">
                        <h2>Book Test Drive</h2>

                        <input
                              name="carId"
                              placeholder="Car ID"
                              value={form.carId}
                              onChange={handleChange}
                        />

                        <input
                              name="city"
                              placeholder="City"
                              value={form.city}
                              onChange={handleChange}
                        />

                        <input
                              type="date"
                              name="date"
                              value={form.date}
                              onChange={handleChange}
                        />

                        <button onClick={handleSubmit}>Confirm Booking</button>
                  </div>

                  {/* ✅ BOOKING TABLE */}
                  {bookings.length > 0 && (
                        <div className="booking-table">
                              <h3>Booking History</h3>

                              <table>
                                    <thead>
                                          <tr>
                                                <th>Car ID</th>
                                                <th>City</th>
                                                <th>Date</th>
                                          </tr>
                                    </thead>

                                    <tbody>
                                          {bookings.map((b, i) => (
                                                <tr key={i}>
                                                      <td>{b.carId}</td>
                                                      <td>{b.city}</td>
                                                      <td>{b.date}</td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  )}

            </div>
      );
};

export default BookingForm;