// lib/tokenStorage.ts
const TOKEN_KEY = "access_token"

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(TOKEN_KEY)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

// دیکود کردن payload توکن JWT (بدون نیاز به کتابخانه خارجی)
function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("")
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error("Failed to decode token payload:", error)
    return null
  }
}

// استخراج parent_id (که در بک‌اند به‌صورت "sub" داخل توکن ذخیره شده)
export function getParentId(): number | null {
  const token = getToken()
  if (!token) return null

  const payload = decodeJwtPayload(token)
  const sub = payload?.sub

  if (typeof sub !== "string") return null

  const parentId = parseInt(sub, 10)
  return isNaN(parentId) ? null : parentId
}
