
## 🔹 1. Starting Backend Development

**Prompt:**
"so acts like the software engineer and helpme to develop the above mention requirement"

**Outcome:**
Set up Express backend with routes, controllers, and basic API structure.

**Why this prompt:**
To break down the assignment and start with a structured backend instead of jumping into UI.

---

## 🔹 2. Defining API Structure and Data Flow

**Prompt:**
"data structure + API schema"

**Outcome:**
Defined how API responses should look:

```json
{ success, intent, data, message }
```

**Why this prompt:**
To ensure frontend and backend integration remains consistent and predictable.

---

## 🔹 3. Creating Initial Intent Parser

**Prompt:**
"This is my parse intent logic, how can I improve it?"

**Outcome:**
Started with simple keyword-based intent detection using `includes()`.

**Why this prompt:**
To validate the basic approach before making it more flexible.

---

## 🔹 4. Making Comparison Dynamic

**Prompt:**
"I want to compare car_001 and car_002 dynamically from query instead of hardcoding"

**Outcome:**
Implemented regex extraction:

```js
q.match(/car_\d+/g)
```

**Why this prompt:**
To remove hardcoded values and make the system dynamic.

---

## 🔹 5. Making Queries More Flexible

**Prompt:**
"like compare what i can make to make it generic AI query for other categories also"

**Outcome:**
Introduced keyword groups:

* compareWords
* filterWords
* bookingWords

**Why this prompt:**
To support natural language variations without using light NLP logic.

---

## 🔹 6. Handling Unknown Queries

**Prompt:**
"if user query doesn't exist I want to suggest the question which I have stored already"

**Outcome:**
Added fallback suggestions in parser and API response.

**Why this prompt:**
To improve user experience and guide users instead of failing silently.

---

## 🔹 8. Connecting Backend to Frontend

**Prompt:**
"help me to check this in postman and connect it to frontend"

**Outcome:**
Tested APIs and connected responses to React state updates.

**Why this prompt:**
To validate backend logic before integrating with UI.

---

## 🔹 9. Building Chat UI Interaction

**Prompt:**
"start developing frontend"

**Outcome:**
Created React components and integrated chat with backend API.

**Why this prompt:**
To begin UI development after backend was stable.

---

## 🔹 10. Enabling UI Actions from AI

**Prompt:**
" smoth scrolling in not working check it properly"

**Outcome:**
Implemented:

* scrollIntoView
* section highlighting

**Why this prompt:**
To connect AI responses with visual UI behavior.

---

## 🔹 11. Improving Chat Experience

**Prompt:**
"add  minimize chat bot section for better UI and make it dragable"

**Outcome:**
Added:

* Minimize functionality
* Resizable chat window

**Why this prompt:**
To improve usability and make the UI feel like a real product.

---

## 🔹 12. Making Suggestions Interactive

**Prompt:**
"add connect fallback suggestions to clickable UI"

**Outcome:**
Rendered suggestions as clickable buttons in chat.

**Why this prompt:**
To make fallback suggestions actionable instead of static text.

---

## 🔹 13. Booking Flow Integration

**Prompt:**
"i have to show bookign data in table format with booking details"

**Outcome:**
Implemented booking API and booking history table.

**Why this prompt:**
To add real-world functionality beyond UI interaction.

---

# 📌 FINAL THOUGHT

The development process followed an iterative approach:

* Started with simple logic
* Identified limitations
* Improved flexibility step by step
* Focused on user interaction and experience
