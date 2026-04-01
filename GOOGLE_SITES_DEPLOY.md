# Перенос сайта в Google Sites

## Как работает Google Sites + React

Google Sites **не позволяет** загружать HTML/CSS/JS файлы напрямую на страницу.
Единственный рабочий способ — **разместить сайт на внешнем хостинге** и вставить его
в Google Sites через блок **«Вставить → По URL»** (это создаёт iframe).

---

## Шаг 1 — Собрать сайт

В терминале проекта выполните:

```bash
npx vite build --config vite.google.config.ts
```

Готовая папка появится в `dist-google/`. Она содержит:
- `index.html` — точка входа
- `assets/` — JS, CSS файлы (с относительными путями)

---

## Шаг 2 — Загрузить на бесплатный хостинг

### Вариант А — GitHub Pages (рекомендуется, бесплатно)

1. Создайте репозиторий на [github.com](https://github.com) (например `my-cityservice`)
2. Загрузите **содержимое** папки `dist-google/` в репозиторий
3. Перейдите в **Settings → Pages**
4. В разделе **Source** выберите ветку `main`, папку `/ (root)`
5. Нажмите **Save**
6. Через 1–2 минуты сайт будет доступен по адресу:
   `https://ВАШ_ЛОГИН.github.io/my-cityservice/`

### Вариант Б — Netlify (ещё проще)

1. Откройте [netlify.com/drop](https://app.netlify.com/drop)
2. Перетащите папку `dist-google/` в браузер
3. Через 30 секунд получите ссылку вида `https://random-name.netlify.app`

### Вариант В — Cloudflare Pages

1. Откройте [pages.cloudflare.com](https://pages.cloudflare.com)
2. Создайте проект → загрузите `dist-google/`
3. Получите ссылку `https://project-name.pages.dev`

---

## Шаг 3 — Встроить в Google Sites

1. Откройте ваш сайт на [sites.google.com](https://sites.google.com)
2. Войдите в режим редактирования (кнопка карандаша)
3. На нужной странице нажмите **«Вставить»** (значок `<>` на правой панели)
4. Выберите **«По URL»**
5. Вставьте ссылку на ваш сайт, например:
   `https://ВАШ_ЛОГИН.github.io/my-cityservice/`
6. Нажмите **«Вставить»**
7. Отрегулируйте высоту блока (рекомендуется 800–1200px)
8. Нажмите **«Опубликовать»**

---

## Важные особенности

### Навигация
Сайт использует `HashRouter` — URL выглядит как:
```
https://your-site.github.io/#/catalog
https://your-site.github.io/#/blog
```
Это специально сделано для работы внутри iframe без ошибок навигации.

### Высота iframe
Если содержимое обрезается — увеличьте высоту блока в Google Sites.
На длинных страницах (каталог, блог) рекомендуется ≥ 1400px.

### Шрифты
Шрифты (Golos Text, Cormorant) загружаются с Google Fonts автоматически —
интернет-соединение обязательно.

### HTTPS
Убедитесь, что ваш хостинг работает по `https://` — иначе браузер заблокирует
загрузку iframe в Google Sites (смешанный контент).

---

## Альтернатива — отдельный домен

Если нужен красивый URL (например `service.mycompany.com`):
1. Купите домен на reg.ru / nic.ru / namecheap.com
2. Настройте DNS на Netlify/Cloudflare
3. Получите бесплатный SSL-сертификат
4. Добавьте свой домен в Google Sites: **Настройки → Пользовательский URL**

---

## Структура файлов после сборки

```
dist-google/
├── index.html          ← Главный файл
└── assets/
    ├── react-[hash].js         ← React + ReactDOM
    ├── router-[hash].js        ← React Router
    ├── ui-[hash].js            ← Radix UI компоненты
    ├── icons-[hash].js         ← Lucide иконки
    ├── index-[hash].js         ← Основной код приложения
    └── index-[hash].css        ← Все стили (Tailwind)
```

Загружайте **всю папку** целиком — файлы связаны между собой.
