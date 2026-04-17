const parseIntent = (query) => {
      const q = query.toLowerCase();

      if (q.includes("suv")) {
            return { action: "FILTER_CARS", filters: { type: "SUV" } };
      }

      if (q.includes("under")) {
            const num = parseInt(q.match(/\d+/)?.[0]);
            if (num) {
                  return {
                        action: "FILTER_CARS",
                        filters: { maxPrice: num * 100000 }
                  };
            }
      }

      if (q.includes("compare")) {
            return {
                  action: "COMPARE_CARS",
                  cars: ["car_004", "car_003"]
            };
      }

      if (q.includes("book")) {
            return {
                  action: "BOOK_TEST_DRIVE",
                  data: {
                        carId: "car_004",
                        city: "Kochi",
                        date: "2026-04-20"
                  }
            };
      }

      if (q.includes("family")) {
            return {
                  action: "RECOMMEND_CAR",
                  criteria: { seats: 5 }
            };
      }

      if (q.includes("dollar") || q.includes("usd")) {
            return {
                  action: "CHANGE_CURRENCY",
                  currency: "USD"
            };
      }

      if (q.includes("flagship")) {
            return {
                  action: "HIGHLIGHT_CAR",
                  carId: "car_004"
            };
      }

      return { action: "UNKNOWN" };
};

module.exports = { parseIntent };