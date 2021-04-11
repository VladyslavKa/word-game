# word-game-scss

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Description 
Суть гри така:
1) Генеруєтьтся поле з буквами в яких заховані слова

2) По інтервалу з бекенда запитуємо /answers

3) Якщо в answers є слово, що заховане на ігровому полі, ми підсвічуємо його і додаємо в ліву колонку з знайденимим словами

Фронтенд:
- потрібно використати vue і vuex

- scss препроцесор + BEM
- можна використовувати сторонні бібліотеки, щоб не писати з нуля (наприклад [https://github.com/bunkat/wordfind](https://github.com/bunkat/wordfind))

Бекенд
- Node.js API (можна express)

- Фактично на бекенді нам потрібен тільки один роут (GET /answers) який буде імітувати отримання коментарів з лайв відео на FB. Тобто нам потрібно просто повертати рандомні елементи з захардкодженого масива даних. Захардкожений масив може виглядаи так: 

```jsx
[
{answer: 'ball', author: {name:'Ivan', picture:'some stock image'}},
{answer: 'green', author: {name:'Max', picture:'some stock image'}},
...
]
```

Лінк на дизайн [https://www.figma.com/file/JVt7yEDc5AJZcbFTeeS55J/Test-word-search?node-id=0%3A1](https://www.figma.com/file/JVt7yEDc5AJZcbFTeeS55J/Test-word-search?node-id=0%3A1)
Не обов'язково все точно робити. Деякі елементи можна спростити, для економії часу. Також можна взяти готовий boilerplate для vue і node. Мені більше важливо подивитись як ти будеш організовувати і структурувати код/називати класи
