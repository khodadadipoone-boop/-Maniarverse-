# Maniarverse Architecture Review v1.0
**Status:** Post-MVP Recommendations | Founder Review

این سند برای توقف توسعه نوشته نشده است؛ پیشنهادهایی برای افزایش کیفیت معماری در نسخه‌های بعدی را ثبت می‌کند. Diagramهای فعلی برای شروع MVP مناسب هستند.

## A. Naming
- Get Child Memories Request (به‌جای Get Memories Request)
- Memory Gallery Items (به‌جای Memory Gallery Data)
- Memory Metadata + File URLs
- Start World Session (به‌جای Save Selected World)
- World Session (به‌جای World Experience)
- Prepare World Scene / Render World Scene
- Leave World یا End Session (به‌جای Complete Experience)
- Session State (به‌جای Experience Progress) · Session Saved (به‌جای Experience Completed)

## B. Security
- در همه‌ی Sequence Diagramها: Validate Parent Access
- قبل از Upload Memory: Validate Child Profile؛ قبل از View Memory: Validate Parent Access to Child Profile
- Login: Check Email Verified · Register: Save Parent as Unverified
- همه‌ی Requestها childProfileId را صریح ارسال کنند
- Backend فقط Metadata برگرداند؛ Storage فقط URL تولید کند

## C. Repository
- سه بخش: Product, Engineering, Foundation؛ هر Feature پوشه‌ی مستقل (README, Use Case, Activity, Sequence, API, Notes)
- همه‌ی فایل‌ها Version داشته باشند؛ Decision Log؛ Architecture Review داخل ریپو

## D. Product Flow
- تعریف Transition بین Select Child و First Encounter؛ First Encounter یک Experience است نه Use Case
- World Selection و Memory وابسته به Child؛ همه‌ی Sessionها قابل Resume؛ خروج بدون Completion

## E. UX
- بدون Countdown، بدون Gamification، Notification حداقل، Interface آرام، Interaction اختیاری

## F. Philosophy Alignment
- هیچ Feature کودک را Score یا Compare نکند؛ AI نقش Companion دارد نه Teacher
- قبل از Merge هر Feature: Does this deepen safety, trust, and presence?

## MVP Readiness
| بخش | وضعیت |
|---|---|
| Use Cases / Activity / Sequence / Architecture | ✅ Ready |
| Security | ⚠ چند اصلاح کوچک |
| Naming | ⚠ نسخه‌ی بعد |
| UX Philosophy | ⚠ |
| Foundation Alignment | ⚠ |

---
### یادداشت‌های Founder Review (اکتبر ۲۰۲۶)
1. جریان‌های Memory (Upload / Get Child Memories) **مشروط به تصمیم Canon درباره‌ی کپسول خاطره** هستند (وضعیت: OPEN؛ ر.ک. #052).
2. Philosophy/Foundation Alignment: **پیش از MVP — الزامی** (نه بعد از MVP).
