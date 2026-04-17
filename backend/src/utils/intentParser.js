const hasKeyword = (q, keywords) => {
      return keywords.some(k => q.includes(k));
};

const parseIntent = (query) => {
      const q = query.toLowerCase();

      // 🔥 Extract entities
      const carMatches = q.match(/car_\d+/g) || [];

      const priceMatch = q.match(/\d+/);
      const price = priceMatch ? parseInt(priceMatch[0]) : null;

      const cities = ["mumbai", "delhi", "kochi", "bangalore"];
      const city = cities.find((c) => q.includes(c)) || "";

      const getNextDay = () => {
            const d = new Date();
            d.setDate(d.getDate() + 1);
            return d.toISOString().split("T")[0];
      };

      // 🔥 KEYWORD GROUPS (GENERIC AI BEHAVIOR)
      const compareWords = ["compare", "difference", "vs", "with"];
      const bookWords = ["book", "booking", "test drive"];
      const filterWords = ["suv", "under", "price", "cheap"];
      const recommendWords = ["family", "best", "suggest"];
      const currencyWords = ["usd", "dollar"];

      // ================= PRIORITY =================

      // 🔥 COMPARE (generic)
      if (carMatches.length >= 2 || hasKeyword(q, compareWords)) {
            return {
                  action: "COMPARE_CARS",
                  cars: carMatches.slice(0, 2),
                  message:
                        carMatches.length < 2
                              ? "Try: compare car_001 and car_002"
                              : ""
            };
      }

      // 🔥 BOOK
      if (hasKeyword(q, bookWords)) {
            return {
                  action: "BOOK_TEST_DRIVE",
                  data: {
                        carId: carMatches[0] || "",
                        city,
                        date: getNextDay()
                  }
            };
      }

      // 🔥 FILTER
      if (hasKeyword(q, filterWords)) {
            return {
                  action: "FILTER_CARS",
                  filters: {
                        type: q.includes("suv") ? "SUV" : undefined,
                        maxPrice: price ? price * 100000 : undefined
                  }
            };
      }

      // 🔥 RECOMMEND
      if (hasKeyword(q, recommendWords)) {
            return {
                  action: "RECOMMEND_CAR",
                  criteria: { seats: 5 }
            };
      }

      // 🔥 CURRENCY
      if (hasKeyword(q, currencyWords)) {
            return {
                  action: "CHANGE_CURRENCY",
                  currency: "USD"
            };
      }

      // 🔥 HIGHLIGHT
      if (carMatches.length === 1) {
            return {
                  action: "HIGHLIGHT_CAR",
                  carId: carMatches[0]
            };
      }

      // 🔥 FALLBACK
      return {
            action: "UNKNOWN",
            suggestions: [
                  "Compare car_001 and car_002",
                  "Show SUVs under 20 lakhs",
                  "Book car_003 in Mumbai",
                  "Best car for family",
                  "Show prices in USD"
            ]
      };
};

module.exports = { parseIntent };