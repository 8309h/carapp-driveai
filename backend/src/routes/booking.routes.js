const express =  require("express")
const  {
      createBooking,
      getBookings
} =  require("../controllers/booking.controller.js");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);

module.exports = router;