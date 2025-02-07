# 📌 Kanban/Todo

Kanban/Todo приложение на **NestJS (Backend) + Next.js (Frontend)** с использованием **PostgreSQL, Prisma**. 🚀

## 🔥 Функционал
- 📌 Создание, редактирование и удаление задач
- 📂 Доска Kanban с колонками
- ⏳ Интеграция техники Pomodoro для управления временем
- 🔄 Работа с кругами 
- 👥 Аутентификация пользователей (JWT)
- 📊 Фильтры и сортировка задач

---

## 🚀  Запуск 
#### 📌 Backend (NestJS)
```bash
cd backend
npm install
cp .env.example .env  # Настройка переменных окружения
npx prisma migrate dev  # Запуск миграций
npm run start:dev
```

#### 📌 Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
- Backend  - на `http://localhost:4200`
- Frontend – на `http://localhost:3000`

---

## 📂 Структура проекта
```
kanban-todo/
│── backend/      # Сервер на NestJS
│── frontend/     # Клиент на Next.js
│── README.md     # Документация
```

---

## 🛠 Используемый стек
- **Backend:** NestJS, Prisma.
- **Frontend:** Next.js 14, TypeScript, React-Query, Tailwind, DND(для drag-and-drop функционала).
- **Хранение:** PostgreSQL.
