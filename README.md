# 🎮 TaskQuest

Gamified Task Manager — список задач в формате игры.  
Выполняй задачи → получай очки опыта → прокачивай уровень персонажа!

## 🚀 Стек технологий
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — сборка и dev-сервер
- [Redux Toolkit](https://redux-toolkit.js.org/) — управление состоянием
- [TailwindCSS](https://tailwindcss.com/) — стилизация интерфейса
- LocalStorage — сохранение данных пользователя

## ✨ Функционал
- ✅ Добавление, редактирование и удаление задач
- ✅ Прогресс-бар выполнения задач
- ✅ Персонаж с уровнями (XP за выполненные задачи)
- ✅ Система достижений *(например, 10 задач подряд)*
- ✅ Сохранение всех данных в LocalStorage

*(В планах)*
- 🎯 Ежедневные квесты
- 🛒 Магазин с кастомизацией персонажа
- 📊 Статистика по выполнению задач

## 📂 Структура проекта
```
src/
├─ assets/ # иконки, картинки
├─ components/ # переиспользуемые UI-компоненты
├─ features/ # Redux-slices (tasks, user, achievements)
├─ pages/ # страницы приложения (Home, Profile, Achievements)
├─ store.ts # конфигурация Redux
├─ App.tsx # корневой компонент
└─ main.tsx # точка входа
```


## Установка и запуск
```bash
# 1. Клонировать репозиторий
git clone https://github.com/username/taskquest.git
cd taskquest

# 2. Установить зависимости
npm install

# 3. Запуск dev-сервера
npm run dev

# 4. Сборка для продакшена
npm run build
```

## 🛠️ Использование

Добавь задачу через форму

Отметь её как выполненную → получи XP

Следи за прогрессом персонажа и открывай достижения

## 👩‍💻 Автор
Салимова Рузиля — [Telegram: @Ruzya0_0](https://t.me/Ruzya0_0)
