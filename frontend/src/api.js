import axios from "axios";

// http://localhost:5000
export const sendQuery = async (query) => {
      const res = await axios.post("https://carapp-driveai.onrender.com/api/v1/ai/interpret", {
            query
      });
      return res.data;
};


export const getCars = async () => {
      const res = await axios.get("https://carapp-driveai.onrender.com/api/v1/cars");
      return res.data.data;
};


export const createBooking = async (data) => {
      const res = await fetch("https://carapp-driveai.onrender.com/api/v1/bookings", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
      });

      return res.json();
};

