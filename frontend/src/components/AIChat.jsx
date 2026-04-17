import React, { useState, useRef } from "react";
import { sendQuery } from "../api";

const AIChat = ({ setCars, setSelectedCars, setBooking }) => {
      const [input, setInput] = useState("");
      const [messages, setMessages] = useState([]);
      const [minimized, setMinimized] = useState(false);

      const chatRef = useRef(null);

      // 🔥 SEND
      const handleSend = async (customInput) => {
            const query = customInput || input;
            if (!query.trim()) return;

            setMessages((prev) => [...prev, { role: "user", text: query }]);

            const res = await sendQuery(query);

            setMessages((prev) => [
                  ...prev,
                  { role: "ai", text: res.message }
            ]);

            // ACTIONS
            if (res.intent.action === "FILTER_CARS") {
                  setCars(res.data);
                  setTimeout(() => scrollTo("cars"), 100);
            }

            if (res.intent.action === "COMPARE_CARS") {
                  setSelectedCars(res.data);
                  setTimeout(() => scrollTo("compare"), 100);
            }

            if (res.intent.action === "BOOK_TEST_DRIVE") {
                  setBooking(res.intent.data);
                  setTimeout(() => scrollTo("booking"), 100);
            }

            // FALLBACK
            if (res.intent.action === "UNKNOWN") {
                  setMessages((prev) => [
                        ...prev,
                        { role: "ai", text: res.message || "Try one of these:" },
                        ...res.suggestions.map((s) => ({
                              role: "suggestion",
                              text: s
                        }))
                  ]);
            }

            setInput("");
      };

      const handleKeyDown = (e) => {
            if (e.key === "Enter") handleSend();
      };

      const scrollTo = (id) => {
            document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth"
            });
      };

      return (
            <div
                  ref={chatRef}
                  className={`chat ${minimized ? "minimized" : ""}`}
            >
                  {/* HEADER */}
                  <div className="chat-header">
                        <span>DriveAI</span>

                        <div>
                              <button onClick={() => setMinimized(!minimized)}>
                                    {minimized ? "⬆️" : "➖"}
                              </button>
                        </div>
                  </div>

                  {/* BODY */}
                  {!minimized && (
                        <>
                              <div className="messages">
                                    {messages.map((m, i) =>
                                          m.role === "suggestion" ? (
                                                <button
                                                      key={i}
                                                      className="suggestion-btn"
                                                      onClick={() => handleSend(m.text)}
                                                >
                                                      {m.text}
                                                </button>
                                          ) : (
                                                <div key={i} className={`msg ${m.role}`}>
                                                      {m.text}
                                                </div>
                                          )
                                    )}
                              </div>

                              <div className="chat-input">
                                    <input
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          onKeyDown={handleKeyDown}
                                          placeholder="Ask anything..."
                                    />
                                    <button onClick={() => handleSend()}>Send</button>
                              </div>
                        </>
                  )}
            </div>
      );
};

export default AIChat;