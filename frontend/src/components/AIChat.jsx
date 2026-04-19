import React, { useState, useRef, useEffect } from "react";
import { sendQuery } from "../api";

const AIChat = ({ setCars, setSelectedCars, setBooking }) => {
      const [input, setInput] = useState("");
      const [messages, setMessages] = useState([]);
      const [minimized, setMinimized] = useState(false);

      const chatRef = useRef(null);

      // 🔥 DRAG STATE
      const isDragging = useRef(false);
      const offset = useRef({ x: 0, y: 0 });

      // 🔥 START DRAG
      const handleMouseDown = (e) => {
            isDragging.current = true;

            const rect = chatRef.current.getBoundingClientRect();

            offset.current = {
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top
            };
      };

      // 🔥 DRAG MOVE
      const handleMouseMove = (e) => {
            if (!isDragging.current) return;

            chatRef.current.style.left = `${e.clientX - offset.current.x}px`;
            chatRef.current.style.top = `${e.clientY - offset.current.y}px`;
            chatRef.current.style.right = "auto"; // important
            chatRef.current.style.bottom = "auto"; // important
      };

      // 🔥 STOP DRAG
      const handleMouseUp = () => {
            isDragging.current = false;
      };

      useEffect(() => {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);

            return () => {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
            };
      }, []);

      // ================= SEND =================

      const handleSend = async (customInput) => {
            const query = customInput || input;
            if (!query.trim()) return;

            setMessages((prev) => [...prev, { role: "user", text: query }]);

            const res = await sendQuery(query);

            setMessages((prev) => [
                  ...prev,
                  { role: "ai", text: res.message }
            ]);

            if (res.intent.action === "FILTER_CARS") {
                  setCars(res.data);
                  scrollTo("cars");
            }

            if (res.intent.action === "COMPARE_CARS") {
                  setSelectedCars(res.data);
                  scrollTo("compare");
            }

            if (res.intent.action === "BOOK_TEST_DRIVE") {
                  setBooking(res.intent.data);
                  scrollTo("booking");
            }

            if (res.intent.action === "UNKNOWN") {
                  setMessages((prev) => [
                        ...prev,
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
                  style={{ position: "fixed", right: "20px", bottom: "20px" }}
            >
                  {/* 🔥 HEADER (DRAG AREA) */}
                  <div className="chat-header" onMouseDown={handleMouseDown}>
                        <span>DriveAI</span>

                        <button onClick={() => setMinimized(!minimized)}>
                              {minimized ? "⬆️" : "➖"}
                        </button>
                  </div>

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