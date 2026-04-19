# 🚗 DriveAI — AI-Navigated Car Dealership Website

## 🔗 Live Demo

[Add your deployed link here]

## 📂 GitHub Repository

[Add your repo link here]

---

## 📌 Overview

DriveAI is a single-page AI-powered car dealership website where users can interact using natural language queries. The AI assistant not only responds conversationally but also **actively manipulates the UI**, creating a dynamic and guided browsing experience.

---

## ✨ Key Features

### 🤖 AI Assistant (Core Feature)

* Accepts natural language queries
* Performs UI actions based on intent
* Provides conversational responses

---

### 🔍 Intelligent Query Handling

Supports multiple query types:

1. **Filter Cars**

   * Example: *"Show SUVs under 20 lakhs"*

2. **Compare Cars**

   * Example: *"Compare car_001 and car_002"*

3. **Book Test Drive**

   * Example: *"Book car_003 in Mumbai"*

4. **Recommendations**

   * Example: *"Best car for family"*

5. **Currency Conversion**

   * Example: *"Show prices in USD"*

6. **Fallback Suggestions**

   * Suggests queries when input is unclear

---

### 🎯 Dynamic UI Updates

* Smooth scrolling to sections
* Highlighting relevant sections
* Filtering car list dynamically
* Updating comparison table
* Prefilling booking form
* Clickable AI suggestions

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS (Glassmorphism UI)
* Axios

### Backend

* Node.js
* Express.js

### Data

* Static JSON (cars dataset)

---

## 🧠 AI Logic (Custom Built)

Instead of using external AI APIs, a **custom NLP-like parser** is implemented:

* Keyword-based intent detection
* Entity extraction (carId, price, city)
* Priority-based rule handling
* Fallback suggestion system

---

## ⚙️ Setup Instructions

### 1. Clone Repo

```bash
git clone <repo-link>
cd driveai
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔍 Query Types Handled

* Compare cars
* Filter by type/price
* Book test drive
* Recommend cars
* Currency change
* Highlight specific car
* Unknown queries → suggestions

---

## 🚀 Future Improvements

* Add real AI (OpenAI API)
* Voice input support
* Persistent database
* User authentication
* Chat history storage

---

## 🎥 Demo Video (Optional)

[Add video link if available]

---

## 📌 Author

Harshal Wagh
