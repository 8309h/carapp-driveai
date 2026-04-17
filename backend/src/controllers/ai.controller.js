const { parseIntent } = require("../utils/intentParser");
const { cars } = require("../data/cars");

const processQuery = (req, res) => {
      try {
            const { query } = req.body;

            if (!query) {
                  return res.status(400).json({
                        success: false,
                        message: "Query is required"
                  });
            }

            const intent = parseIntent(query);
            let result = [];

            // ================= ACTION HANDLING =================

            switch (intent.action) {

                  // 🔥 FILTER
                  case "FILTER_CARS":
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
                        break;

                  // 🔥 COMPARE
                  case "COMPARE_CARS":
                        if (intent.cars?.length >= 2) {
                              result = cars.filter((car) =>
                                    intent.cars.includes(car.id)
                              );
                        } else {
                              result = [];
                        }
                        break;

                  // 🔥 RECOMMEND
                  case "RECOMMEND_CAR":
                        result = cars.filter((car) => car.seats >= 5);
                        break;

                  // 🔥 HIGHLIGHT (always return array)
                  case "HIGHLIGHT_CAR":
                        result = cars.filter((car) => car.id === intent.carId);
                        break;

                  // 🔥 BOOK
                  case "BOOK_TEST_DRIVE":
                        result = intent.data; 
                        break;

                  // 🔥 CURRENCY
                  case "CHANGE_CURRENCY":
                        result = [];
                        break;

                  // 🔥 UNKNOWN
                  case "UNKNOWN":
                        return res.json({
                              success: true,
                              intent,
                              data: [],
                              message: intent.message || "I didn’t understand.",
                              suggestions: intent.suggestions || []
                        });

                  default:
                        result = [];
            }

            // ================= RESPONSE MESSAGES =================

            const responses = {
                  FILTER_CARS: "Here are cars matching your search.",
                  COMPARE_CARS:
                        intent.cars?.length >= 2
                              ? "Comparing selected cars."
                              : intent.message || "Please select two cars to compare.",
                  BOOK_TEST_DRIVE: "Prefilling booking form.",
                  RECOMMEND_CAR: "Here’s a good option for your needs.",
                  CHANGE_CURRENCY: "Switching currency.",
                  HIGHLIGHT_CAR: "Showing selected car."
            };

            return res.json({
                  success: true,
                  intent,
                  data: result,
                  message: responses[intent.action] || "Done"
            });

      } catch (error) {
            console.error("AI Controller Error:", error);

            return res.status(500).json({
                  success: false,
                  message: "Internal Server Error"
            });
      }
};

module.exports = { processQuery };