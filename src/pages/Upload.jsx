import { useState, useRef } from "react";
import { endpoints } from "../config/api";
import "./Upload.css";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
    setStatus(null);
    setMessage("");
    setProgress(0);
  };

  const uploadFile = async () => {
    if (!file || loading) return;

    setLoading(true);
    setStatus(null);
    setMessage("");
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          setProgress(Math.round((e.loaded / e.total) * 100));
        }
      });

      const promise = new Promise((resolve, reject) => {
        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const data = JSON.parse(xhr.responseText);
              setStatus("success");
              setMessage(data.message || "Upload successful.");
            } catch {
              setStatus("success");
              setMessage("Upload complete.");
            }
            resolve();
          } else {
            setStatus("error");
            setMessage(xhr.responseText || `Error: ${xhr.status}`);
            reject(new Error(xhr.statusText));
          }
        });
        xhr.addEventListener("error", () => {
          setStatus("error");
          setMessage("Network error. Is the API running?");
          reject(new Error("Network error"));
        });
        xhr.addEventListener("abort", () => reject(new Error("Aborted")));
      });

      xhr.open("POST", endpoints.upload());
      xhr.send(formData);
      await promise;
    } catch {
      if (!status) {
        setStatus("error");
        setMessage("Upload failed.");
      }
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  const reset = () => {
    setFile(null);
    setProgress(0);
    setStatus(null);
    setMessage("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="upload-page">
      <div className="container">
        <header className="upload-header">
          <h1 className="upload-title">Document Upload</h1>
          <p className="upload-subtitle">
            Upload documents to the RAG system for indexing and retrieval.
          </p>
        </header>

        <div className="card upload-card">
          <div className="upload-area">
            <input
              ref={inputRef}
              type="file"
              id="file-input"
              className="upload-input"
              onChange={handleFileChange}
              accept=".pdf,.txt,.md"
              disabled={loading}
            />
            <label htmlFor="file-input" className="upload-label">
              {file ? file.name : "Choose file (PDF, TXT, MD)"}
            </label>
          </div>

          {loading && (
            <div className="upload-progress-wrap">
              <div className="upload-progress-bar">
                <div
                  className="upload-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="upload-progress-text">{progress}%</span>
            </div>
          )}

          {status && (
            <div
              className={`upload-message upload-message-${status}`}
              role="alert"
            >
              {message}
            </div>
          )}

          <div className="upload-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={uploadFile}
              disabled={!file || loading}
            >
              {loading ? "Uploading…" : "Upload"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={reset}
              disabled={loading}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
