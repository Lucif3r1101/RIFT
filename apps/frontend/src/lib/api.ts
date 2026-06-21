import { API_URL } from "../constants/game";

export async function callApi<T>(path: string, method: string, body?: unknown, token?: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const data = (await response.json()) as T | { message?: string };
  if (!response.ok) {
    const message = (data as { message?: string }).message ?? "Request failed.";
    throw new Error(message);
  }
  return data as T;
}

export function formatTimer(deadline?: string): string {
  if (!deadline) {
    return "--";
  }

  const remainingMs = new Date(deadline).getTime() - Date.now();
  const seconds = Math.max(0, Math.floor(remainingMs / 1000));
  // Practice / untimed turns use a far-future deadline — show ∞ instead of a
  // meaningless "3578s" countdown.
  if (seconds >= 1800) {
    return "∞";
  }
  if (seconds >= 60) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  return `${seconds}s`;
}
