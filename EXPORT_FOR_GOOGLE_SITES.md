# Инструкция по переносу сайта в Google Sites

## Почему нельзя просто «залить» сайт в Google Sites

Google Sites — конструктор страниц, он **не принимает загрузку HTML/CSS/JS файлов напрямую**.
Единственный способ показать полноценный React-сайт через Google Sites — это:

1. Задеплоить сайт на внешний хостинг
2. Вставить его в Google Sites через блок **«Встроить» (Embed)**

---

## Шаг 1. Задеплоить сайт (выберите один вариант)

### Вариант A: Netlify (рекомендуется, бесплатно)

1. Создайте аккаунт на [netlify.com](https://netlify.com)
2. Нажмите **«Add new site» → «Deploy manually»**
3. Соберите сайт командой:
   ```
   npm run build
   ```
4. Перетащите папку `dist/` в Netlify — сайт опубликуется за секунды
5. Вы получите URL вида: `https://ваш-сайт.netlify.app`

### Вариант B: GitHub Pages (бесплатно)

1. Создайте репозиторий на [github.com](https://github.com)
2. Загрузите весь код проекта
3. В настройках репозитория → **Pages → Source: GitHub Actions**
4. Создайте файл `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```
5. Вы получите URL вида: `https://ваш-логин.github.io/название-репо`

---

## Шаг 2. Вставить сайт в Google Sites через iframe

1. Откройте [sites.google.com](https://sites.google.com)
2. Создайте или откройте нужный сайт
3. В редакторе нажмите **«Вставить» → «Встроить URL»**
4. Введите URL вашего сайта, например:
   ```
   https://ваш-сайт.netlify.app
   ```
5. Нажмите **«Вставить»**
6. Растяните блок на всю ширину страницы
7. В настройках блока выберите высоту ~900px или «По содержимому»

---

## Важные технические моменты

### Что было изменено в коде для совместимости:

| Изменение | Зачем |
|-----------|-------|
| `BrowserRouter` → `HashRouter` | Статические хостинги не умеют обрабатывать HTML5 History API. HashRouter использует `#` в URL, что работает без сервера |
| `public/_redirects` | Для Netlify: все URL перенаправляются на `index.html` |
| `public/404.html` | Для GitHub Pages: страница 404 перенаправляет на главную |

### URL при HashRouter выглядит так:
- `https://ваш-сайт.netlify.app/#/` — главная
- `https://ваш-сайт.netlify.app/#/catalog` — каталог
- `https://ваш-сайт.netlify.app/#/executors` — исполнители

---

## Внешний вид сайта НЕ изменился

Все изменения технические, визуально сайт выглядит точно так же, как и раньше.
