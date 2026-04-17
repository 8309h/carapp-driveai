import axios from "axios";

export const sendQuery = async (query) => {
      const res = await axios.post("http://localhost:5000/api/v1/ai/interpret", {
            query
      });
      return res.data;
};


export const getCars = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/cars");
      return res.data.data;
};


export const createBooking = async (data) => {
      const res = await fetch("http://localhost:5000/api/v1/bookings", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
      });

      return res.json();
};

