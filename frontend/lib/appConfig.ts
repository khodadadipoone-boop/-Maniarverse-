// lib/appConfig.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export const AUTH_ENDPOINTS = {
  register: `${API_BASE_URL}/parent/register`,
  verifyEmail: `${API_BASE_URL}/parent/verify-email`,
  resendVerification: `${API_BASE_URL}/parent/resend-verification-email`,
  login: `${API_BASE_URL}/parent/login`,
  forgotPassword: `${API_BASE_URL}/parent/forgot-password`,
  resetPassword: `${API_BASE_URL}/parent/reset-password`,
};

// TODO: مسیر prefix این router رو با بک‌اند دولوپر چک کن (فرض شده "/child" باشه)
export const CHILD_ENDPOINTS = {
  addChild: `${API_BASE_URL}/child/add`,
};
