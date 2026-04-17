const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");
const bookingRoutes= require("./routes/booking.routes");
const carRoutes = require("./routes/car.routes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/bookings", bookingRoutes);

app.use("/api/v1/cars", carRoutes);

module.exports = app;