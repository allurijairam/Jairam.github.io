import { useState, useRef } from "react";
import { endpoints } from "../config/api";
import { getOrCreateSessionId } from "../utils/sessionId";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);


  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch(endpoints.chat(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, session_id: getOrCreateSessionId() }),
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`${res.status} ${res.statusText}${errText ? `: ${errText.slice(0, 100)}` : ""}`);
      }
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer ?? "No response." },
      ]);
    } catch (err) {
      const isNetworkOrCors =
        err.name === "TypeError" && err.message.includes("fetch");
      const hint = isNetworkOrCors
        ? " (Network/CORS error — see console. In production, enable CORS on your API for this site’s origin.)"
        : "";
      setError((err.message || "Request failed") + hint);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I couldn’t reach the backend. Check the browser console (F12) for details, and ensure the API allows requests from this origin (CORS).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file || uploading) return;
    e.target.value = "";
    setError(null);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("session_id", getOrCreateSessionId());
      const res = await fetch(endpoints.upload(), {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(res.statusText || "Upload failed");
      setError(null);
      setMessages((prev) => [...prev, { role: "assistant", content: `Uploaded "${file.name}" successfully. You can ask questions about it.` }]);
    } catch (err) {
      setError(err.message || "Upload failed. Is the API running?");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="chat-header-dot" />
        <span>RAG Demo</span>
      </div>
      <div className="chat-messages" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="chat-placeholder">
            Ask a question about me
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${msg.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"}`}
          >
            <span className="chat-bubble-content">{msg.content}</span>
          </div>
        ))}
        {loading && (
          <div className="chat-bubble chat-bubble-assistant chat-bubble-loading">
            <span className="chat-spinner" />
            <span>Thinking...</span>
          </div>
        )}
      </div>
      {error && <div className="chat-error">{error}</div>}
      <div className="chat-input-wrap">
        <input
          type="text"
          className="chat-input"
          placeholder="Ask a question about me"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="chat-file-input"
          aria-hidden
          onChange={handleFileChange}
          disabled={uploading}
        />
        <button
          type="button"
          className="btn btn-secondary chat-upload-btn"
          onClick={handleUploadClick}
          disabled={loading || uploading}
          aria-label="Upload PDF"
        >
          {uploading ? "…" : "Upload PDF Document"}
        </button>
        <button
          type="button"
          className="chat-send btn btn-primary"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          aria-label="Send"
        >
          Send
        </button>
      </div>
    </div>
  );
}
