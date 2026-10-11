import { CHILD_ENDPOINTS } from "@/lib/appConfig";
import { getToken } from "@/lib/tokenStorage";
import type { Child, ChildCreateInput } from "@/components/main/Data";

let hasLoggedListShape = false;
let hasLoggedAddShape = false;

function authHeaders(): HeadersInit {
  const token = getToken();
  if (!token) {
    throw new Error("No auth token available. Please log in again.");
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchChildren(): Promise<Child[]> {
  const token = getToken();
  if (!token) return [];

  const res = await fetch(CHILD_ENDPOINTS.list, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!hasLoggedListShape) {
    hasLoggedListShape = true;
    console.log("[childrenApi] GET /child raw response shape:", data);
  }

  if (!res.ok) {
    const message =
      typeof data?.detail === "string"
        ? data.detail
        : "Failed to fetch children.";
    throw new Error(message);
  }

  return data as Child[];
}

export async function addChild(input: ChildCreateInput): Promise<Child> {
  const res = await fetch(CHILD_ENDPOINTS.add, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });

  const data = await res.json();

  if (!hasLoggedAddShape) {
    hasLoggedAddShape = true;
    console.log("[childrenApi] POST /child/add raw response shape:", data);
  }

  if (!res.ok) {
    const message = Array.isArray(data?.detail)
      ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
      : typeof data?.detail === "string"
        ? data.detail
        : "Failed to add child.";
    throw new Error(message);
  }

  return data as Child;
}
