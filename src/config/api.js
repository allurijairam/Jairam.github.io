/**
 * Backend API base URL for other services (e.g. your EC2 public IP).
 */
export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:8000";

/** Chat API URL. In dev we use the Vite proxy (/api/chat) to avoid CORS. */
const CHAT_API_DEFAULT =
  "https://oald5wjp5c.execute-api.us-east-1.amazonaws.com/chat";
export const CHAT_API_URL =
  import.meta.env.VITE_CHAT_API_URL ||
  (import.meta.env.DEV ? "/api/chat" : CHAT_API_DEFAULT);

/** Upload API URL. POST multipart/form-data with key "pdf" and value = file. */
export const UPLOAD_API_URL =
  import.meta.env.VITE_UPLOAD_API_URL ||
  "https://oald5wjp5c.execute-api.us-east-1.amazonaws.com/upload";

export const endpoints = {
  chat: () => CHAT_API_URL,
  upload: () => UPLOAD_API_URL,
};
