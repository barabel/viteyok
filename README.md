# Viteyok

Фронтенд окружение на twig, ts, scss со сборщиком vite


## Файловая структура проекта

```bash
├── .husky/                                # Хаски для проверки коммитов
├── api/                                   # Папка для ответов server.js
├── cli/
│   └── generate-sprites/                  # скрипты для генерации icon.ts, в котором находится энам с названиями свг спрайтов в src/assets/svg
├── commands/
│   └── twigtojs/                          # скрипты для компиляции twig шаблон в js код
├── dist/                                  # скомпилированный код проекта, готовый для размещения на сервере
├── plugins/                               # папка с плагинами для vite
│   ├── vituum-vite-plugin-twig-1.1.0/     # плагин для вите для компиляции твиг шаблонов в html
│   ├── twigtojs.js                        # Плагин для импорта твиг шаблона в ts.
│   └── vite-plugin-icon-sprite.js         # Плагин для создания свг спрайта
├── src/                                   # исходники
│   ├── assets/                            # ресурсы, используемые в проекте (изображения, шрифты и т.д.), входные точки
│   │   ├── entry/                         # папка с входными точками
│   │   ├── fonts/                         # шрифты
│   │   ├── img/                           # изображения, используемые как дизайнерские решения
│   │   ├── styles/                        # scss файлы
│   │   └── svg/                           # папка с спрайтами свг. Свг отсюда будут генерятся в sprite.svg, находящийся в статике
│   ├── data/                              # массивы данных для вывода значений в twig файлах (каждая json соотвествует странице в папке views)
│   │   └── common.json                    # глобальные данные, использующиеся на всех страницах
│   │   └── index.json                     # данные для страницы
│   ├── locale/                            # папка со статичными данными для языков
│   └── views/                             # компоненты и шаблоны
│       ├── layout/                        # базовые шаблоны страницы
│       ├── __index.twig                   # страница со списком страниц, видно только на дев сервере, в билд не уходит
│       └── index.twig                     # шаблон страницы
├── static/                                # статические файлы проекта (изображения, видео и т.д.)
│   └── sprite.svg                         # собранный спрайт из файлов свг в src/assets/svg
├── .env.example                           # пример файла .env
├── .nvmrc                                 # файл с версией node, использующися на проекте
├── app.ts                                 # базовые функции для конфига vite
├── global.d.ts                            # типы для ts
├── server.ts                              # локальный сервер для имитации запросов по /api
└── vite.config.ts                         # конфигурационный файл vitejs
```

## Команды
запуск локального сервера (для имитации апи) local_server
```
npm run local_server
```
запуск сервера разработки
```
npm run dev
```
создание билда сайта
```
npm run build
```
