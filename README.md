# Maniarverse

یک مخزن برای همه‌ی بخش‌های محصول، با ساختار بر اساس مسئولیت.

## ساختار

| مسیر | مسئولیت |
|---|---|
| `services/api` | بک‌اند FastAPI و دیتابیس |
| `apps/parent-web` | داشبورد والد (وب) |
| `apps/child-app` | اپ کودک (موتور تأییدشده) |
| `design` | طراحی، کاراکتر، لوگو |
| `research` | خلاصه‌ی پژوهش (بدون داده‌ی شخصی) |
| `docs/decisions` | Decision Log |
| `docs/planning` | Scope و معیارهای پذیرش |
| `docs/architecture` | سیاست داده و معماری |
| `docs/governance` | قواعد کار |

هر پوشه فایل `OWNER.md` دارد با مسئول، قرارداد، خروجی‌ها و وضعیت.

## قوانین

- هیچ داده‌ی کودک، فایل خصوصی، قرارداد، فیش یا مکاتبات مالی در مخزن نیست.
- هر تحویل با شماره‌ی کامیت در `OWNER.md` ثبت می‌شود.
- هر تصمیم معماری در `docs/decisions` ثبت می‌شود.

## راه‌اندازی

### API
```
cd services/api
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload
```

### وب والد
```
cd apps/parent-web
npm install
npm run dev
```

> توجه: `.env` را در هیچ پوشه‌ای کامیت نکن. نمونه‌ی متغیرها را در `services/api/.env.example` بگذار.
