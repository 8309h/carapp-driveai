let bookings = [];

const createBooking = (req, res) => {
      try {
            const booking = {
                  id: Date.now(),
                  ...req.body,
                  createdAt: new Date()
            };

            bookings.push(booking);

            return res.json({
                  success: true,
                  message: "Test drive booked successfully",
                  booking
            });

      } catch (error) {
            return res.status(500).json({ error: "Booking failed" });
      }
};

const getBookings = (req, res) => {
      return res.json({
            success: true,
            bookings
      });
};

module.exports = {
      createBooking,
      getBookings
}