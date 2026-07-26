// lib/apiConfig.ts

// TODO: پورت رو با بک‌اند دولوپر چک کن و همینجا (یا در .env.local) اصلاح کن
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export const AUTH_ENDPOINTS = {
  register: `${API_BASE_URL}/parent/register`,
  verifyEmail: `${API_BASE_URL}/parent/verify-email`,
};
