const { parseIntent } = require("../utils/intentParser");
const { cars } = require("../data/cars");

const processQuery = (req, res) => {
      try {
            const { query } = req.body;

            if (!query) {
                  return res.status(400).json({ error: "Query is required" });
            }

            const intent = parseIntent(query);

            let result = [];

            // 🔥 APPLY LOGIC BASED ON INTENT

            if (intent.action === "FILTER_CARS") {
                  result = cars;

                  if (intent.filters?.type) {
                        result = result.filter(
                              (car) => car.type === intent.filters.type
                        );
                  }

                  if (intent.filters?.maxPrice) {
                        result = result.filter(
                              (car) => car.priceINR <= intent.filters.maxPrice
                        );
                  }
            }

            if (intent.action === "RECOMMEND_CAR") {
                  result = cars.filter((car) => car.seats >= 5);
            }

            if (intent.action === "HIGHLIGHT_CAR") {
                  result = cars.find((car) => car.id === intent.carId);
            }

            if (intent.action === "COMPARE_CARS") {
                  result = cars.filter((car) =>
                        intent.cars.includes(car.id)
                  );
            }

            const responses = {
                  FILTER_CARS: "Here are cars matching your filters.",
                  COMPARE_CARS: "Comparing selected models.",
                  BOOK_TEST_DRIVE: "Prefilling booking form.",
                  RECOMMEND_CAR: "Best car for your needs.",
                  CHANGE_CURRENCY: "Switching currency.",
                  HIGHLIGHT_CAR: "Highlighting selected car."
            };

            return res.json({
                  success: true,
                  intent,
                  data: result, 
                  message: responses[intent.action] || "Try another query."
            });

      } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports = { processQuery };