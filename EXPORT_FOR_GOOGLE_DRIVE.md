# Инструкция по переносу сайта на Google Drive

## Как это работает

Google Drive позволяет хранить HTML/CSS/JS файлы и открывать их через специальный viewer.
Ссылка будет выглядеть так:
```
https://drive.google.com/file/d/ВАШ_ID/view
```

> ⚠️ **Важно**: Google Drive viewer показывает HTML-страницы, но **блокирует выполнение JavaScript** по соображениям безопасности. Поэтому React-приложение в чистом виде там не заработает.

---

## ✅ Рекомендуемый способ: Google Drive + DriveToWeb / htmlpreview.github.io

### Вариант A: Через htmlpreview.github.io (самый простой)

1. Загрузите собранные файлы в **GitHub** (бесплатно)
2. Откройте `index.html` в репозитории
3. Скопируйте raw-ссылку на файл
4. Откройте: `https://htmlpreview.github.io/?ВАШ_URL`

---

### Вариант B: Через Google Drive + Netlify Drop (рекомендуется)

Это самый надёжный способ, который занимает 2 минуты:

#### Шаг 1: Собрать сайт

1. Скачайте проект (кнопка экспорта)
2. Установите зависимости и соберите:
   ```bash
   npm install
   npm run build
   ```
   Или с нашим специальным конфигом для Google Drive:
   ```bash
   npx vite build --config vite.google.config.ts
   ```
3. В папке `dist-google/` (или `dist/`) появятся готовые файлы

#### Шаг 2: Разместить на Netlify (бесплатно, 2 минуты)

1. Откройте [app.netlify.com/drop](https://app.netlify.com/drop)
2. **Перетащите** папку `dist-google/` прямо на страницу
3. Получите URL вида `https://random-name.netlify.app`
4. Этот URL можно вставить в ссылку на Google Drive документе

---

### Вариант C: Прямо из Google Drive через viewer

Для этого нужно выгрузить файлы **без JavaScript фреймворка** (статический HTML).
Это потребует экспорта в простой HTML — смотрите раздел ниже.

---

## 🗂️ Что загружать на Google Drive

После сборки (`npm run build`) у вас будет папка `dist/` со следующей структурой:

```
dist/
├── index.html          ← Главный файл (открывать его)
├── assets/
│   ├── index-XXXX.js   ← Весь JavaScript
│   ├── index-XXXX.css  ← Все стили
│   └── ...             ← Шрифты, иконки
```

### Загрузка на Google Drive:

1. Откройте [drive.google.com](https://drive.google.com)
2. Создайте новую папку, например `my-site`
3. Загрузите **всё содержимое** папки `dist/` в эту папку на Drive
4. Важно: загрузите и `index.html`, и папку `assets/` целиком
5. Откройте `index.html` → нажмите **«Открыть с помощью» → «Google Документы»** или скопируйте прямую ссылку

---

## 🔧 Специальный конфиг для Google Drive

В проекте создан файл `vite.google.config.ts` — он собирает сайт с **относительными путями** (не `/assets/...`, а `./assets/...`), что критично для работы с Google Drive.

```bash
# Собрать с конфигом для Google Drive
npx vite build --config vite.google.config.ts
```

Собранные файлы окажутся в папке `dist-google/`.

---

## 📋 Пошаговая инструкция (итого)

| Шаг | Действие |
|-----|----------|
| 1 | Скачайте проект |
| 2 | Запустите `npm install` |
| 3 | Запустите `npx vite build --config vite.google.config.ts` |
| 4 | Откройте [app.netlify.com/drop](https://app.netlify.com/drop) |
| 5 | Перетащите папку `dist-google/` |
| 6 | Скопируйте ссылку с Netlify |
| 7 | Добавьте ссылку в Google Drive документ или поделитесь ею |

---

## Почему HashRouter уже настроен

Роутинг в проекте использует `HashRouter` — URL выглядит как `site.com/#/catalog`.
Это специально сделано для работы на статических хостингах, включая Google Drive и Netlify.

| Страница | URL |
|----------|-----|
| Главная | `index.html#/` |
| Каталог | `index.html#/catalog` |
| Исполнители | `index.html#/executors` |
| Блог | `index.html#/blog` |
