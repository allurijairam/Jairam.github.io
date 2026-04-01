const STORAGE_KEY = "rag_session_id";

/**
 * Returns a stable session ID for this browser.
 * Generates a UUID once and persists it in localStorage so chat history
 * is maintained across messages without relying on cookies.
 */
export function getOrCreateSessionId() {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}
